import { afterEach, describe, expect, it, vi } from 'vitest';

import { TimerPomodoroController } from './timer-controller.js';

describe('TimerPomodoroController', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('concluir foco muda para pausa_curta mantendo estado running para o segundo ciclo interno', () => {
    vi.useFakeTimers();
    const fases: string[] = [];
    const ctl = new TimerPomodoroController({
      duracaoFocoMs: 900,
      duracaoPausaMs: 300,
      onFaseConcluida: (f) => fases.push(f),
    });
    ctl.iniciar();
    vi.advanceTimersByTime(910);
    expect(fases).toEqual(['foco']);
    expect(ctl.obterFase()).toBe('pausa_curta');
    expect(ctl.obterEstado()).toBe('running');
    vi.advanceTimersByTime(310);
    expect(fases).toEqual(['foco', 'pausa_curta']);
    expect(ctl.obterFase()).toBe('foco');
    expect(ctl.obterEstado()).toBe('paused');
    ctl.dispose();
  });
});
