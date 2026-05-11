/** Listagem — sem textos longos em massa (ingredientes/instruções só no detalhe). */
export interface ReceitaListaRow {
  id: number;
  titulo: string;
  categoria: string;
  publicar: number;
  data_criacao: number;
  data_atualizacao: number;
}

export interface ReceitaDetalheRow extends ReceitaListaRow {
  id_remoto: number | null;
  ingredientes: string;
  instrucoes: string;
}

export interface ReceitaFormInput {
  titulo: string;
  categoria: string;
  ingredientes: string;
  instrucoes: string;
  publicar: number;
}

export interface FiltroListagemReceitas {
  termo?: string | undefined;
}
