import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import {
  calcularIndiceProntidao,
  calcularResumoReserva,
  DIAS_REFERENCIA_PRONTIDAO,
  KCAL_MINIMAS_PESSOA_DIA,
} from '../../preparacao/dominio/calculadora-preparacao.js';
import type { EntradaIndiceProntidao, IndiceProntidao } from '../../preparacao/dominio/calculadora-preparacao.js';
import type {
  ContagemMetas,
  PerfilDashboardResumo,
  TotaisFinanceirosIntervalo,
  UltimoRelatorioMinisterioResumo,
} from './types.js';

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

export async function obterPerfilDashboardResumo(): Promise<PerfilDashboardResumo | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT recusaTransfusao, uriScanDpa, contatoEmergencia, contatoEmergenciaTelefone
    FROM tbl_meu_perfil
    WHERE id = 1
  `;
  return (linhas[0] as PerfilDashboardResumo | undefined) ?? null;
}

export async function obterEntradaIndiceProntidao(): Promise<EntradaIndiceProntidao> {
  const { sql } = obterClienteSqlocal();
  const [checklistRows, estoqueRows, docsRows, perfil] = await Promise.all([
    sql`
      SELECT
        COUNT(*) AS total,
        COALESCE(SUM(CASE WHEN esta_marcado <> 0 THEN 1 ELSE 0 END), 0) AS marcados
      FROM tbl_itens_checklist
    `,
    sql`
      SELECT quantidade, peso_unitario, calorias_por_100g
      FROM tbl_estoque_alimentos
    `,
    sql`SELECT COUNT(*) AS c FROM tbl_documentos_cofre`,
    obterPerfilDashboardResumo(),
  ]);

  const checklist = checklistRows[0] as { total: number; marcados: number } | undefined;
  const resumoAlimentos = calcularResumoReserva(
    estoqueRows as { quantidade: number; peso_unitario: number; calorias_por_100g: number }[],
    { pessoas: 1, kcalPessoaDia: KCAL_MINIMAS_PESSOA_DIA, diasReferencia: DIAS_REFERENCIA_PRONTIDAO },
  );
  const documentosProtegidos = (docsRows[0] as { c: number } | undefined)?.c ?? 0;
  const fichaSaudeCompleta = Boolean(
    perfil &&
      (perfil.recusaTransfusao !== 0 ||
        perfil.uriScanDpa.trim() ||
        perfil.contatoEmergencia.trim() ||
        perfil.contatoEmergenciaTelefone.trim()),
  );

  return {
    checklistMarcados: checklist?.marcados ?? 0,
    checklistTotal: checklist?.total ?? 0,
    diasAutonomiaAlimentos: resumoAlimentos.diasAutonomia,
    diasReferencia: DIAS_REFERENCIA_PRONTIDAO,
    documentosProtegidos,
    documentosNecessarios: 1,
    fichaSaudeCompleta,
  };
}

export async function calcularIndiceProntidaoDashboard(): Promise<IndiceProntidao> {
  return calcularIndiceProntidao(await obterEntradaIndiceProntidao());
}
