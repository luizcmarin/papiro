import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type {
  FiltroListagemReceitas,
  ReceitaDetalheRow,
  ReceitaFormInput,
  ReceitaListaRow,
} from './types.js';

export async function listarReceitasParaLista(
  filtro?: FiltroListagemReceitas,
): Promise<ReceitaListaRow[]> {
  const { sql } = obterClienteSqlocal();
  const termo = filtro?.termo?.trim() ?? '';
  if (termo.length === 0) {
    const linhas = await sql`
      SELECT id, titulo, categoria, publicar, data_criacao, data_atualizacao
      FROM tbl_receitas
      ORDER BY data_atualizacao DESC, id DESC
    `;
    return linhas as ReceitaListaRow[];
  }
  const padrao = `%${termo.replaceAll('%', '\\%').replaceAll('_', '\\_')}%`;
  const consulta = `
    SELECT id, titulo, categoria, publicar, data_criacao, data_atualizacao
    FROM tbl_receitas
    WHERE titulo LIKE ? ESCAPE '\\' OR categoria LIKE ? ESCAPE '\\'
    ORDER BY data_atualizacao DESC, id DESC
  `;
  const linhas = await sql(consulta, padrao, padrao);
  return linhas as ReceitaListaRow[];
}

export async function obterReceitaCompletaPorId(id: number): Promise<ReceitaDetalheRow | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, id_remoto, titulo, categoria, ingredientes, instrucoes, publicar, data_criacao, data_atualizacao
    FROM tbl_receitas
    WHERE id = ${id}
  `;
  const primeira = linhas[0];
  return primeira ? (primeira as ReceitaDetalheRow) : null;
}

export async function inserirReceita(dados: ReceitaFormInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  const res = await sql`
    INSERT INTO tbl_receitas (
      id_remoto, titulo, categoria, ingredientes, instrucoes,
      publicar, data_criacao, data_atualizacao
    ) VALUES (
      NULL,
      ${dados.titulo},
      ${dados.categoria},
      ${dados.ingredientes},
      ${dados.instrucoes},
      ${dados.publicar},
      ${agora},
      ${agora}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT tbl_receitas sem id.');
  return primeira.id;
}

export async function atualizarReceita(id: number, dados: ReceitaFormInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  await sql`
    UPDATE tbl_receitas SET
      titulo = ${dados.titulo},
      categoria = ${dados.categoria},
      ingredientes = ${dados.ingredientes},
      instrucoes = ${dados.instrucoes},
      publicar = ${dados.publicar},
      data_atualizacao = ${agora}
    WHERE id = ${id}
  `;
}

export async function apagarReceita(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_receitas WHERE id = ${id}`;
}
