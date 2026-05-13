export type EstadoPomodoro = 'idle' | 'running' | 'paused';

export type FaseTimer = 'foco' | 'pausa_curta' | 'pausa_longa';

export interface OpcoesTimerPomodoro {
  duracaoFocoMs: number;
  duracaoPausaMs: number;
  duracaoPausaLongaMs: number;
  ciclosAntesPausaLonga: number;
  onTick?: (restanteMs: number, fase: FaseTimer) => void;
  onFaseConcluida?: (fase: FaseTimer) => void;
}

/** Máquina Pomodoro: foco ↔ pausa curta; ticks a interval fixo (~300 ms). */
export class TimerPomodoroController {
  private opts: OpcoesTimerPomodoro;
  private estado: EstadoPomodoro = 'idle';
  private faseAtual: FaseTimer = 'foco';
  private restanteMs = 0;
  private timerId: ReturnType<typeof setInterval> | null = null;
  private focosConcluidos = 0;
  readonly tickPeriodoMs = 300;

  constructor(parcial?: Partial<OpcoesTimerPomodoro>) {
    this.opts = {
      duracaoFocoMs: parcial?.duracaoFocoMs ?? 25 * 60_000,
      duracaoPausaMs: parcial?.duracaoPausaMs ?? 5 * 60_000,
      duracaoPausaLongaMs: parcial?.duracaoPausaLongaMs ?? 15 * 60_000,
      ciclosAntesPausaLonga: parcial?.ciclosAntesPausaLonga ?? 4,
      onTick: parcial?.onTick,
      onFaseConcluida: parcial?.onFaseConcluida,
    };
    this.restanteMs = this.opts.duracaoFocoMs;
  }

  obterEstado(): EstadoPomodoro {
    return this.estado;
  }

  obterFase(): FaseTimer {
    return this.faseAtual;
  }

  obterRestanteMs(): number {
    return Math.max(0, this.restanteMs);
  }

  iniciar(): void {
    if (this.estado === 'running') return;
    if (this.estado === 'idle' && this.restanteMs <= 0) {
      this.restanteMs =
        this.faseAtual === 'foco'
          ? this.opts.duracaoFocoMs
          : this.faseAtual === 'pausa_longa'
            ? this.opts.duracaoPausaLongaMs
            : this.opts.duracaoPausaMs;
    }
    this.estado = 'running';
    this.agendarInterval();
  }

  pausar(): void {
    if (this.estado !== 'running') return;
    this.estado = 'paused';
    this.pararInterval();
  }

  retomar(): void {
    if (this.estado !== 'paused') return;
    this.estado = 'running';
    this.agendarInterval();
  }

  reporCicloFoco(): void {
    this.pararInterval();
    this.estado = 'idle';
    this.faseAtual = 'foco';
    this.focosConcluidos = 0;
    this.restanteMs = this.opts.duracaoFocoMs;
    this.opts.onTick?.(this.restanteMs, this.faseAtual);
  }

  dispose(): void {
    this.pararInterval();
    this.estado = 'idle';
    this.opts.onTick = undefined;
    this.opts.onFaseConcluida = undefined;
  }

  private agendarInterval(): void {
    this.pararInterval();
    this.timerId = setInterval(() => this.aplicarTick(), this.tickPeriodoMs);
  }

  private pararInterval(): void {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  private aplicarTick(): void {
    if (this.estado !== 'running') return;
    this.restanteMs -= this.tickPeriodoMs;
    if (this.restanteMs <= 0) {
      this.termosFase();
      return;
    }
    this.opts.onTick?.(this.restanteMs, this.faseAtual);
  }

  private termosFase(): void {
    const antes = this.faseAtual;
    this.opts.onFaseConcluida?.(antes);
    if (antes === 'foco') {
      this.focosConcluidos += 1;
      const devePausaLonga =
        this.opts.ciclosAntesPausaLonga > 0 && this.focosConcluidos % this.opts.ciclosAntesPausaLonga === 0;
      this.faseAtual = devePausaLonga ? 'pausa_longa' : 'pausa_curta';
      this.restanteMs = devePausaLonga ? this.opts.duracaoPausaLongaMs : this.opts.duracaoPausaMs;
    } else {
      this.faseAtual = 'foco';
      this.restanteMs = this.opts.duracaoFocoMs;
      this.estado = 'paused';
      this.pararInterval();
    }
    this.opts.onTick?.(this.restanteMs, this.faseAtual);
  }
}
