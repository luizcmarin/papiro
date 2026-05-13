export const MS_POR_DIA = 24 * 60 * 60 * 1000;

const DATA_INPUT_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
const ANO_MES_INPUT_RE = /^(\d{4})-(\d{2})$/;

export interface IntervaloMs {
  min: number;
  maxEx: number;
}

export interface LinhaComVencimento {
  data_vencimento: number;
}

export interface ItensPorVencimento<TItem> {
  vencidos: TItem[];
  aVencer: TItem[];
}

export function parseDataInputUtcMs(valor: string): number | null {
  const partes = DATA_INPUT_RE.exec(valor.trim());
  if (!partes) return null;

  const timestamp = Date.UTC(
    Number(partes[1]),
    Number(partes[2]) - 1,
    Number(partes[3]),
    12,
    0,
    0,
    0,
  );
  return Number.isNaN(timestamp) ? null : timestamp;
}

export function formatarDataInputUtc(ms: number | null | undefined): string {
  if (!ms || ms <= 0) return '';

  const data = new Date(ms);
  return `${data.getUTCFullYear()}-${String(data.getUTCMonth() + 1).padStart(2, '0')}-${String(
    data.getUTCDate(),
  ).padStart(2, '0')}`;
}

export function formatarDataInputOuTraco(ms: number | null | undefined): string {
  return formatarDataInputUtc(ms) || '-';
}

export function intervaloMesUtc(ano: number, mesIndiceZero: number): IntervaloMs | null {
  if (!Number.isInteger(ano) || !Number.isInteger(mesIndiceZero) || mesIndiceZero < 0 || mesIndiceZero > 11) {
    return null;
  }

  return {
    min: Date.UTC(ano, mesIndiceZero, 1, 0, 0, 0, 0),
    maxEx: Date.UTC(ano, mesIndiceZero + 1, 1, 0, 0, 0, 0),
  };
}

export function intervaloMesInputUtc(anoMes: string): IntervaloMs | null {
  const partes = ANO_MES_INPUT_RE.exec(anoMes.trim());
  if (!partes) return null;

  return intervaloMesUtc(Number(partes[1]), Number(partes[2]) - 1);
}

export function intervaloMesLocalAtualUtc(referencia = new Date()): IntervaloMs {
  return intervaloMesUtc(referencia.getFullYear(), referencia.getMonth()) as IntervaloMs;
}

export function separarPorVencimento<TItem extends LinhaComVencimento>(
  itens: TItem[],
  agoraMs: number,
  janelaDias: number,
): ItensPorVencimento<TItem> {
  const limiteMs = agoraMs + Math.max(0, janelaDias) * MS_POR_DIA;

  return {
    vencidos: itens.filter((item) => item.data_vencimento > 0 && item.data_vencimento < agoraMs),
    aVencer: itens.filter((item) => item.data_vencimento >= agoraMs && item.data_vencimento <= limiteMs),
  };
}
