import { describe, expect, it } from 'vitest';

import {
  calcularIndiceProntidao,
  calcularResumoReserva,
  kcalTotal,
  litrosAguaArredondadoParaCima,
  pesoTotalGramas,
} from './calculadora-preparacao.js';

describe('calculadora-preparacao', () => {
  it('calcula peso e energia de uma linha de alimento', () => {
    const arroz = { quantidade: 3, peso_unitario: 1000, calorias_por_100g: 360 };

    expect(pesoTotalGramas(arroz)).toBe(3000);
    expect(kcalTotal(arroz)).toBe(10800);
  });

  it('calcula resumo de autonomia da reserva', () => {
    const resumo = calcularResumoReserva(
      [
        { quantidade: 2, peso_unitario: 500, calorias_por_100g: 400 },
        { quantidade: 1, peso_unitario: 1000, calorias_por_100g: 100 },
      ],
      { pessoas: 2, kcalPessoaDia: 2500, diasReferencia: 7 },
    );

    expect(resumo.pesoTotalGramas).toBe(2000);
    expect(resumo.kcalTotal).toBe(5000);
    expect(resumo.kcalDiaGrupo).toBe(5000);
    expect(resumo.diasAutonomia).toBe(1);
    expect(resumo.litrosAgua).toBe(53);
    expect(resumo.metaKcal).toBe(35000);
  });

  it('normaliza entradas abaixo do mínimo ao calcular água', () => {
    expect(litrosAguaArredondadoParaCima(0, 0)).toBe(4);
  });

  it('calcula índice global de prontidão com pesos do planejamento', () => {
    const indice = calcularIndiceProntidao({
      checklistMarcados: 8,
      checklistTotal: 10,
      diasAutonomiaAlimentos: 7,
      diasReferencia: 7,
      documentosProtegidos: 1,
      documentosNecessarios: 2,
      fichaSaudeCompleta: true,
    });

    expect(indice.percentual).toBe(82);
    expect(indice.alerta).toBe('bom');
    expect(indice.pilares.map((p) => p.chave)).toEqual([
      'checklist',
      'alimentos',
      'documentos',
      'saude',
    ]);
  });
});
