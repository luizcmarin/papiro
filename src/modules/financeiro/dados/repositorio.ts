import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type {
  AgregadoCategoriaMes,
  CategoriaFinanceiroInput,
  CategoriaFinanceiroRow,
  PontoMesReceitaDespesa,
  TransacaoInput,
  TransacaoRow,
} from './types.js';

export async function listarCategorias(): Promise<CategoriaFinanceiroRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, nome, icone, hex_cor, limite_mensal
    FROM tbl_categorias_financeiro
    ORDER BY nome COLLATE NOCASE
  `;
  return linhas as CategoriaFinanceiroRow[];
}

export async function inserirCategoria(d: CategoriaFinanceiroInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_categorias_financeiro (nome, icone, hex_cor, limite_mensal)
    VALUES (${d.nome}, ${d.icone}, ${d.hex_cor}, ${d.limite_mensal})
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT categoria falhou.');
  return primeira.id;
}

export async function atualizarCategoria(id: number, d: CategoriaFinanceiroInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_categorias_financeiro SET
      nome = ${d.nome}, icone = ${d.icone}, hex_cor = ${d.hex_cor}, limite_mensal = ${d.limite_mensal}
    WHERE id = ${id}
  `;
}

export async function apagarCategoria(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_transacoes WHERE categoria_id = ${id}`;
  await sql`DELETE FROM tbl_categorias_financeiro WHERE id = ${id}`;
}

export async function listarTransacoesNoIntervalo(minMs: number, maxExclusiveMs: number): Promise<TransacaoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, descricao, valor, tipo, categoria_id, data_vencimento, esta_pago, data_criacao
    FROM tbl_transacoes
    WHERE data_vencimento >= ${minMs} AND data_vencimento < ${maxExclusiveMs}
    ORDER BY data_vencimento DESC, id DESC
  `;
  return linhas as TransacaoRow[];
}

export async function inserirTransacao(d: TransacaoInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  const res = await sql`
    INSERT INTO tbl_transacoes (
      descricao, valor, tipo, categoria_id, data_vencimento, esta_pago, data_criacao
    ) VALUES (
      ${d.descricao}, ${d.valor}, ${d.tipo}, ${d.categoria_id}, ${d.data_vencimento}, ${d.esta_pago}, ${agora}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT transação falhou.');
  return primeira.id;
}

export async function atualizarTransacao(id: number, d: TransacaoInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_transacoes SET
      descricao = ${d.descricao},
      valor = ${d.valor},
      tipo = ${d.tipo},
      categoria_id = ${d.categoria_id},
      data_vencimento = ${d.data_vencimento},
      esta_pago = ${d.esta_pago}
    WHERE id = ${id}
  `;
}

export async function apagarTransacao(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_transacoes WHERE id = ${id}`;
}

export async function somarDespesasPorCategoriaNoIntervalo(
  minMs: number,
  maxExclusiveMs: number,
): Promise<AgregadoCategoriaMes[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT c.id AS categoria_id, c.nome AS nome, c.hex_cor AS hex_cor, SUM(t.valor) AS total
    FROM tbl_transacoes t
    INNER JOIN tbl_categorias_financeiro c ON c.id = t.categoria_id
    WHERE t.tipo = 1 AND t.data_vencimento >= ${minMs} AND t.data_vencimento < ${maxExclusiveMs}
    GROUP BY c.id
    ORDER BY total DESC
  `;
  return (linhas as { categoria_id: number; nome: string; hex_cor: string; total: number }[]).map((r) => ({
    categoria_id: r.categoria_id,
    nome: r.nome,
    hex_cor: r.hex_cor,
    total: r.total,
  }));
}

export async function agregarReceitaDespesaUltimosMeses(maxMeses: number): Promise<PontoMesReceitaDespesa[]> {
  const { sql } = obterClienteSqlocal();
  const limiteMs = Date.now();
  const inicioApprox = limiteMs - maxMeses * 31 * 86400000;
  const linhas = await sql`
    SELECT
      CAST(strftime('%Y', data_vencimento / 1000, 'unixepoch') AS INTEGER) AS y,
      CAST(strftime('%m', data_vencimento / 1000, 'unixepoch') AS INTEGER) AS m,
      SUM(CASE WHEN tipo = 0 THEN valor ELSE 0 END) AS receita,
      SUM(CASE WHEN tipo = 1 THEN valor ELSE 0 END) AS despesa
    FROM tbl_transacoes
    WHERE data_vencimento >= ${inicioApprox}
    GROUP BY y, m
    ORDER BY y ASC, m ASC
  `;
  const resultado: PontoMesReceitaDespesa[] = [];
  for (const raw of linhas as { y: number; m: number; receita: number; despesa: number }[]) {
    const mm = String(raw.m).padStart(2, '0');
    const chaveMes = `${raw.y}-${mm}`;
    resultado.push({
      chaveMes,
      rotulo: `${mm}/${raw.y}`,
      receita: raw.receita ?? 0,
      despesa: raw.despesa ?? 0,
    });
  }
  return resultado;
}
