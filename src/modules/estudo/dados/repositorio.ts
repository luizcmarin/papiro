import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type { ConquistaEstudoRow, SessaoEstudoInput, SessaoEstudoRow } from './types.js';

export async function listarSessoesEstudo(limit: number): Promise<SessaoEstudoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, assunto, tipo_ciclo, duracao_minutos, concluido_em, nota_meditacao
    FROM tbl_sessoes_estudo
    ORDER BY concluido_em DESC
    LIMIT ${limit}
  `;
  return linhas as SessaoEstudoRow[];
}

export async function inserirSessaoEstudo(d: SessaoEstudoInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_sessoes_estudo (
      assunto, tipo_ciclo, duracao_minutos, concluido_em, nota_meditacao
    ) VALUES (
      ${d.assunto}, ${d.tipo_ciclo}, ${d.duracao_minutos}, ${d.concluido_em}, ${d.nota_meditacao}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT sessão falhou.');
  return primeira.id;
}

export async function listarConquistasEstudo(): Promise<ConquistaEstudoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, tipo, desbloqueado_em
    FROM tbl_conquistas_estudo
    ORDER BY desbloqueado_em DESC
  `;
  return linhas as ConquistaEstudoRow[];
}

export async function inserirConquistaEstudoSeAusente(tipo: string, instante: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const existentes = await sql`SELECT id FROM tbl_conquistas_estudo WHERE tipo = ${tipo} LIMIT 1`;
  if ((existentes as { id: number }[]).length > 0) return;
  await sql`
    INSERT INTO tbl_conquistas_estudo (tipo, desbloqueado_em) VALUES (${tipo}, ${instante})
  `;
}

export async function contarSessoesFocoCompletas(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const foco = 'foco';
  const linhas = await sql`
    SELECT COUNT(*) AS c FROM tbl_sessoes_estudo WHERE tipo_ciclo = ${foco}
  `;
  const r = linhas[0] as { c: number } | undefined;
  return r?.c ?? 0;
}
