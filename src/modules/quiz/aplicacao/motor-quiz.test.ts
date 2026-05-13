import { describe, expect, it } from 'vitest';

import { avaliarRespostaQuiz, calcularNivelQuiz, calcularXpResposta } from './motor-quiz.js';
import type { PerguntaQuizRow } from '../dados/types.js';

const pergunta: PerguntaQuizRow = {
  id: 1,
  pergunta: 'Quem foi chamado amigo de Jeová?',
  referencia: 'Tg 2:23',
  dificuldade: 4,
  resposta1: 'Abraão',
  resposta2: 'Moisés',
  resposta3: 'Davi',
  resposta4: 'Paulo',
  correta: 1,
  publicar: 1,
};

describe('motor-quiz', () => {
  it('calcula XP com dificuldade, sequência e custo de dica', () => {
    expect(calcularXpResposta({ dificuldade: 4, correta: true, sequenciaAtual: 4 })).toBe(48);
    expect(calcularXpResposta({ dificuldade: 4, correta: true, sequenciaAtual: 4, usouDica: true })).toBe(29);
    expect(calcularXpResposta({ dificuldade: 4, correta: false, sequenciaAtual: 4 })).toBe(0);
  });

  it('usa raiz quadrada para escalar nível', () => {
    expect(calcularNivelQuiz(0)).toBe(1);
    expect(calcularNivelQuiz(900)).toBe(4);
  });

  it('avalia resposta e conquistas da sessão', () => {
    const res = avaliarRespostaQuiz({
      pergunta,
      escolha: 1,
      xpAtual: 100,
      sequenciaAtual: 4,
    });

    expect(res.correta).toBe(true);
    expect(res.sequenciaNova).toBe(5);
    expect(res.conquistas).toContain('SEQUENCIA_5');
    expect(res.conquistas).toContain('MESTRE_DIFICIL');
  });
});

