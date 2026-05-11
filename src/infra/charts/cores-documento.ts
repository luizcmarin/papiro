/**
 * Cores efectivas para ECharts — lê tokens Web Awesome já aplicados ao documento.
 */
export interface CoresGraficoPapiro {
  textoPrincipal: string;
  textoSuave: string;
  linhaGrade: string;
  destaque: string;
  superficieCarta: string;
}

export function lerCoresGraficoDoDocumento(alvo: HTMLElement = document.documentElement): CoresGraficoPapiro {
  const cs = getComputedStyle(alvo);
  const ler = (nome: string, fallback: string): string => {
    const v = cs.getPropertyValue(nome).trim();
    return v.length > 0 ? v : fallback;
  };
  return {
    textoPrincipal: ler('--wa-color-text-normal', '#1a2332'),
    textoSuave: ler('--wa-color-text-quiet', '#64748b'),
    linhaGrade: ler('--wa-color-surface-border', '#cbd5e1'),
    destaque: ler('--wa-color-accent-fill-normal', '#1565c0'),
    superficieCarta: ler('--wa-color-surface-raised-normal', '#ffffff'),
  };
}
