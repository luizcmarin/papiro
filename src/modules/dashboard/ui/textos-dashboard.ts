import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosDashboard {
  tituloPagina: string;
  erroBd: string;
  kpiAnotacoes: string;
  kpiReceitas: string;
  kpiFinanceiroMes: string;
  kpiMetasAbertas: string;
  kpiMetasConcluidas: string;
  kpiSessoesFoco: string;
  graficoGaugeTitulo: string;
  graficoGaugeSub: string;
  graficoFinMesTitulo: string;
  graficoMetasTitulo: string;
  listaVaziaGraficos: string;
  receitaLegenda: string;
  despesaLegenda: string;
  metaAbertaLegenda: string;
  metaConclLegenda: string;
}

const PT: TextosDashboard = {
  tituloPagina: 'Dashboard',
  erroBd: 'Não foi possível ler a base local.',
  kpiAnotacoes: 'Anotações ativas',
  kpiReceitas: 'Receitas guardadas',
  kpiFinanceiroMes: 'Mês atual (rec. / desp.)',
  kpiMetasAbertas: 'Metas em curso',
  kpiMetasConcluidas: 'Metas concluídas',
  kpiSessoesFoco: 'Sessões de foco (estudo)',
  graficoGaugeTitulo: 'Último relatório de campo',
  graficoGaugeSub: 'Percentagem das horas em relação à meta registada na mesma linha.',
  graficoFinMesTitulo: 'Receita e despesa no mês atual',
  graficoMetasTitulo: 'Metas por estado',
  listaVaziaGraficos: 'Sem dados',
  receitaLegenda: 'Receita',
  despesaLegenda: 'Despesa',
  metaAbertaLegenda: 'Em curso',
  metaConclLegenda: 'Concluídas',
};

const EN: TextosDashboard = {
  tituloPagina: 'Dashboard',
  erroBd: 'Could not read the local database.',
  kpiAnotacoes: 'Active notes',
  kpiReceitas: 'Saved recipes',
  kpiFinanceiroMes: 'This month (inc. / exp.)',
  kpiMetasAbertas: 'Open goals',
  kpiMetasConcluidas: 'Completed goals',
  kpiSessoesFoco: 'Focus sessions (study)',
  graficoGaugeTitulo: 'Latest field report',
  graficoGaugeSub: 'Hours versus the goal stored on that same row.',
  graficoFinMesTitulo: 'Income and spending this month',
  graficoMetasTitulo: 'Goals by status',
  listaVaziaGraficos: 'No data',
  receitaLegenda: 'Income',
  despesaLegenda: 'Spending',
  metaAbertaLegenda: 'In progress',
  metaConclLegenda: 'Done',
};

export function obterTextosDashboard(locale: LocaleId): TextosDashboard {
  return locale === 'en' ? EN : PT;
}
