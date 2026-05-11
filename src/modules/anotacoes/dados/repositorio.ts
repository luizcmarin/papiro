import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type {
  AnotacaoDetalheRow,
  AnotacaoListaRow,
  AtualizaAnotacaoInput,
  FiltroListagemAnotacoes,
  InsertAnotacaoInput,
  PastaRow,
} from './types.js';

export async function listarPastas(): Promise<PastaRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, nome, icone, ordem FROM tbl_pasta ORDER BY ordem ASC, id ASC
  `;
  return linhas as PastaRow[];
}

/**
 * Lista anotações sem `conteudo`. `SELECT *` proibido.
 */
export async function listarAnotacoesParaLista(
  filtro?: FiltroListagemAnotacoes,
): Promise<AnotacaoListaRow[]> {
  const { sql } = obterClienteSqlocal();
  const termoLimpo = filtro?.termoTitulo?.trim() ?? '';
  const termoEtiLimpo = filtro?.termoEtiquetas?.trim() ?? '';
  const tipoModelo = filtro?.tipo_modelo?.trim() ?? '';

  const partesWhere: string[] = [];
  const parametros: unknown[] = [];

  if (filtro?.ocultarArquivadas === true) {
    partesWhere.push('esta_arquivada = 0');
  }

  if (filtro && 'pasta_id' in filtro && filtro.pasta_id !== undefined) {
    if (filtro.pasta_id === null) {
      partesWhere.push('pasta_id IS NULL');
    } else {
      partesWhere.push('pasta_id = ?');
      parametros.push(filtro.pasta_id);
    }
  }

  if (tipoModelo.length > 0) {
    partesWhere.push('tipo_modelo = ?');
    parametros.push(tipoModelo);
  }

  if (termoLimpo.length > 0) {
    partesWhere.push(`titulo LIKE ? ESCAPE '\\'`);
    const padrao = `%${termoLimpo.replaceAll('%', '\\%').replaceAll('_', '\\_')}%`;
    parametros.push(padrao);
  }

  if (termoEtiLimpo.length > 0) {
    partesWhere.push(`etiquetas LIKE ? ESCAPE '\\'`);
    const padEti = `%${termoEtiLimpo.replaceAll('%', '\\%').replaceAll('_', '\\_')}%`;
    parametros.push(padEti);
  }

  const baseSelect =
    'SELECT id, pasta_id, titulo, tipo_modelo, data_criacao, data_modificacao, esta_fixada, esta_arquivada, etiquetas FROM tbl_anotacao';

  const consultaCompleta =
    partesWhere.length === 0
      ? `${baseSelect} ORDER BY data_modificacao DESC, id DESC`
      : `${baseSelect} WHERE ${partesWhere.join(' AND ')} ORDER BY data_modificacao DESC, id DESC`;

  const linhas =
    parametros.length === 0
      ? await sql(consultaCompleta)
      : await sql(consultaCompleta, ...parametros);

  return linhas as AnotacaoListaRow[];
}

/** Carrega `conteudo` apenas para esta linha. */
export async function obterAnotacaoComConteudo(id: number): Promise<AnotacaoDetalheRow | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, pasta_id, titulo, conteudo, tipo_modelo, data_criacao, data_modificacao, esta_fixada, esta_arquivada, etiquetas
    FROM tbl_anotacao
    WHERE id = ${id}
  `;
  const primeira = linhas[0];
  return primeira ? (primeira as AnotacaoDetalheRow) : null;
}

export async function inserirAnotacao(dados: InsertAnotacaoInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  const res = await sql`
    INSERT INTO tbl_anotacao (
      pasta_id, titulo, conteudo, tipo_modelo,
      data_criacao, data_modificacao, esta_fixada, esta_arquivada, etiquetas
    ) VALUES (
      ${dados.pasta_id},
      ${dados.titulo},
      ${dados.conteudo},
      ${dados.tipo_modelo},
      ${agora},
      ${agora},
      ${dados.esta_fixada},
      ${dados.esta_arquivada},
      ${dados.etiquetas}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT tbl_anotacao sem id.');
  return primeira.id;
}

export async function atualizarAnotacao(id: number, dados: AtualizaAnotacaoInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  await sql`
    UPDATE tbl_anotacao SET
      pasta_id = ${dados.pasta_id},
      titulo = ${dados.titulo},
      conteudo = ${dados.conteudo},
      tipo_modelo = ${dados.tipo_modelo},
      data_modificacao = ${agora},
      esta_fixada = ${dados.esta_fixada},
      esta_arquivada = ${dados.esta_arquivada},
      etiquetas = ${dados.etiquetas}
    WHERE id = ${id}
  `;
}

export async function apagarAnotacao(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_anotacao WHERE id = ${id}`;
}
