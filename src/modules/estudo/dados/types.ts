export interface SessaoEstudoRow {
  id: number;
  assunto: string;
  tipo_ciclo: string;
  duracao_minutos: number;
  concluido_em: number;
  nota_meditacao: string;
}

export interface SessaoEstudoInput {
  assunto: string;
  tipo_ciclo: string;
  duracao_minutos: number;
  concluido_em: number;
  nota_meditacao: string;
}

export interface ConquistaEstudoRow {
  id: number;
  tipo: string;
  desbloqueado_em: number;
}
