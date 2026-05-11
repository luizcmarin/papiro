/** Linha única `tbl_meu_perfil` (PK fixa `id = 1`). Nomes de colunas iguais ao SQLite. */
export interface MeuPerfilRow {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  link: string;
  comentario: string;
  nomeSecretario: string;
  telefoneSecretario: string;
  tipoSanguineo: string;
  alergias: string;
  medicamentosEmUso: string;
  observacoesMedicas: string;
  recusaTransfusao: number;
  fracoesAceitas: string;
  uriScanDpa: string;
  contatoEmergencia: string;
  contatoEmergenciaTelefone: string;
  nomeColih: string;
  telefoneColih: string;
  dpaCategoriaAtualizado: number;
}

export type MeuPerfilGravarInput = Omit<MeuPerfilRow, 'id'>;
