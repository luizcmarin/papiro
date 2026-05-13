import { describe, expect, it } from 'vitest';

import { conquistasParaSessaoEstudo, minutosFocoParaGravar } from './conquistas-estudo.js';

describe('conquistas-estudo', () => {
  it('desbloqueia conquistas extraídas do fluxo de estudo', () => {
    expect(
      conquistasParaSessaoEstudo({
        totalFocosAposSessao: 5,
        duracaoMinutos: 50,
        totalNotasMeditacao: 10,
      }),
    ).toEqual(['FIRST_FOCUS', 'FIVE_FOCUS', 'LONG_SESSION', 'NOTES_10']);
  });

  it('calcula minutos efetivos do foco', () => {
    expect(minutosFocoParaGravar(25 * 60_000, 10 * 60_000)).toBe(15);
  });
});

