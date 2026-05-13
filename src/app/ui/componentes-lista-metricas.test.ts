import { describe, expect, it } from 'vitest';

import { criarBlocoLista } from './lista.js';
import { criarGradeMetricas, renderizarMetricas } from './metricas.js';
import { criarResumoProgresso, percentualProgresso } from './progresso.js';

describe('componentes de lista e métricas', () => {
  it('cria bloco de lista com título e detalhes não vazios', () => {
    const bloco = criarBlocoLista('Arroz', ['2 kg', '', 'Validade: 2026-05-12']);

    expect(bloco.className).toBe('shell__lista-bloco');
    expect(bloco.querySelector('.shell__lista-titulo')?.textContent).toBe('Arroz');
    expect([...bloco.querySelectorAll('.shell__lista-sub')].map((el) => el.textContent)).toEqual([
      '2 kg',
      'Validade: 2026-05-12',
    ]);
  });

  it('renderiza e substitui métricas na grade', () => {
    const grade = criarGradeMetricas([{ rotulo: 'Peso', valor: '2 kg' }]);

    expect(grade.className).toBe('shell__metricas-grid');
    expect(grade.querySelector('strong')?.textContent).toBe('2 kg');
    expect(grade.querySelector('span')?.textContent).toBe('Peso');

    renderizarMetricas(grade, [{ rotulo: 'Energia', valor: '500 kcal' }]);

    expect(grade.children).toHaveLength(1);
    expect(grade.querySelector('strong')?.textContent).toBe('500 kcal');
    expect(grade.querySelector('span')?.textContent).toBe('Energia');
  });

  it('limita percentual de progresso e cria resumo acessível ao DOM', () => {
    expect(percentualProgresso(3, 10)).toBe(30);
    expect(percentualProgresso(12, 10)).toBe(100);
    expect(percentualProgresso(-1, 10)).toBe(0);
    expect(percentualProgresso(1, 0)).toBe(0);

    const host = document.createElement('div');
    host.append(criarResumoProgresso({ titulo: 'Kit', rotulo: 'Itens', atual: 3, total: 4 }));

    expect(host.querySelector('.shell__lista-meta')?.textContent).toBe('Itens: 3/4 · 75%');
    expect(host.querySelector('progress')?.value).toBe(75);
  });
});
