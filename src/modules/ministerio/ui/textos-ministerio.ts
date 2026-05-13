import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosMinisterio {
  tituloPagina: string;
  relatoriosTitulo: string;
  novoRelatorio: string;
  estudosTitulo: string;
  novoEstudo: string;
  mesCampo: string;
  anoCampo: string;
  anoServicoCampo: string;
  horasCampo: string;
  estudosCampo: string;
  participacaoCampo: string;
  tipoCampo: string;
  metaHorasCampo: string;
  notasPubCampo: string;
  dirigenteNome: string;
  dirigenteTel: string;
  salvarRelatorio: string;
  compartilharRelatorio: string;
  relatorioCopiado: string;
  statusMeta: string;
  graficoBarrasTitulo: string;
  graficoGaugeTitulo: string;
  gaugeDetalhe: string;
  semRelatorios: string;
  apagarRelatorioTitulo: string;
  nomeEstudo: string;
  contatoCampo: string;
  enderecoCampo: string;
  zoomCampo: string;
  publicacaoCampo: string;
  licaoCampo: string;
  diaCampo: string;
  horarioMinCampo: string;
  proximoEstudoCampo: string;
  notasEstudoCampo: string;
  salvarEstudo: string;
  listaEstudosVazia: string;
  apagarEstudoTitulo: string;
  cancelar: string;
  confirmarExclusao: string;
}

const PT: TextosMinisterio = {
  tituloPagina: 'Ministério',
  relatoriosTitulo: 'Relatórios de campo',
  novoRelatorio: 'Novo relatório',
  estudosTitulo: 'Estudos bíblicos',
  novoEstudo: 'Novo estudo',
  mesCampo: 'Mês (1–12)',
  anoCampo: 'Ano civil',
  anoServicoCampo: 'Ano de serviço',
  horasCampo: 'Horas',
  estudosCampo: 'Estudos',
  participacaoCampo: 'Participação campo',
  tipoCampo: 'Tipo de publicador',
  metaHorasCampo: 'Meta de horas',
  notasPubCampo: 'Notas (publicações, auxiliar…)',
  dirigenteNome: 'Nome dirigente',
  dirigenteTel: 'Telefone dirigente',
  salvarRelatorio: 'Guardar relatório',
  compartilharRelatorio: 'Copiar relatório',
  relatorioCopiado: 'Texto do relatório copiado.',
  statusMeta: 'Meta',
  graficoBarrasTitulo: 'Horas por mês registadas',
  graficoGaugeTitulo: 'Último relatório: horas vs meta',
  gaugeDetalhe: 'Calculado a partir do relatório mais recente.',
  semRelatorios: 'Sem relatórios.',
  apagarRelatorioTitulo: 'Remover este relatório?',
  nomeEstudo: 'Nome estudante',
  contatoCampo: 'Contacto',
  enderecoCampo: 'Morada',
  zoomCampo: 'Ligação ou Zoom',
  publicacaoCampo: 'Publicação atual',
  licaoCampo: 'Lição atual (nº)',
  diaCampo: 'Dia da semana',
  horarioMinCampo: 'Hora local (minutos desde a meianoite)',
  proximoEstudoCampo: 'Próximo estudo (AAAA-MM-DD)',
  notasEstudoCampo: 'Notas',
  salvarEstudo: 'Guardar estudo',
  listaEstudosVazia: 'Sem estudos bíblicos.',
  apagarEstudoTitulo: 'Remover esta linha?',
  cancelar: 'Cancelar',
  confirmarExclusao: 'Confirmar exclusão',
};

const EN: TextosMinisterio = {
  tituloPagina: 'Ministry',
  relatoriosTitulo: 'Field reports',
  novoRelatorio: 'New report',
  estudosTitulo: 'Bible studies',
  novoEstudo: 'New bible study row',
  mesCampo: 'Month (1–12)',
  anoCampo: 'Calendar year',
  anoServicoCampo: 'Service-year tag',
  horasCampo: 'Hours',
  estudosCampo: 'Bible studies',
  participacaoCampo: 'Field participation',
  tipoCampo: 'Publisher role',
  metaHorasCampo: 'Hour objective',
  notasPubCampo: 'Notes (placements, aux…)',
  dirigenteNome: 'Overseer name',
  dirigenteTel: 'Overseer phone',
  salvarRelatorio: 'Save report',
  compartilharRelatorio: 'Copy report',
  relatorioCopiado: 'Report text copied.',
  statusMeta: 'Goal',
  graficoBarrasTitulo: 'Monthly hours reported',
  graficoGaugeTitulo: 'Latest saved report vs goal',
  gaugeDetalhe: 'Shows the chronologically newest report row.',
  semRelatorios: 'No reports yet.',
  apagarRelatorioTitulo: 'Delete this report?',
  nomeEstudo: 'Student name',
  contatoCampo: 'Contact',
  enderecoCampo: 'Address',
  zoomCampo: 'Link or Zoom URL',
  publicacaoCampo: 'Current publication',
  licaoCampo: 'Current lesson (#)',
  diaCampo: 'Week day',
  horarioMinCampo: 'Minutes from midnight',
  proximoEstudoCampo: 'Next study date (YYYY-MM-DD)',
  notasEstudoCampo: 'Notes',
  salvarEstudo: 'Save study row',
  listaEstudosVazia: 'No bible studies listed.',
  apagarEstudoTitulo: 'Remove this row?',
  cancelar: 'Cancel',
  confirmarExclusao: 'Delete',
};

export function obterTextosMinisterio(locale: LocaleId): TextosMinisterio {
  return locale === 'en' ? EN : PT;
}
