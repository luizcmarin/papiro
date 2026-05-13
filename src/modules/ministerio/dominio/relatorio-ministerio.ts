import type { RelatorioMinisterioInput } from '../dados/types.js';

export type StatusMetaMinisterio = 'sem_meta' | 'abaixo' | 'em_andamento' | 'concluida';

export function calcularAnoServico(data: Date): number {
  const ano = data.getFullYear();
  return data.getMonth() >= 8 ? ano + 1 : ano;
}

export function metaPadraoHoras(tipoPublicador: string): number {
  const normalizado = tipoPublicador.trim().toLowerCase();
  if (normalizado.includes('pioneiro auxiliar')) return 30;
  if (normalizado.includes('pioneiro regular')) return 50;
  return 0;
}

export function classificarMetaHoras(horas: number, metaHoras: number): StatusMetaMinisterio {
  if (metaHoras <= 0) return 'sem_meta';
  const proporcao = horas / metaHoras;
  if (proporcao >= 1) return 'concluida';
  if (proporcao >= 0.6) return 'em_andamento';
  return 'abaixo';
}

export function montarRelatorioMinisterioCompartilhavel(relatorio: RelatorioMinisterioInput): string {
  const partes = [
    `Relatório ${String(relatorio.mes).padStart(2, '0')}/${relatorio.ano}`,
    `Horas: ${relatorio.horas}`,
    `Estudos bíblicos: ${relatorio.estudos}`,
  ];
  if (relatorio.participacao > 0) partes.push('Participou no ministério este mês.');
  if (relatorio.notas_publicacoes.trim()) partes.push(`Notas: ${relatorio.notas_publicacoes.trim()}`);
  return partes.join('\n');
}

