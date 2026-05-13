import { describe, expect, it } from 'vitest';

import { classificarPrazoMeta, percentualMeta, sugerirItemMetaModulo } from './progresso-metas.js';

describe('progresso-metas', () => {
  it('calcula percentual limitado entre 0 e 100', () => {
    expect(percentualMeta({ progresso_atual: 4, progresso_alvo: 10 })).toBe(40);
    expect(percentualMeta({ progresso_atual: 12, progresso_alvo: 10 })).toBe(100);
  });

  it('classifica prazo e conclusão', () => {
    const agora = Date.UTC(2026, 4, 12);
    expect(classificarPrazoMeta({ prazo_final: 0, esta_concluida: 0 }, agora)).toBe('sem_prazo');
    expect(classificarPrazoMeta({ prazo_final: agora - 1, esta_concluida: 0 }, agora)).toBe('vencida');
    expect(classificarPrazoMeta({ prazo_final: agora + 3 * 86_400_000, esta_concluida: 0 }, agora)).toBe('vence_em_breve');
    expect(classificarPrazoMeta({ prazo_final: agora + 30 * 86_400_000, esta_concluida: 0 }, agora)).toBe('em_dia');
    expect(classificarPrazoMeta({ prazo_final: agora - 1, esta_concluida: 1 }, agora)).toBe('concluida');
  });

  it('sugere texto por módulo', () => {
    expect(sugerirItemMetaModulo('Financeiro')).toContain('despesas');
    expect(sugerirItemMetaModulo('Preparação')).toContain('prontidão');
  });
});

