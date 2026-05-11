export interface RelatorioMinisterioRow {
  id: number;
  mes: number;
  ano: number;
  ano_servico: number;
  horas: number;
  estudos: number;
  participacao: number;
  tipo_publicador: string;
  meta_horas: number;
  notas_publicacoes: string;
  telefone_dirigente: string;
  nome_dirigente: string;
}

export interface RelatorioMinisterioInput {
  mes: number;
  ano: number;
  ano_servico: number;
  horas: number;
  estudos: number;
  participacao: number;
  tipo_publicador: string;
  meta_horas: number;
  notas_publicacoes: string;
  telefone_dirigente: string;
  nome_dirigente: string;
}

export interface EstudoBiblicoRow {
  id: number;
  nome: string;
  contato: string;
  endereco: string;
  zoom_link: string;
  publicacao_atual: string;
  licao_atual: number;
  dia_semana: string;
  horario_minutos: number;
  proximo_estudo_em: number;
  notas: string;
}

export interface EstudoBiblicoInput {
  nome: string;
  contato: string;
  endereco: string;
  zoom_link: string;
  publicacao_atual: string;
  licao_atual: number;
  dia_semana: string;
  horario_minutos: number;
  proximo_estudo_em: number;
  notas: string;
}
