import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosPreparacao {
  tituloPagina: string;
  subtituloPagina: string;
  guiasTitulo: string;
  guiasVazio: string;
  cofreTitulo: string;
  cofreStub: string;
  cofreEnviar: string;
  cofreSenha: string;
  cofreArquivo: string;
  cofreNomeDocumento: string;
  cofreListaVazia: string;
  indiceProntidaoTitulo: string;
  indiceProntidaoValor: string;
  kitsTitulo: string;
  novoKit: string;
  editarKit: string;
  atualizarKit: string;
  campoNomeKit: string;
  campoIconeKit: string;
  adicionarItem: string;
  editarItem: string;
  atualizarItem: string;
  semKits: string;
  semItensKit: string;
  marcadoLegenda: string;
  progressoKit: string;
  calculadoraTitulo: string;
  calculadoraDescricao: string;
  resumoReservaTitulo: string;
  resumoReservaDescricao: string;
  estoqueTitulo: string;
  novoEstoque: string;
  editarEstoqueTitulo: string;
  atualizarEstoque: string;
  itemCampo: string;
  qtdCampo: string;
  pesoCampo: string;
  kcalCampo: string;
  vencCampo: string;
  validadeItemCampo: string;
  pessoasCampo: string;
  kcalPessoaDiaCampo: string;
  diasReferenciaCampo: string;
  totalPesoCalc: string;
  totalKcalCalc: string;
  totalReservaKcal: string;
  autonomiaReserva: string;
  aguaReserva: string;
  pesoReserva: string;
  metaReserva: string;
  diasUnidade: string;
  alertaVencimentoTitulo: string;
  estoqueVencido: string;
  estoqueVenceEm: string;
  itemVencidoEm: string;
  itemVenceEm: string;
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
  subtituloPagina: 'Kits, reserva de alimentos e autonomia básica para prontidão offline.',
  guiasTitulo: 'Guias rápidos',
  guiasVazio: 'Nenhuma linha na tabela tbl_guias.',
  cofreTitulo: 'Documentos no cofre',
  cofreStub: 'Cópias cifradas: contagem de linhas apenas (fluxo PIN fora desta onda).',
  cofreEnviar: 'Criptografar e guardar',
  cofreSenha: 'Senha do cofre',
  cofreArquivo: 'Arquivo',
  cofreNomeDocumento: 'Nome do documento',
  cofreListaVazia: 'Nenhum documento criptografado.',
  indiceProntidaoTitulo: 'Índice global de prontidão',
  indiceProntidaoValor: '{valor}% de prontidão',
  kitsTitulo: 'Kits de checklist',
  novoKit: 'Criar kit',
  editarKit: 'Editar kit',
  atualizarKit: 'Guardar kit',
  campoNomeKit: 'Nome',
  campoIconeKit: 'Ícone (atalho texto)',
  adicionarItem: 'Acrescentar item',
  editarItem: 'Editar item',
  atualizarItem: 'Guardar item',
  semKits: 'Sem kits. Crie o primeiro.',
  semItensKit: 'Sem itens neste kit.',
  marcadoLegenda: 'Marcado',
  progressoKit: 'Progresso',
  calculadoraTitulo: 'Calculadora de alimentos',
  calculadoraDescricao: 'Estime peso total e calorias antes de guardar uma linha da reserva.',
  resumoReservaTitulo: 'Autonomia da reserva',
  resumoReservaDescricao: 'Resumo calculado a partir das linhas salvas no estoque.',
  estoqueTitulo: 'Reserva de alimentos',
  novoEstoque: 'Nova linha',
  editarEstoqueTitulo: 'Editar linha da reserva',
  atualizarEstoque: 'Guardar alterações',
  itemCampo: 'Item ou alimento',
  qtdCampo: 'Quantidade',
  pesoCampo: 'Gramas por unidade',
  kcalCampo: 'kcal por 100 g',
  vencCampo: 'Validade (AAAA-MM-DD)',
  validadeItemCampo: 'Validade do item (opcional)',
  pessoasCampo: 'Pessoas',
  kcalPessoaDiaCampo: 'kcal por pessoa/dia',
  diasReferenciaCampo: 'Dias de referência',
  totalPesoCalc: 'Peso total estimado',
  totalKcalCalc: 'Energia estimada',
  totalReservaKcal: 'Energia no estoque',
  autonomiaReserva: 'Autonomia estimada',
  aguaReserva: 'Água sugerida',
  pesoReserva: 'Peso armazenado',
  metaReserva: 'Meta de prontidão',
  diasUnidade: 'dias',
  alertaVencimentoTitulo: 'Atenção a vencimentos',
  estoqueVencido: 'Vencido em',
  estoqueVenceEm: 'Vence em',
  itemVencidoEm: 'Item vencido em',
  itemVenceEm: 'Item vence em',
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
  subtituloPagina: 'Kits, food stash, and basic offline readiness estimates.',
  guiasTitulo: 'Quick guides',
  guiasVazio: 'tbl_guias is empty locally.',
  cofreTitulo: 'Encrypted vault rows',
  cofreStub: 'Shows row count only; PIN workflow arrives later.',
  cofreEnviar: 'Encrypt and save',
  cofreSenha: 'Vault password',
  cofreArquivo: 'File',
  cofreNomeDocumento: 'Document name',
  cofreListaVazia: 'No encrypted documents yet.',
  indiceProntidaoTitulo: 'Global readiness score',
  indiceProntidaoValor: '{valor}% ready',
  kitsTitulo: 'Checklists',
  novoKit: 'Create kit',
  editarKit: 'Edit kit',
  atualizarKit: 'Save kit',
  campoNomeKit: 'Kit name',
  campoIconeKit: 'Short icon slug',
  adicionarItem: 'Add checklist item',
  editarItem: 'Edit checklist item',
  atualizarItem: 'Save item',
  semKits: 'No kits yet.',
  semItensKit: 'No items in this kit yet.',
  marcadoLegenda: 'Packed',
  progressoKit: 'Progress',
  calculadoraTitulo: 'Food calculator',
  calculadoraDescricao: 'Estimate total weight and calories before saving a pantry row.',
  resumoReservaTitulo: 'Stash autonomy',
  resumoReservaDescricao: 'Summary calculated from saved pantry rows.',
  estoqueTitulo: 'Emergency food stash',
  novoEstoque: 'Add pantry row',
  editarEstoqueTitulo: 'Edit pantry row',
  atualizarEstoque: 'Save changes',
  itemCampo: 'Description',
  qtdCampo: 'Quantity',
  pesoCampo: 'Grams per unit',
  kcalCampo: 'calories per 100g',
  vencCampo: 'Expiry (YYYY-MM-DD)',
  validadeItemCampo: 'Item expiry (optional)',
  pessoasCampo: 'People',
  kcalPessoaDiaCampo: 'kcal per person/day',
  diasReferenciaCampo: 'Reference days',
  totalPesoCalc: 'Estimated total weight',
  totalKcalCalc: 'Estimated energy',
  totalReservaKcal: 'Stored energy',
  autonomiaReserva: 'Estimated autonomy',
  aguaReserva: 'Suggested water',
  pesoReserva: 'Stored weight',
  metaReserva: 'Readiness target',
  diasUnidade: 'days',
  alertaVencimentoTitulo: 'Expiry warnings',
  estoqueVencido: 'Expired on',
  estoqueVenceEm: 'Expires on',
  itemVencidoEm: 'Item expired on',
  itemVenceEm: 'Item expires on',
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
