/** Listagem sem `conteudo` (lazy selection). */
export interface PoesiaListaRow {
  id: number;
  titulo: string;
  texto: string;
  anteriorId: number | null;
  proximoId: number | null;
  publicar: number;
}

export interface PoesiaDetalheRow extends PoesiaListaRow {
  conteudo: string;
}

export interface PoesiaFormInput {
  titulo: string;
  texto: string;
}
