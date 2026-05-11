import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type {
  EstoqueAlimentoInput,
  EstoqueAlimentoRow,
  GuiaDetalheRow,
  GuiaResumoRow,
  ItemChecklistInput,
  ItemChecklistRow,
  KitChecklistInput,
  KitChecklistRow,
} from './types.js';

export async function listarGuiasResumo(): Promise<GuiaResumoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`SELECT id, titulo FROM tbl_guias ORDER BY id`;
  return linhas as GuiaResumoRow[];
}

export async function obterGuiaPorId(id: number): Promise<GuiaDetalheRow | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, titulo, texto, publicar FROM tbl_guias WHERE id = ${id}
  `;
  const primeira = linhas[0];
  return primeira ? (primeira as GuiaDetalheRow) : null;
}

export async function contarLinhasCofre(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`SELECT COUNT(*) AS c FROM tbl_documentos_cofre`;
  const primeira = linhas[0] as { c: number } | undefined;
  return primeira?.c ?? 0;
}

export async function listarKits(): Promise<KitChecklistRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, id_remoto, nome, icone, publicar, data_criacao
    FROM tbl_kits_checklist
    ORDER BY data_criacao DESC, id DESC
  `;
  return linhas as KitChecklistRow[];
}

export async function inserirKit(d: KitChecklistInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  const res = await sql`
    INSERT INTO tbl_kits_checklist (id_remoto, nome, icone, publicar, data_criacao)
    VALUES (NULL, ${d.nome}, ${d.icone}, ${d.publicar}, ${agora})
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (!primeira) throw new Error('INSERT kit falhou.');
  return primeira.id;
}

export async function apagarKit(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_kits_checklist WHERE id = ${id}`;
}

export async function listarItensDoKit(kitId: number): Promise<ItemChecklistRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, id_remoto, kit_id, rotulo, quantidade, esta_marcado, data_vencimento, observacoes, publicar
    FROM tbl_itens_checklist
    WHERE kit_id = ${kitId}
    ORDER BY id
  `;
  return linhas as ItemChecklistRow[];
}

export async function inserirItemKit(d: ItemChecklistInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_itens_checklist (
      id_remoto, kit_id, rotulo, quantidade, esta_marcado, data_vencimento, observacoes, publicar
    ) VALUES (
      NULL, ${d.kit_id}, ${d.rotulo}, ${d.quantidade}, ${d.esta_marcado}, ${d.data_vencimento},
      ${d.observacoes}, ${d.publicar}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (!primeira) throw new Error('INSERT item falhou.');
  return primeira.id;
}

export async function atualizarItemMarcacao(id: number, estaMarcado: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`UPDATE tbl_itens_checklist SET esta_marcado = ${estaMarcado} WHERE id = ${id}`;
}

export async function apagarItemChecklist(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_itens_checklist WHERE id = ${id}`;
}

export async function listarEstoque(): Promise<EstoqueAlimentoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, item, quantidade, peso_unitario, calorias_por_100g, data_vencimento
    FROM tbl_estoque_alimentos
    ORDER BY data_vencimento ASC, item COLLATE NOCASE
  `;
  return linhas as EstoqueAlimentoRow[];
}

export async function inserirEstoque(d: EstoqueAlimentoInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_estoque_alimentos (item, quantidade, peso_unitario, calorias_por_100g, data_vencimento)
    VALUES (${d.item}, ${d.quantidade}, ${d.peso_unitario}, ${d.calorias_por_100g}, ${d.data_vencimento})
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (!primeira) throw new Error('INSERT estoque falhou.');
  return primeira.id;
}

export async function atualizarEstoque(id: number, d: EstoqueAlimentoInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_estoque_alimentos SET
      item = ${d.item}, quantidade = ${d.quantidade}, peso_unitario = ${d.peso_unitario},
      calorias_por_100g = ${d.calorias_por_100g}, data_vencimento = ${d.data_vencimento}
    WHERE id = ${id}
  `;
}

export async function apagarEstoque(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_estoque_alimentos WHERE id = ${id}`;
}
