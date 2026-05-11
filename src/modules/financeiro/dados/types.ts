export interface CategoriaFinanceiroRow {
  id: number;
  nome: string;
  icone: string;
  hex_cor: string;
  limite_mensal: number;
}

export interface TransacaoRow {
  id: number;
  descricao: string;
  valor: number;
  tipo: number;
  categoria_id: number;
  data_vencimento: number;
  esta_pago: number;
  data_criacao: number;
}

/** 0 = receita; 1 = despesa — convenção só na camada de aplicação. */
export type TipoTransacao = 0 | 1;

export interface CategoriaFinanceiroInput {
  nome: string;
  icone: string;
  hex_cor: string;
  limite_mensal: number;
}

export interface TransacaoInput {
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  categoria_id: number;
  data_vencimento: number;
  esta_pago: number;
}

export interface AgregadoCategoriaMes {
  categoria_id: number;
  nome: string;
  hex_cor: string;
  total: number;
}

export interface PontoMesReceitaDespesa {
  chaveMes: string;
  rotulo: string;
  receita: number;
  despesa: number;
}
