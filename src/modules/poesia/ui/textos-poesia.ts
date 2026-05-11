import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosPoesia {
  tituloPagina: string;
  listaTitulo: string;
  nova: string;
  guardar: string;
  cancelarEdicao: string;
  campoTitulo: string;
  campoTexto: string;
  vazia: string;
  editar: string;
  apagar: string;
  dialogoApagarLabel: string;
  dialogoApagarTexto: string;
  dialogoConfirmar: string;
  dialogoCancelar: string;
  erroBd: string;
  leituraTitulo: string;
}

const PT: TextosPoesia = {
  tituloPagina: 'Poesia',
  listaTitulo: 'Poesias na base local',
  nova: 'Nova poesia',
  guardar: 'Guardar',
  cancelarEdicao: 'Nova (limpar)',
  campoTitulo: 'Título',
  campoTexto: 'Texto (parágrafos separados por linha em branco)',
  vazia: 'Ainda não há poesias. Crie uma com o formulário acima.',
  editar: 'Editar',
  apagar: 'Apagar',
  dialogoApagarLabel: 'Apagar poesia',
  dialogoApagarTexto: 'Esta linha será removida da base local.',
  dialogoConfirmar: 'Apagar',
  dialogoCancelar: 'Cancelar',
  erroBd: 'Operação falhou na base local.',
  leituraTitulo: 'Pré-visualização (HTML sanitizado)',
};

const EN: TextosPoesia = {
  tituloPagina: 'Poetry',
  listaTitulo: 'Poems in local database',
  nova: 'New poem',
  guardar: 'Save',
  cancelarEdicao: 'Clear form',
  campoTitulo: 'Title',
  campoTexto: 'Text (blank line between paragraphs)',
  vazia: 'No poems yet. Add one using the form above.',
  editar: 'Edit',
  apagar: 'Delete',
  dialogoApagarLabel: 'Delete poem',
  dialogoApagarTexto: 'This row will be removed from your local database.',
  dialogoConfirmar: 'Delete',
  dialogoCancelar: 'Cancel',
  erroBd: 'The local database refused that operation.',
  leituraTitulo: 'Preview (sanitised HTML)',
};

export function obterTextosPoesia(locale: LocaleId): TextosPoesia {
  return locale === 'en' ? EN : PT;
}
