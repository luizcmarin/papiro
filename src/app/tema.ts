const CHAVE_ARMAZENAMENTO = 'papiro-tema-visual';

export type TemaVisual = 'claro' | 'breu';

export function obterTemaPreferido(): TemaVisual {
  const gravado = localStorage.getItem(CHAVE_ARMAZENAMENTO);
  if (gravado === 'breu' || gravado === 'claro') {
    return gravado;
  }
  return globalThis.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'breu' : 'claro';
}

export function aplicarTemaNoDocumento(tema: TemaVisual): void {
  const raiz = document.documentElement;
  raiz.classList.remove('wa-light', 'wa-dark');
  raiz.classList.add(tema === 'breu' ? 'wa-dark' : 'wa-light');
}

export function guardarTemaPreferido(tema: TemaVisual): void {
  localStorage.setItem(CHAVE_ARMAZENAMENTO, tema);
}

export function alternarTemaBreu(): TemaVisual {
  const atualBreu = document.documentElement.classList.contains('wa-dark');
  const proximo: TemaVisual = atualBreu ? 'claro' : 'breu';
  aplicarTemaNoDocumento(proximo);
  guardarTemaPreferido(proximo);
  return proximo;
}

export function inicializarTemaDoArmazenamento(): void {
  aplicarTemaNoDocumento(obterTemaPreferido());
}
