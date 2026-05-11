import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type { MeuPerfilGravarInput, MeuPerfilRow } from './types.js';

export const PERFIL_PK_FIXA = 1;

const SELECT_PERFIL = `
  SELECT id, nome, telefone, email, link, comentario,
    "nomeSecretario", "telefoneSecretario", "tipoSanguineo", alergias,
    "medicamentosEmUso", "observacoesMedicas", "recusaTransfusao", "fracoesAceitas",
    "uriScanDpa", "contatoEmergencia", "contatoEmergenciaTelefone",
    "nomeColih", "telefoneColih", "dpaCategoriaAtualizado"
  FROM tbl_meu_perfil WHERE id = ?
`.replace(/\s+/g, ' ');

export async function garantirLinhaPerfilPadrao(): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    INSERT OR IGNORE INTO tbl_meu_perfil (
      id, nome, telefone, email, link, comentario,
      "nomeSecretario", "telefoneSecretario", "tipoSanguineo", alergias,
      "medicamentosEmUso", "observacoesMedicas", "recusaTransfusao", "fracoesAceitas",
      "uriScanDpa", "contatoEmergencia", "contatoEmergenciaTelefone",
      "nomeColih", "telefoneColih", "dpaCategoriaAtualizado"
    ) VALUES (
      ${PERFIL_PK_FIXA}, ${''}, ${''}, ${''}, ${''}, ${''},
      ${''}, ${''}, ${''}, ${''},
      ${''}, ${''}, ${0}, ${''},
      ${''}, ${''}, ${''},
      ${''}, ${''},
      ${0}
    )
  `;
}

export async function obterPerfil(): Promise<MeuPerfilRow> {
  await garantirLinhaPerfilPadrao();
  const { sql } = obterClienteSqlocal();
  const linhas = await sql(SELECT_PERFIL, PERFIL_PK_FIXA);
  const r = linhas[0] as MeuPerfilRow | undefined;
  if (r === undefined) {
    throw new Error('Perfil: linha id=1 inesperadamente ausente.');
  }
  return r;
}

export async function gravarPerfil(d: MeuPerfilGravarInput): Promise<void> {
  await garantirLinhaPerfilPadrao();
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_meu_perfil SET
      nome = ${d.nome},
      telefone = ${d.telefone},
      email = ${d.email},
      link = ${d.link},
      comentario = ${d.comentario},
      "nomeSecretario" = ${d.nomeSecretario},
      "telefoneSecretario" = ${d.telefoneSecretario},
      "tipoSanguineo" = ${d.tipoSanguineo},
      alergias = ${d.alergias},
      "medicamentosEmUso" = ${d.medicamentosEmUso},
      "observacoesMedicas" = ${d.observacoesMedicas},
      "recusaTransfusao" = ${d.recusaTransfusao},
      "fracoesAceitas" = ${d.fracoesAceitas},
      "uriScanDpa" = ${d.uriScanDpa},
      "contatoEmergencia" = ${d.contatoEmergencia},
      "contatoEmergenciaTelefone" = ${d.contatoEmergenciaTelefone},
      "nomeColih" = ${d.nomeColih},
      "telefoneColih" = ${d.telefoneColih},
      "dpaCategoriaAtualizado" = ${d.dpaCategoriaAtualizado}
    WHERE id = ${PERFIL_PK_FIXA}
  `;
}
