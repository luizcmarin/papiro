import { describe, expect, it } from 'vitest';

import {
  calcularAnoServico,
  classificarMetaHoras,
  metaPadraoHoras,
  montarRelatorioMinisterioCompartilhavel,
} from './relatorio-ministerio.js';

describe('relatorio-ministerio', () => {
  it('calcula ano de serviço a partir de setembro', () => {
    expect(calcularAnoServico(new Date(2026, 7, 31))).toBe(2026);
    expect(calcularAnoServico(new Date(2026, 8, 1))).toBe(2027);
  });

  it('sugere metas padrão por tipo de publicador', () => {
    expect(metaPadraoHoras('Pioneiro auxiliar')).toBe(30);
    expect(metaPadraoHoras('Pioneiro regular')).toBe(50);
    expect(metaPadraoHoras('Publicador')).toBe(0);
  });

  it('classifica progresso da meta mensal', () => {
    expect(classificarMetaHoras(0, 0)).toBe('sem_meta');
    expect(classificarMetaHoras(10, 30)).toBe('abaixo');
    expect(classificarMetaHoras(20, 30)).toBe('em_andamento');
    expect(classificarMetaHoras(30, 30)).toBe('concluida');
  });

  it('monta texto pronto para compartilhamento', () => {
    const texto = montarRelatorioMinisterioCompartilhavel({
      mes: 5,
      ano: 2026,
      ano_servico: 2026,
      horas: 12,
      estudos: 1,
      participacao: 1,
      tipo_publicador: 'Publicador',
      meta_horas: 0,
      notas_publicacoes: 'Duas revisitas boas.',
      telefone_dirigente: '',
      nome_dirigente: '',
    });

    expect(texto).toContain('Relatório 05/2026');
    expect(texto).toContain('Duas revisitas boas.');
  });
});

