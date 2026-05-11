#!/usr/bin/env bun
/**
 * Gera migrações SQLite a partir de `basedados.json` (contrato Room exportado).
 *
 * Uso: `bun run db:gerar-migracoes`
 *
 * Saídas:
 * - `src/infra/db/migrations/001_tbl_pasta.sql` — só `tbl_pasta` (primeira migração histórica)
 * - `src/infra/db/migrations/002_esquema_v37.sql` — restantes tabelas + PRAGMA + índices (ordem por FK)
 * - `src/infra/db/contrato-bd.gerado.ts` — constantes para smoke (`TABELAS_DOMINIO_ESPERADAS`, versão)
 *
 * Em produção o bundle usa apenas os `.sql` versionados; este script é para regenerar
 * quando o contrato JSON mudar (o JSON pode não ir para certos pacotes de deploy).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const raiz = join(__dirname, '..');
const caminhoJson = join(raiz, 'basedados.json');
const dirMigracoes = join(raiz, 'src', 'infra', 'db', 'migrations');
const caminhoContratoTs = join(raiz, 'src', 'infra', 'db', 'contrato-bd.gerado.ts');

const PRIMEIRA_TABELA = 'tbl_pasta';

function substituirNomeTabela(sql, nomeTabela) {
  return sql.replaceAll('${TABLE_NAME}', nomeTabela);
}

/**
 * Ordena tabelas da migração 002: respeita FKs cujo pai também está neste conjunto
 * (`tbl_pasta` já existe na 001; referências só a ela não impõem ordem interna).
 */
function ordenarTabelasPara002(entities, excluir) {
  const nomes = entities.map((e) => e.tableName).filter((t) => t !== excluir);
  const noConjunto = new Set(nomes);
  const entradas = new Map(nomes.map((n) => [n, 0]));
  const filhos = new Map(nomes.map((n) => [n, []]));

  for (const ent of entities) {
    if (ent.tableName === excluir) continue;
    for (const fk of ent.foreignKeys ?? []) {
      const pai = fk.table;
      const filho = ent.tableName;
      if (noConjunto.has(pai) && noConjunto.has(filho)) {
        filhos.get(pai).push(filho);
        entradas.set(filho, (entradas.get(filho) ?? 0) + 1);
      }
    }
  }

  const fila = nomes.filter((n) => entradas.get(n) === 0).sort();
  const saida = [];

  while (fila.length > 0) {
    const n = fila.shift();
    if (n === undefined) break;
    saida.push(n);
    for (const f of filhos.get(n) ?? []) {
      entradas.set(f, (entradas.get(f) ?? 0) - 1);
      if (entradas.get(f) === 0) {
        fila.push(f);
        fila.sort();
      }
    }
  }

  if (saida.length !== nomes.length) {
    const falta = nomes.filter((t) => !saida.includes(t));
    throw new Error(`Ordenação por FK impossível ou ciclo. Tabelas em falta: ${falta.join(', ')}`);
  }
  return saida;
}

function main() {
  const raw = readFileSync(caminhoJson, 'utf8');
  const j = JSON.parse(raw);
  const db = j.database;
  if (!db?.entities?.length) {
    throw new Error('basedados.json: falta database.entities');
  }

  const versao = db.version;
  const entities = db.entities;
  const porNome = Object.fromEntries(entities.map((e) => [e.tableName, e]));

  const pasta = porNome[PRIMEIRA_TABELA];
  if (!pasta) {
    throw new Error(`Entidade obrigatória em falta: ${PRIMEIRA_TABELA}`);
  }

  const ordem002 = ordenarTabelasPara002(entities, PRIMEIRA_TABELA);
  if (1 + ordem002.length !== entities.length) {
    throw new Error(
      `Inconsistência: migração 001 tem 1 tabela, 002 deveria ter ${entities.length - 1}, tem ${ordem002.length}.`,
    );
  }

  let sql001 = `-- Gerado por scripts/gerar-migracao-esquema.mjs (não editar manualmente)\n`;
  sql001 += `-- Contrato: database.version ${versao}\n`;
  sql001 += substituirNomeTabela(pasta.createSql, pasta.tableName) + ';\n';

  let sql002 = `-- Gerado por scripts/gerar-migracao-esquema.mjs (não editar manualmente)\n`;
  sql002 += `-- Contrato: database.version ${versao}\n`;
  sql002 += 'PRAGMA foreign_keys = ON;\n\n';

  for (const nome of ordem002) {
    const ent = porNome[nome];
    if (!ent) throw new Error(`Entidade desconhecida: ${nome}`);
    sql002 += substituirNomeTabela(ent.createSql, ent.tableName) + ';\n\n';
  }

  for (const ent of entities) {
    if (!ent.indices?.length) continue;
    for (const ix of ent.indices) {
      sql002 += substituirNomeTabela(ix.createSql, ent.tableName) + ';\n\n';
    }
  }

  writeFileSync(join(dirMigracoes, '001_tbl_pasta.sql'), sql001, 'utf8');
  writeFileSync(join(dirMigracoes, '002_esquema_v37.sql'), sql002.trim() + '\n', 'utf8');

  const tblCount = entities.filter((e) => e.tableName.startsWith('tbl_')).length;
  if (tblCount !== entities.length) {
    console.warn('Aviso: existem entidades cujo tableName não começa por tbl_');
  }

  const ts = `/**
 * Gerado por bun run db:gerar-migracoes (scripts/gerar-migracao-esquema.mjs). Não editar.
 * Última geração: contrato database.version ${versao}, ${tblCount} tabelas dominio (prefixo tbl_).
 */
export const DATABASE_CONTRACT_VERSION = ${versao} as const;
export const TABELAS_DOMINIO_ESPERADAS = ${tblCount} as const;
export const NOMES_TABELAS_DOMINIO_ESPERADAS = ${JSON.stringify(
    entities.map((e) => e.tableName),
    null,
    2,
  )} as const;
`;
  writeFileSync(caminhoContratoTs, ts, 'utf8');

  console.log(`OK: ${tblCount} entidades, versão contrato ${versao}`);
  console.log(`  → ${join(dirMigracoes, '001_tbl_pasta.sql')}`);
  console.log(`  → ${join(dirMigracoes, '002_esquema_v37.sql')}`);
  console.log(`  → ${caminhoContratoTs}`);
}

main();
