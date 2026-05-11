import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import { textoPlanoUsuarioParaHtmlSeguro } from '../aplicacao/texto-plano-para-html.js';
import type { PoesiaDetalheRow, PoesiaFormInput, PoesiaListaRow } from './types.js';

export async function listarPoesiasSemConteudo(): Promise<PoesiaListaRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, titulo, texto, "anteriorId", "proximoId", publicar
    FROM tbl_poesias
    ORDER BY id ASC
  `;
  return linhas as PoesiaListaRow[];
}

export async function obterPoesiaComConteudo(id: number): Promise<PoesiaDetalheRow | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, titulo, texto, conteudo, "anteriorId", "proximoId", publicar
    FROM tbl_poesias
    WHERE id = ${id}
  `;
  const r = linhas[0];
  return (r ?? null) as PoesiaDetalheRow | null;
}

async function gerarProximoIdPoesia(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT COALESCE(MAX(id), 0) + 1 AS n FROM tbl_poesias
  `;
  const n = (linhas[0] as { n: number } | undefined)?.n;
  return typeof n === 'number' && Number.isFinite(n) ? n : 1;
}

export async function inserirPoesiaLocal(input: PoesiaFormInput): Promise<number> {
  const titulo = input.titulo.trim();
  const texto = input.texto.trim();
  const conteudo = textoPlanoUsuarioParaHtmlSeguro(texto);
  const id = await gerarProximoIdPoesia();
  const { sql } = obterClienteSqlocal();
  await sql`
    INSERT INTO tbl_poesias (
      id, titulo, texto, conteudo, "anteriorId", "proximoId", publicar
    ) VALUES (
      ${id}, ${titulo}, ${texto}, ${conteudo}, NULL, NULL, ${1}
    )
  `;
  return id;
}

export async function atualizarPoesiaLocal(id: number, input: PoesiaFormInput): Promise<void> {
  const titulo = input.titulo.trim();
  const texto = input.texto.trim();
  const conteudo = textoPlanoUsuarioParaHtmlSeguro(texto);
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_poesias SET
      titulo = ${titulo},
      texto = ${texto},
      conteudo = ${conteudo}
    WHERE id = ${id}
  `;
}

export async function apagarPoesia(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_poesias WHERE id = ${id}`;
}
