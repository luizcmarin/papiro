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
  kpiProntidao: string;
  acoesRapidasTitulo: string;
  acaoPerfilIce: string;
  acaoQr: string;
  acaoPreparacao: string;
  acaoCofre: string;
  acaoConfig: string;
  alertaDpa: string;
  syncFutura: string;
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
  kpiProntidao: 'Índice de prontidão',
  acoesRapidasTitulo: 'Ações rápidas',
  acaoPerfilIce: 'Abrir Perfil/ICE',
  acaoQr: 'Gerar QR',
  acaoPreparacao: 'Preparação',
  acaoCofre: 'Cofre',
  acaoConfig: 'Configurações',
  alertaDpa: 'DPA/ICE em destaque: confira a ficha médica antes de uma emergência.',
  syncFutura: 'Sincronização fica para uma etapa futura; os dados atuais continuam locais.',
  graficoGaugeTitulo: 'Prontidão global',
  graficoGaugeSub: 'Checklist, alimentos, documentos e ficha médica ponderados para sete dias.',
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
  kpiProntidao: 'Readiness score',
  acoesRapidasTitulo: 'Quick actions',
  acaoPerfilIce: 'Open Profile/ICE',
  acaoQr: 'Generate QR',
  acaoPreparacao: 'Preparation',
  acaoCofre: 'Vault',
  acaoConfig: 'Settings',
  alertaDpa: 'DPA/ICE highlighted: review the medical file before an emergency.',
  syncFutura: 'Sync remains for a future stage; current data stays local.',
  graficoGaugeTitulo: 'Global readiness',
  graficoGaugeSub: 'Checklist, food, documents and medical file weighted for seven days.',
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
