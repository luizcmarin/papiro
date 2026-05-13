import { describe, expect, it } from 'vitest';

import {
  formatarDataInputOuTraco,
  formatarDataInputUtc,
  intervaloMesInputUtc,
  intervaloMesLocalAtualUtc,
  parseDataInputUtcMs,
  separarPorVencimento,
} from './datas.js';

describe('datas compartilhadas', () => {
  it('faz ida e volta de input date usando epoch ms em UTC', () => {
    const ms = parseDataInputUtcMs('2026-05-12');

    expect(ms).toBe(Date.UTC(2026, 4, 12, 12, 0, 0, 0));
    expect(formatarDataInputUtc(ms)).toBe('2026-05-12');
  });

  it('rejeita valores fora do formato YYYY-MM-DD', () => {
    expect(parseDataInputUtcMs('12/05/2026')).toBeNull();
    expect(parseDataInputUtcMs('')).toBeNull();
  });

  it('formata datas opcionais vazias como string vazia ou traco', () => {
    expect(formatarDataInputUtc(0)).toBe('');
    expect(formatarDataInputUtc(null)).toBe('');
    expect(formatarDataInputOuTraco(0)).toBe('-');
  });

  it('calcula intervalo mensal a partir de input YYYY-MM', () => {
    expect(intervaloMesInputUtc('2026-05')).toEqual({
      min: Date.UTC(2026, 4, 1, 0, 0, 0, 0),
      maxEx: Date.UTC(2026, 5, 1, 0, 0, 0, 0),
    });
    expect(intervaloMesInputUtc('2026-13')).toBeNull();
  });

  it('calcula intervalo do mês local a partir de uma referência', () => {
    expect(intervaloMesLocalAtualUtc(new Date(2026, 4, 12))).toEqual({
      min: Date.UTC(2026, 4, 1, 0, 0, 0, 0),
      maxEx: Date.UTC(2026, 5, 1, 0, 0, 0, 0),
    });
  });

  it('separa itens vencidos e a vencer em uma janela', () => {
    const agora = Date.UTC(2026, 4, 12, 12, 0, 0, 0);
    const vencido = { id: 1, data_vencimento: agora - 1 };
    const aVencer = { id: 2, data_vencimento: agora + 2 * 24 * 60 * 60 * 1000 };
    const foraDaJanela = { id: 3, data_vencimento: agora + 10 * 24 * 60 * 60 * 1000 };
    const semData = { id: 4, data_vencimento: 0 };

    expect(separarPorVencimento([vencido, aVencer, foraDaJanela, semData], agora, 7)).toEqual({
      vencidos: [vencido],
      aVencer: [aVencer],
    });
  });
});
