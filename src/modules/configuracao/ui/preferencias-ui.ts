/** Preferências de UI (idioma stub); chave estável no `localStorage`. */
export const CHAVE_IDIOMA_UI = 'papiro-idioma-ui';

export function obterCodigoIdiomaPreferidoArmazenado(): string {
  return localStorage.getItem(CHAVE_IDIOMA_UI) ?? 'pt-BR';
}
