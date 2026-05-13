import type { RecordeMemoriaRow } from '../dados/types.js';

export function avaliarRecordeMemoria(
  anterior: RecordeMemoriaRow | null,
  partida: { dificuldade: string; tempoMs: number; movimentos: number; concluidaEm: number },
): RecordeMemoriaRow {
  const melhorTempo =
    anterior && anterior.melhorTempoMs > 0 ? Math.min(anterior.melhorTempoMs, partida.tempoMs) : partida.tempoMs;
  const melhorMovimentos =
    anterior && anterior.melhorMovimentos > 0
      ? Math.min(anterior.melhorMovimentos, partida.movimentos)
      : partida.movimentos;

  return {
    dificuldade: partida.dificuldade,
    melhorTempoMs: melhorTempo,
    melhorMovimentos,
    partidasConcluidas: (anterior?.partidasConcluidas ?? 0) + 1,
    atualizadoEm: partida.concluidaEm,
  };
}

export function paresPorDificuldade(dificuldade: string): number {
  const d = dificuldade.trim().toLowerCase();
  if (d.includes('dificil') || d.includes('hard')) return 12;
  if (d.includes('medio') || d.includes('médio') || d.includes('medium')) return 8;
  return 6;
}

