import { describe, expect, it } from 'vitest';

import { avaliarRecordeMemoria, paresPorDificuldade } from './jogo-memoria.js';

describe('jogo-memoria', () => {
  it('atualiza recorde preservando melhores marcas', () => {
    const atual = avaliarRecordeMemoria(
      {
        dificuldade: 'medio',
        melhorTempoMs: 60_000,
        melhorMovimentos: 20,
        partidasConcluidas: 2,
        atualizadoEm: 1,
      },
      { dificuldade: 'medio', tempoMs: 50_000, movimentos: 22, concluidaEm: 2 },
    );

    expect(atual.melhorTempoMs).toBe(50_000);
    expect(atual.melhorMovimentos).toBe(20);
    expect(atual.partidasConcluidas).toBe(3);
  });

  it('define pares por dificuldade', () => {
    expect(paresPorDificuldade('facil')).toBe(6);
    expect(paresPorDificuldade('médio')).toBe(8);
    expect(paresPorDificuldade('hard')).toBe(12);
  });
});

