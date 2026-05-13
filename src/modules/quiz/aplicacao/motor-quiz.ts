import type { PerguntaQuizRow } from '../dados/types.js';

export type ConquistaQuiz = 'PRIMEIRO_ACERTO' | 'SEQUENCIA_5' | 'SEQUENCIA_10' | 'MESTRE_DIFICIL';

export interface ResultadoRespostaQuiz {
  correta: boolean;
  xpGanho: number;
  sequenciaNova: number;
  nivelNovo: number;
  conquistas: ConquistaQuiz[];
}

export function respostasDaPergunta(pergunta: PerguntaQuizRow): string[] {
  return [pergunta.resposta1, pergunta.resposta2, pergunta.resposta3, pergunta.resposta4];
}

export function calcularNivelQuiz(xpTotal: number): number {
  return Math.max(1, Math.floor(Math.sqrt(Math.max(0, xpTotal) / 100)) + 1);
}

export function calcularXpResposta(opcoes: {
  dificuldade: number;
  correta: boolean;
  sequenciaAtual: number;
  usouDica?: boolean;
}): number {
  if (!opcoes.correta) return 0;
  const dificuldade = Math.min(5, Math.max(1, Math.round(opcoes.dificuldade || 1)));
  const multiplicadorSequencia = 1 + Math.min(0.5, Math.max(0, opcoes.sequenciaAtual) * 0.05);
  const penalidadeDica = opcoes.usouDica ? 0.6 : 1;
  return Math.round(dificuldade * 10 * multiplicadorSequencia * penalidadeDica);
}

export function avaliarRespostaQuiz(opcoes: {
  pergunta: PerguntaQuizRow;
  escolha: number;
  xpAtual: number;
  sequenciaAtual: number;
  usouDica?: boolean;
}): ResultadoRespostaQuiz {
  const correta = opcoes.escolha === opcoes.pergunta.correta;
  const xpGanho = calcularXpResposta({
    dificuldade: opcoes.pergunta.dificuldade,
    correta,
    sequenciaAtual: opcoes.sequenciaAtual,
    usouDica: opcoes.usouDica,
  });
  const sequenciaNova = correta ? opcoes.sequenciaAtual + 1 : 0;
  const conquistas: ConquistaQuiz[] = [];
  if (correta) conquistas.push('PRIMEIRO_ACERTO');
  if (sequenciaNova >= 5) conquistas.push('SEQUENCIA_5');
  if (sequenciaNova >= 10) conquistas.push('SEQUENCIA_10');
  if (correta && opcoes.pergunta.dificuldade >= 4) conquistas.push('MESTRE_DIFICIL');

  return {
    correta,
    xpGanho,
    sequenciaNova,
    nivelNovo: calcularNivelQuiz(opcoes.xpAtual + xpGanho),
    conquistas: [...new Set(conquistas)],
  };
}

