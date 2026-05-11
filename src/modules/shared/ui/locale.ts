import { obterCodigoIdiomaPreferidoArmazenado } from '../../configuracao/ui/preferencias-ui.js';

export type LocaleId = 'pt-BR' | 'en';

/** Disparado após gravar novo idioma em Configurações (shell pode atualizar rótulos). */
export const EVENTO_LOCALE_ATUALIZADO = 'papiro:locale-atualizado';

export function obterLocaleAtual(): LocaleId {
  const codigo = obterCodigoIdiomaPreferidoArmazenado().toLowerCase();
  return codigo.startsWith('en') ? 'en' : 'pt-BR';
}

/** Regista callback para cada `EVENTO_LOCALE_ATUALIZADO`; remove no `abort` da página. */
export function registarAoLocaleAtualizado(handler: () => void, sinal: AbortSignal): void {
  if (sinal.aborted) return;
  const ao = (): void => {
    handler();
  };
  window.addEventListener(EVENTO_LOCALE_ATUALIZADO, ao);
  sinal.addEventListener(
    'abort',
    () => {
      window.removeEventListener(EVENTO_LOCALE_ATUALIZADO, ao);
    },
    { once: true },
  );
}
