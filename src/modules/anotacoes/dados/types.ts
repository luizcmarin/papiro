/** Linha de `tbl_pasta` (1:1 com SQLite). */
export interface PastaRow {
  id: number;
  nome: string;
  icone: string;
  ordem: number;
}

/**
 * Listagem / grelha de anotações — nunca incluir `conteudo` em consultas em massa.
 */
export interface AnotacaoListaRow {
  id: number;
  pasta_id: number | null;
  titulo: string;
  tipo_modelo: string;
  data_criacao: number;
  data_modificacao: number;
  esta_fixada: number;
  esta_arquivada: number;
  etiquetas: string;
}

/** Detalhe / editor — `conteudo` só com `WHERE id = ?`. */
export interface AnotacaoDetalheRow extends AnotacaoListaRow {
  conteudo: string;
}

export interface InsertAnotacaoInput {
  pasta_id: number | null;
  titulo: string;
  conteudo: string;
  tipo_modelo: string;
  esta_fixada: number;
  esta_arquivada: number;
  etiquetas: string;
}

export type AtualizaAnotacaoInput = InsertAnotacaoInput;

export interface FiltroListagemAnotacoes {
  pasta_id?: number | null | undefined;
  /** Se true, apenas `esta_arquivada = 0` */
  ocultarArquivadas?: boolean;
  termoTitulo?: string | undefined;
  /** `LIKE` em `etiquetas` (subcadeia). */
  termoEtiquetas?: string | undefined;
  /** Igual exacto ao valor gravado em `tipo_modelo`. */
  tipo_modelo?: string | undefined;
}
