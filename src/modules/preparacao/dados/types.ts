export interface GuiaResumoRow {
  id: number;
  titulo: string;
}

export interface GuiaDetalheRow {
  id: number;
  titulo: string;
  texto: string;
  publicar: number;
}

export interface KitChecklistRow {
  id: number;
  id_remoto: number | null;
  nome: string;
  icone: string;
  publicar: number;
  data_criacao: number;
}

export interface KitChecklistInput {
  nome: string;
  icone: string;
  publicar: number;
}

export interface ItemChecklistRow {
  id: number;
  id_remoto: number | null;
  kit_id: number;
  rotulo: string;
  quantidade: string;
  esta_marcado: number;
  data_vencimento: number;
  observacoes: string;
  publicar: number;
}

export interface ItemChecklistInput {
  kit_id: number;
  rotulo: string;
  quantidade: string;
  esta_marcado: number;
  data_vencimento: number;
  observacoes: string;
  publicar: number;
}

export interface EstoqueAlimentoRow {
  id: number;
  item: string;
  quantidade: number;
  peso_unitario: number;
  calorias_por_100g: number;
  data_vencimento: number;
}

export interface EstoqueAlimentoInput {
  item: string;
  quantidade: number;
  peso_unitario: number;
  calorias_por_100g: number;
  data_vencimento: number;
}
