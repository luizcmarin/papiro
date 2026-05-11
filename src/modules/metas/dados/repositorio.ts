import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type { MetaInput, MetaRow } from './types.js';

export async function listarMetas(): Promise<MetaRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, titulo, item, ativo_id, ativo_nome, data_meta, prazo_final,
           progresso_atual, progresso_alvo, esta_concluida
    FROM tbl_meta
    ORDER BY esta_concluida ASC, prazo_final ASC, id DESC
  `;
  return linhas as MetaRow[];
}

export async function inserirMeta(d: MetaInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_meta (
      titulo, item, ativo_id, ativo_nome, data_meta, prazo_final,
      progresso_atual, progresso_alvo, esta_concluida
    ) VALUES (
      ${d.titulo}, ${d.item}, ${d.ativo_id}, ${d.ativo_nome}, ${d.data_meta}, ${d.prazo_final},
      ${d.progresso_atual}, ${d.progresso_alvo}, ${d.esta_concluida}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT meta falhou.');
  return primeira.id;
}

export async function atualizarMeta(id: number, d: MetaInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_meta SET
      titulo = ${d.titulo},
      item = ${d.item},
      ativo_id = ${d.ativo_id},
      ativo_nome = ${d.ativo_nome},
      data_meta = ${d.data_meta},
      prazo_final = ${d.prazo_final},
      progresso_atual = ${d.progresso_atual},
      progresso_alvo = ${d.progresso_alvo},
      esta_concluida = ${d.esta_concluida}
    WHERE id = ${id}
  `;
}

export async function apagarMeta(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_meta WHERE id = ${id}`;
}
