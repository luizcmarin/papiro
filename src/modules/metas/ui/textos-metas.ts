import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosMetas {
  tituloPagina: string;
  novoObjetivo: string;
  tituloLista: string;
  listaVazia: string;
  tituloCampo: string;
  itemCampo: string;
  ativoNomeCampo: string;
  dataMetaCampo: string;
  prazoCampo: string;
  atualCampo: string;
  alvoCampo: string;
  concluidaLabel: string;
  salvar: string;
  apagarTituloDialogo: string;
  cancelar: string;
  apagarBotao: string;
  donutTitulo: string;
  donutDetalhe: string;
}

const PT: TextosMetas = {
  tituloPagina: 'Metas',
  novoObjetivo: 'Nova meta',
  tituloLista: 'Objetivos',
  listaVazia: 'Nenhuma meta definida.',
  tituloCampo: 'Título',
  itemCampo: 'Item',
  ativoNomeCampo: 'Ativo ou nota breve',
  dataMetaCampo: 'Definido em',
  prazoCampo: 'Prazo final',
  atualCampo: 'Progresso atual',
  alvoCampo: 'Meta numérica',
  concluidaLabel: 'Concluído',
  salvar: 'Guardar meta',
  apagarTituloDialogo: 'Remover esta meta?',
  cancelar: 'Cancelar',
  apagarBotao: 'Remover',
  donutTitulo: 'Progresso selecionado',
  donutDetalhe: 'Atual sobre o alvo definido.',
};

const EN: TextosMetas = {
  tituloPagina: 'Goals',
  novoObjetivo: 'New goal',
  tituloLista: 'Objectives',
  listaVazia: 'No goals yet.',
  tituloCampo: 'Title',
  itemCampo: 'Focus item',
  ativoNomeCampo: 'Active / short note',
  dataMetaCampo: 'Set on',
  prazoCampo: 'Deadline',
  atualCampo: 'Current progress',
  alvoCampo: 'Target amount',
  concluidaLabel: 'Done',
  salvar: 'Save goal',
  apagarTituloDialogo: 'Remove this goal?',
  cancelar: 'Cancel',
  apagarBotao: 'Remove',
  donutTitulo: 'Selected goal',
  donutDetalhe: 'Current versus target.',
};

export function obterTextosMetas(locale: LocaleId): TextosMetas {
  return locale === 'en' ? EN : PT;
}
