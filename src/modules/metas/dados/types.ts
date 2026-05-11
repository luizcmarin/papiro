export interface MetaRow {
  id: number;
  titulo: string;
  item: string;
  ativo_id: number;
  ativo_nome: string;
  data_meta: number;
  prazo_final: number;
  progresso_atual: number;
  progresso_alvo: number;
  esta_concluida: number;
}

export interface MetaInput {
  titulo: string;
  item: string;
  ativo_id: number;
  ativo_nome: string;
  data_meta: number;
  prazo_final: number;
  progresso_atual: number;
  progresso_alvo: number;
  esta_concluida: number;
}
