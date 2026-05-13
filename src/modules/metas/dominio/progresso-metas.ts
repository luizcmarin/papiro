import type { MetaRow } from '../dados/types.js';

export type StatusPrazoMeta = 'sem_prazo' | 'em_dia' | 'vence_em_breve' | 'vencida' | 'concluida';

export function percentualMeta(meta: Pick<MetaRow, 'progresso_atual' | 'progresso_alvo'>): number {
  if (meta.progresso_alvo <= 0) return 0;
  return Math.round(Math.min(1, Math.max(0, meta.progresso_atual / meta.progresso_alvo)) * 100);
}

export function classificarPrazoMeta(
  meta: Pick<MetaRow, 'prazo_final' | 'esta_concluida'>,
  agoraMs = Date.now(),
): StatusPrazoMeta {
  if (meta.esta_concluida !== 0) return 'concluida';
  if (meta.prazo_final <= 0) return 'sem_prazo';
  if (meta.prazo_final < agoraMs) return 'vencida';
  const dias = (meta.prazo_final - agoraMs) / 86_400_000;
  return dias <= 7 ? 'vence_em_breve' : 'em_dia';
}

export function sugerirItemMetaModulo(ativoNome: string): string {
  const normalizado = ativoNome.trim().toLowerCase();
  if (normalizado.includes('finance')) return 'Reduzir despesas ou reservar valor mensal';
  if (normalizado.includes('minist')) return 'Acompanhar horas, estudos e revisitas';
  if (normalizado.includes('estudo')) return 'Completar sessões de foco e registrar pérolas';
  if (normalizado.includes('prepara')) return 'Elevar índice de prontidão familiar';
  return 'Definir alvo simples e mensurável';
}

