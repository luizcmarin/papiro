export type ConquistaEstudoTipo = 'FIRST_FOCUS' | 'FIVE_FOCUS' | 'LONG_SESSION' | 'NOTES_10';

export function conquistasParaSessaoEstudo(opcoes: {
  totalFocosAposSessao: number;
  duracaoMinutos: number;
  totalNotasMeditacao: number;
}): ConquistaEstudoTipo[] {
  const conquistas: ConquistaEstudoTipo[] = [];
  if (opcoes.totalFocosAposSessao >= 1) conquistas.push('FIRST_FOCUS');
  if (opcoes.totalFocosAposSessao >= 5) conquistas.push('FIVE_FOCUS');
  if (opcoes.duracaoMinutos >= 45) conquistas.push('LONG_SESSION');
  if (opcoes.totalNotasMeditacao >= 10) conquistas.push('NOTES_10');
  return conquistas;
}

export function minutosFocoParaGravar(msPlanejado: number, msRestante: number): number {
  return Math.max(1, Math.round(Math.max(0, msPlanejado - msRestante) / 60_000));
}

