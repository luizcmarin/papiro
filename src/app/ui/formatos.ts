import type { LocaleId } from '../../modules/shared/ui/locale.js';

const nfMoedaPorChave = new Map<string, Intl.NumberFormat>();

function chaveFormatoMoeda(localeId: LocaleId, maximumFractionDigits: number): string {
  return `${localeId}\0${String(maximumFractionDigits)}`;
}

/** Moeda BRL ou USD conforme o locale; `maximumFractionDigits` por omissão 2 (transações). */
export function formatarMoeda(valor: number, localeId: LocaleId, maximumFractionDigits = 2): string {
  const chave = chaveFormatoMoeda(localeId, maximumFractionDigits);
  let nf = nfMoedaPorChave.get(chave);
  if (!nf) {
    nf = new Intl.NumberFormat(localeId === 'en' ? 'en-US' : 'pt-BR', {
      style: 'currency',
      currency: localeId === 'en' ? 'USD' : 'BRL',
      maximumFractionDigits,
    });
    nfMoedaPorChave.set(chave, nf);
  }
  return nf.format(valor);
}

export function formatarPesoGramas(gramas: number): string {
  if (gramas >= 1000) {
    return `${(gramas / 1000).toLocaleString(undefined, { maximumFractionDigits: 1 })} kg`;
  }

  return `${gramas.toLocaleString()} g`;
}
