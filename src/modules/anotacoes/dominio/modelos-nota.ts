import { sanitizarHtmlConteudoUtilizador } from '../../../infra/sanitize.js';
import type { LocaleId } from '../../shared/ui/locale.js';

export const IDS_MODELO_NOTA = [
  'livre',
  'pregacao_publica',
  'estudo_congregacao',
  'reuniao_meio_semana',
  'reflexao_pessoal',
] as const;

export type IdModeloNota = (typeof IDS_MODELO_NOTA)[number];

const ROTULOS: Record<IdModeloNota, Record<LocaleId, string>> = {
  livre: { 'pt-BR': 'Livre', en: 'Blank' },
  pregacao_publica: { 'pt-BR': 'Discurso público', en: 'Public talk' },
  estudo_congregacao: {
    'pt-BR': 'Estudo da congregação',
    en: 'Congregation Bible study',
  },
  reuniao_meio_semana: { 'pt-BR': 'Reunião meio de semana', en: 'Midweek meeting' },
  reflexao_pessoal: { 'pt-BR': 'Reflexão pessoal', en: 'Personal reflection' },
};

/** HTML inicial por modelo — só vias sanitização antes de entrar no editor. */
const ESQUELETO_PT: Record<IdModeloNota, string> = {
  livre: '<p></p>',
  pregacao_publica:
    '<h2>Tema</h2><p></p><h2>Introdução</h2><p></p><h2>Ideias principais</h2><ul><li></li></ul><h2>Aplicação</h2><p></p><h2>Conclusão</h2><p></p>',
  estudo_congregacao:
    '<h2>Faixa etária / lição</h2><p></p><h2>Pontos-chave da lição</h2><ul><li></li></ul><h2>O que destacar aos estudantes</h2><p></p>',
  reuniao_meio_semana:
    '<h2>Texto-base</h2><p></p><h2>Ideias para o esboço</h2><ul><li></li></ul><h2>Ilustrações</h2><p></p>',
  reflexao_pessoal:
    '<h2>Leituras / tema</h2><p></p><h2>Minhas observações</h2><ul><li></li></ul><h2>Objetivo espiritual</h2><p></p>',
};

const ESQUELETO_EN: Record<IdModeloNota, string> = {
  livre: '<p></p>',
  pregacao_publica:
    '<h2>Theme</h2><p></p><h2>Introduction</h2><p></p><h2>Main ideas</h2><ul><li></li></ul><h2>Application</h2><p></p><h2>Conclusion</h2><p></p>',
  estudo_congregacao:
    '<h2>Age group / lesson</h2><p></p><h2>Key points</h2><ul><li></li></ul><h2>Takeaways for students</h2><p></p>',
  reuniao_meio_semana:
    '<h2>Theme text</h2><p></p><h2>Outline ideas</h2><ul><li></li></ul><h2>Illustrations</h2><p></p>',
  reflexao_pessoal:
    '<h2>Reading / topic</h2><p></p><h2>My notes</h2><ul><li></li></ul><h2>Spiritual goal</h2><p></p>',
};

export function rotuloModeloNotaParaUi(id: string, locale: LocaleId): string {
  if (IDS_MODELO_NOTA.includes(id as IdModeloNota)) {
    const k = id as IdModeloNota;
    return ROTULOS[k][locale];
  }
  return id;
}

/** HTML seguro já passado pela mesma sanitização da gravação. */
export function esqueletoHtmlSanitizadoModelo(id: string, locale: LocaleId): string {
  if (!IDS_MODELO_NOTA.includes(id as IdModeloNota)) {
    return sanitizarHtmlConteudoUtilizador('<p></p>');
  }
  const k = id as IdModeloNota;
  const cru = locale === 'en' ? ESQUELETO_EN[k] : ESQUELETO_PT[k];
  return sanitizarHtmlConteudoUtilizador(cru);
}
