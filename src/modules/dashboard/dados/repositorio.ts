import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type { ContagemMetas, TotaisFinanceirosIntervalo, UltimoRelatorioMinisterioResumo } from './types.js';

export async function contarAnotacoesNaoArquivadas(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT COUNT(*) AS c FROM tbl_anotacao WHERE esta_arquivada = 0
  `;
  return (linhas[0] as { c: number } | undefined)?.c ?? 0;
}

export async function contarReceitas(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`SELECT COUNT(*) AS c FROM tbl_receitas`;
  return (linhas[0] as { c: number } | undefined)?.c ?? 0;
}

export async function totaisFinanceirosNoIntervalo(
  minMs: number,
  maxExclusiveMs: number,
): Promise<TotaisFinanceirosIntervalo> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT
      COALESCE(SUM(CASE WHEN tipo = 0 THEN valor ELSE 0 END), 0) AS receita,
      COALESCE(SUM(CASE WHEN tipo = 1 THEN valor ELSE 0 END), 0) AS despesa
    FROM tbl_transacoes
    WHERE data_vencimento >= ${minMs} AND data_vencimento < ${maxExclusiveMs}
  `;
  const r = linhas[0] as { receita: number; despesa: number } | undefined;
  return {
    receita: r?.receita ?? 0,
    despesa: r?.despesa ?? 0,
  };
}

export async function obterUltimoRelatorioMinisterioResumo(): Promise<UltimoRelatorioMinisterioResumo | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT horas, meta_horas, mes, ano
    FROM tbl_relatorios_ministerio
    ORDER BY ano DESC, mes DESC
    LIMIT 1
  `;
  const r = linhas[0] as UltimoRelatorioMinisterioResumo | undefined;
  return r ?? null;
}

export async function contarMetasPorEstado(): Promise<ContagemMetas> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT esta_concluida, COUNT(*) AS c
    FROM tbl_meta
    GROUP BY esta_concluida
  `;
  let abertas = 0;
  let concluidas = 0;
  for (const row of linhas as { esta_concluida: number; c: number }[]) {
    if (row.esta_concluida !== 0) concluidas = row.c;
    else abertas = row.c;
  }
  return { abertas, concluidas };
}
