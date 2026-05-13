import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import { DATABASE_CONTRACT_VERSION, NOMES_TABELAS_DOMINIO_ESPERADAS } from '../../../infra/db/contrato-bd.gerado.js';
import { criarMetadadosBackup } from '../dominio/pacote-backup.js';
import type { MetadadosBackup } from '../dominio/pacote-backup.js';

type ValorBackup = string | number | null | { tipo: 'blob'; base64: string };

export interface BackupPapiro {
  metadados: MetadadosBackup;
  tabelas: Record<string, Array<Record<string, ValorBackup>>>;
}

function bytesParaBase64(bytes: Uint8Array): string {
  let binario = '';
  for (const byte of bytes) binario += String.fromCharCode(byte);
  return btoa(binario);
}

function base64ParaBytes(valor: string): Uint8Array {
  const binario = atob(valor);
  const bytes = new Uint8Array(binario.length);
  for (let i = 0; i < binario.length; i += 1) bytes[i] = binario.charCodeAt(i);
  return bytes;
}

function valorParaBackup(valor: unknown): ValorBackup {
  if (valor instanceof Uint8Array) return { tipo: 'blob', base64: bytesParaBase64(valor) };
  if (valor instanceof ArrayBuffer) return { tipo: 'blob', base64: bytesParaBase64(new Uint8Array(valor)) };
  if (typeof valor === 'number' || typeof valor === 'string' || valor === null) return valor;
  return String(valor ?? '');
}

function valorDoBackup(valor: ValorBackup): unknown {
  if (typeof valor === 'object' && valor !== null && 'tipo' in valor && valor.tipo === 'blob') {
    return base64ParaBytes(valor.base64);
  }
  return valor;
}

async function colunasTabela(nomeTabela: string): Promise<string[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql(`PRAGMA table_info("${nomeTabela}")`);
  return (linhas as { name: string }[]).map((row) => row.name);
}

export async function exportarBackupPapiro(): Promise<BackupPapiro> {
  const { sql } = obterClienteSqlocal();
  const tabelas: BackupPapiro['tabelas'] = {};
  const resumo: { nome: string; linhas: number }[] = [];

  for (const nomeTabela of NOMES_TABELAS_DOMINIO_ESPERADAS) {
    const colunas = await colunasTabela(nomeTabela);
    const consulta = `SELECT ${colunas.map((c) => `"${c}"`).join(', ')} FROM "${nomeTabela}"`;
    const linhas = await sql(consulta);
    tabelas[nomeTabela] = (linhas as Record<string, unknown>[]).map((linha) =>
      Object.fromEntries(Object.entries(linha).map(([chave, valor]) => [chave, valorParaBackup(valor)])),
    );
    resumo.push({ nome: nomeTabela, linhas: tabelas[nomeTabela]?.length ?? 0 });
  }

  return {
    metadados: criarMetadadosBackup({
      databaseVersion: DATABASE_CONTRACT_VERSION,
      tabelas: resumo,
      criptografado: false,
    }),
    tabelas,
  };
}

export async function restaurarBackupPapiro(backup: BackupPapiro): Promise<void> {
  const { sql } = obterClienteSqlocal();
  if (backup.metadados.databaseVersion !== DATABASE_CONTRACT_VERSION) {
    throw new Error('Versão de backup incompatível com o contrato atual.');
  }

  await sql`PRAGMA foreign_keys = OFF`;
  try {
    for (const nomeTabela of [...NOMES_TABELAS_DOMINIO_ESPERADAS].reverse()) {
      await sql(`DELETE FROM "${nomeTabela}"`);
    }

    for (const nomeTabela of NOMES_TABELAS_DOMINIO_ESPERADAS) {
      const linhas = backup.tabelas[nomeTabela] ?? [];
      if (linhas.length === 0) continue;
      const colunas = await colunasTabela(nomeTabela);
      const consulta = `INSERT INTO "${nomeTabela}" (${colunas.map((c) => `"${c}"`).join(', ')}) VALUES (${colunas
        .map(() => '?')
        .join(', ')})`;
      for (const linha of linhas) {
        await sql(consulta, ...colunas.map((coluna) => valorDoBackup(linha[coluna] ?? null)));
      }
    }
  } finally {
    await sql`PRAGMA foreign_keys = ON`;
  }
}

export async function apagarTodosDadosLocais(): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`PRAGMA foreign_keys = OFF`;
  try {
    for (const nomeTabela of [...NOMES_TABELAS_DOMINIO_ESPERADAS].reverse()) {
      await sql(`DELETE FROM "${nomeTabela}"`);
    }
  } finally {
    await sql`PRAGMA foreign_keys = ON`;
  }
}

