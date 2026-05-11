import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosPreparacao {
  tituloPagina: string;
  guiasTitulo: string;
  guiasVazio: string;
  cofreTitulo: string;
  cofreStub: string;
  kitsTitulo: string;
  novoKit: string;
  campoNomeKit: string;
  campoIconeKit: string;
  adicionarItem: string;
  semKits: string;
  marcadoLegenda: string;
  calculadoraTitulo: string;
  calculadoraDescricao: string;
  estoqueTitulo: string;
  novoEstoque: string;
  itemCampo: string;
  qtdCampo: string;
  pesoCampo: string;
  kcalCampo: string;
  vencCampo: string;
  totalPesoCalc: string;
  totalKcalCalc: string;
  guardarLinha: string;
  listaEstoqueVazia: string;
  removerItemTitulo: string;
  removerKitTitulo: string;
  removerEstoqueTitulo: string;
  dialogoConfirmarRemover: string;
  etiquetaQuantidadePack: string;
  observacaoItemCampo: string;
  detalheGuiaTitulo: string;
  cancelar: string;
  abrirGuiaAria: string;
}

const PT: TextosPreparacao = {
  tituloPagina: 'Preparação',
  guiasTitulo: 'Guias rápidos',
  guiasVazio: 'Nenhuma linha na tabela tbl_guias.',
  cofreTitulo: 'Documentos no cofre',
  cofreStub: 'Cópias cifradas: contagem de linhas apenas (fluxo PIN fora desta onda).',
  kitsTitulo: 'Kits de checklist',
  novoKit: 'Criar kit',
  campoNomeKit: 'Nome',
  campoIconeKit: 'Ícone (atalho texto)',
  adicionarItem: 'Acrescentar item',
  semKits: 'Sem kits. Crie o primeiro.',
  marcadoLegenda: 'Marcado',
  calculadoraTitulo: 'Calculadora de alimentos',
  calculadoraDescricao: 'Estime peso total e calorias antes de guardar uma linha da reserva.',
  estoqueTitulo: 'Reserva de alimentos',
  novoEstoque: 'Nova linha',
  itemCampo: 'Item ou alimento',
  qtdCampo: 'Quantidade',
  pesoCampo: 'Gramas por unidade',
  kcalCampo: 'kcal por 100 g',
  vencCampo: 'Validade (AAAA-MM-DD)',
  totalPesoCalc: 'Peso total estimado',
  totalKcalCalc: 'Energia estimada',
  guardarLinha: 'Guardar linha da reserva',
  listaEstoqueVazia: 'Reserva vazia.',
  removerItemTitulo: 'Eliminar este item?',
  removerKitTitulo: 'Eliminar este kit?',
  removerEstoqueTitulo: 'Eliminar entrada da reserva?',
  dialogoConfirmarRemover: 'Eliminar definitivamente?',
  etiquetaQuantidadePack: 'Qtd.',
  observacaoItemCampo: 'Observações',
  detalheGuiaTitulo: 'Texto da guia',
  cancelar: 'Cancelar',
  abrirGuiaAria: 'Abrir texto completo da guia',
};

const EN: TextosPreparacao = {
  tituloPagina: 'Preparedness',
  guiasTitulo: 'Quick guides',
  guiasVazio: 'tbl_guias is empty locally.',
  cofreTitulo: 'Encrypted vault rows',
  cofreStub: 'Shows row count only; PIN workflow arrives later.',
  kitsTitulo: 'Checklists',
  novoKit: 'Create kit',
  campoNomeKit: 'Kit name',
  campoIconeKit: 'Short icon slug',
  adicionarItem: 'Add checklist item',
  semKits: 'No kits yet.',
  marcadoLegenda: 'Packed',
  calculadoraTitulo: 'Food calculator',
  calculadoraDescricao: 'Estimate total weight and calories before saving a pantry row.',
  estoqueTitulo: 'Emergency food stash',
  novoEstoque: 'Add pantry row',
  itemCampo: 'Description',
  qtdCampo: 'Quantity',
  pesoCampo: 'Grams per unit',
  kcalCampo: 'calories per 100g',
  vencCampo: 'Expiry (YYYY-MM-DD)',
  totalPesoCalc: 'Estimated total weight',
  totalKcalCalc: 'Estimated energy',
  guardarLinha: 'Save pantry row',
  listaEstoqueVazia: 'Nothing in the stash yet.',
  removerItemTitulo: 'Drop this checklist line?',
  removerKitTitulo: 'Drop kit and its items?',
  removerEstoqueTitulo: 'Drop this pantry row?',
  dialogoConfirmarRemover: 'Confirm delete?',
  etiquetaQuantidadePack: 'Qty',
  observacaoItemCampo: 'Notes',
  detalheGuiaTitulo: 'Guide contents',
  cancelar: 'Cancel',
  abrirGuiaAria: 'Open full guide body',
};

export function obterTextosPreparacao(locale: LocaleId): TextosPreparacao {
  return locale === 'en' ? EN : PT;
}
