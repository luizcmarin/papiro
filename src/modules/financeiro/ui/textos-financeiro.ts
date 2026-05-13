import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosFinanceiro {
  tituloPagina: string;
  graficoBarrasTitulo: string;
  graficoPizzaTitulo: string;
  categoriasTitulo: string;
  novaCategoria: string;
  transacoesTitulo: string;
  novaTransacao: string;
  mesReferencia: string;
  campoNome: string;
  campoIcone: string;
  campoCor: string;
  campoLimite: string;
  salvarCategoria: string;
  campoDescricao: string;
  campoValor: string;
  campoTipo: string;
  tipoReceita: string;
  tipoDespesa: string;
  campoCategoria: string;
  campoVencimento: string;
  pagoLabel: string;
  salvarTransacao: string;
  cancelarDialogo: string;
  apagarTransacaoTitulo: string;
  apagarCategoriaTitulo: string;
  apagarConfirmar: string;
  listaVaziaCategorias: string;
  listaVaziaTransacoes: string;
  listaVaziaGraficos: string;
  alertasTitulo: string;
  semAlertas: string;
  limiteCategoria: string;
  transacoesVencidas: string;
  diasSobrevivencia: string;
  editar: string;
  apagar: string;
  erroBd: string;
}

const PT: TextosFinanceiro = {
  tituloPagina: 'Financeiro',
  graficoBarrasTitulo: 'Receitas e despesas por mês',
  graficoPizzaTitulo: 'Despesas por categoria (mês)',
  categoriasTitulo: 'Categorias',
  novaCategoria: 'Nova categoria',
  transacoesTitulo: 'Transações do mês',
  novaTransacao: 'Nova transação',
  mesReferencia: 'Mês de referência',
  campoNome: 'Nome',
  campoIcone: 'Ícone',
  campoCor: 'Cor (hex)',
  campoLimite: 'Limite mensal',
  salvarCategoria: 'Guardar categoria',
  campoDescricao: 'Descrição',
  campoValor: 'Valor',
  campoTipo: 'Tipo',
  tipoReceita: 'Receita',
  tipoDespesa: 'Despesa',
  campoCategoria: 'Categoria',
  campoVencimento: 'Data (AAAA-MM-DD)',
  pagoLabel: 'Pago / recebido',
  salvarTransacao: 'Guardar transação',
  cancelarDialogo: 'Cancelar',
  apagarTransacaoTitulo: 'Remover esta transação?',
  apagarCategoriaTitulo: 'Remover categoria?',
  apagarConfirmar: 'Confirmar exclusão',
  listaVaziaCategorias: 'Sem categorias.',
  listaVaziaTransacoes: 'Sem transações este mês.',
  listaVaziaGraficos: 'Sem dados para gráficos.',
  alertasTitulo: 'Alertas financeiros',
  semAlertas: 'Sem alertas para o mês selecionado.',
  limiteCategoria: 'Limite excedido em',
  transacoesVencidas: 'Transações vencidas em aberto',
  diasSobrevivencia: 'Dias estimados de sobrevivência financeira',
  editar: 'Editar',
  apagar: 'Apagar',
  erroBd: 'Erro ao carregar dados.',
};

const EN: TextosFinanceiro = {
  tituloPagina: 'Finance',
  graficoBarrasTitulo: 'Income vs expenses per month',
  graficoPizzaTitulo: 'Expenses by category (month)',
  categoriasTitulo: 'Categories',
  novaCategoria: 'New category',
  transacoesTitulo: 'Transactions this month',
  novaTransacao: 'New transaction',
  mesReferencia: 'Reference month',
  campoNome: 'Name',
  campoIcone: 'Icon',
  campoCor: 'Color (hex)',
  campoLimite: 'Monthly cap',
  salvarCategoria: 'Save category',
  campoDescricao: 'Description',
  campoValor: 'Amount',
  campoTipo: 'Type',
  tipoReceita: 'Income',
  tipoDespesa: 'Expense',
  campoCategoria: 'Category',
  campoVencimento: 'Date (YYYY-MM-DD)',
  pagoLabel: 'Paid / received',
  salvarTransacao: 'Save transaction',
  cancelarDialogo: 'Cancel',
  apagarTransacaoTitulo: 'Delete this transaction?',
  apagarCategoriaTitulo: 'Delete category?',
  apagarConfirmar: 'Confirm delete',
  listaVaziaCategorias: 'No categories yet.',
  listaVaziaTransacoes: 'No transactions this month.',
  listaVaziaGraficos: 'Not enough data for charts.',
  alertasTitulo: 'Financial alerts',
  semAlertas: 'No alerts for the selected month.',
  limiteCategoria: 'Cap exceeded in',
  transacoesVencidas: 'Overdue open transactions',
  diasSobrevivencia: 'Estimated financial survival days',
  editar: 'Edit',
  apagar: 'Delete',
  erroBd: 'Could not load data.',
};

export function obterTextosFinanceiro(locale: LocaleId): TextosFinanceiro {
  return locale === 'en' ? EN : PT;
}
