/** Colunas físicas preservam casing do contrato v37 camelCase onde aplicável. */
export interface RecordeMemoriaRow {
  dificuldade: string;
  melhorTempoMs: number;
  melhorMovimentos: number;
  partidasConcluidas: number;
  atualizadoEm: number;
}

export interface PerguntaQuizRow {
  id: number;
  pergunta: string;
  referencia: string;
  dificuldade: number;
  resposta1: string;
  resposta2: string;
  resposta3: string;
  resposta4: string;
  correta: number;
  publicar: number;
}

export interface PerguntaQuizInputManual {
  id: number;
  pergunta: string;
  referencia: string;
  dificuldade: number;
  resposta1: string;
  resposta2: string;
  resposta3: string;
  resposta4: string;
  correta: number;
  publicar: number;
}
