export const KCAL_MINIMAS_PESSOA_DIA = 2100;
export const DIAS_REFERENCIA_PRONTIDAO = 7;
export const DIAS_ALERTA_VENCIMENTO = 7;
export const LITROS_AGUA_POR_PESSOA_DIA = 3.785;

export interface LinhaReservaAlimento {
  quantidade: number;
  peso_unitario: number;
  calorias_por_100g: number;
}

export interface OpcoesResumoReserva {
  pessoas: number;
  kcalPessoaDia: number;
  diasReferencia: number;
}

export interface ResumoReserva {
  pesoTotalGramas: number;
  kcalTotal: number;
  kcalDiaGrupo: number;
  diasAutonomia: number;
  litrosAgua: number;
  metaKcal: number;
}

export interface EntradaIndiceProntidao {
  checklistMarcados: number;
  checklistTotal: number;
  diasAutonomiaAlimentos: number;
  diasReferencia: number;
  documentosProtegidos: number;
  documentosNecessarios: number;
  fichaSaudeCompleta: boolean;
}

export interface PilarIndiceProntidao {
  chave: 'checklist' | 'alimentos' | 'documentos' | 'saude';
  percentual: number;
  peso: number;
  contribuicao: number;
}

export interface IndiceProntidao {
  percentual: number;
  pilares: PilarIndiceProntidao[];
  alerta: 'baixo' | 'atencao' | 'bom';
}

export function pesoTotalGramas(linha: LinhaReservaAlimento): number {
  return linha.quantidade * linha.peso_unitario;
}

export function kcalTotal(linha: LinhaReservaAlimento): number {
  return (pesoTotalGramas(linha) * linha.calorias_por_100g) / 100;
}

export function litrosAguaArredondadoParaCima(pessoas: number, dias: number): number {
  return Math.ceil(Math.max(1, pessoas) * Math.max(1, dias) * LITROS_AGUA_POR_PESSOA_DIA);
}

export function calcularResumoReserva(
  estoque: LinhaReservaAlimento[],
  opcoes: OpcoesResumoReserva,
): ResumoReserva {
  const pessoas = Math.max(1, opcoes.pessoas);
  const kcalPessoaDia = Math.max(1, opcoes.kcalPessoaDia);
  const diasReferencia = Math.max(1, opcoes.diasReferencia);
  const pesoTotal = estoque.reduce((total, linha) => total + pesoTotalGramas(linha), 0);
  const kcalEstoque = estoque.reduce((total, linha) => total + kcalTotal(linha), 0);
  const kcalDiaGrupo = pessoas * kcalPessoaDia;

  return {
    pesoTotalGramas: pesoTotal,
    kcalTotal: kcalEstoque,
    kcalDiaGrupo,
    diasAutonomia: kcalEstoque / kcalDiaGrupo,
    litrosAgua: litrosAguaArredondadoParaCima(pessoas, diasReferencia),
    metaKcal: pessoas * diasReferencia * kcalPessoaDia,
  };
}

function proporcao(atual: number, alvo: number): number {
  if (!Number.isFinite(atual) || !Number.isFinite(alvo) || alvo <= 0) return 0;
  return Math.min(1, Math.max(0, atual / alvo));
}

export function calcularIndiceProntidao(entrada: EntradaIndiceProntidao): IndiceProntidao {
  const pilaresBase: Array<Omit<PilarIndiceProntidao, 'contribuicao'>> = [
    {
      chave: 'checklist',
      percentual: proporcao(entrada.checklistMarcados, entrada.checklistTotal),
      peso: 0.4,
    },
    {
      chave: 'alimentos',
      percentual: proporcao(entrada.diasAutonomiaAlimentos, entrada.diasReferencia),
      peso: 0.3,
    },
    {
      chave: 'documentos',
      percentual: proporcao(entrada.documentosProtegidos, entrada.documentosNecessarios),
      peso: 0.2,
    },
    {
      chave: 'saude',
      percentual: entrada.fichaSaudeCompleta ? 1 : 0,
      peso: 0.1,
    },
  ];
  const pilares: PilarIndiceProntidao[] = pilaresBase.map((pilar) => ({
    ...pilar,
    contribuicao: pilar.percentual * pilar.peso,
  }));

  const percentual = Math.round(pilares.reduce((total, pilar) => total + pilar.contribuicao, 0) * 100);
  return {
    percentual,
    pilares,
    alerta: percentual < 40 ? 'baixo' : percentual < 75 ? 'atencao' : 'bom',
  };
}
