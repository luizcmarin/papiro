import { sanitizarHtmlConteudoUtilizador } from '../../../infra/sanitize.js';

function escaparTextoParaHtml(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

/**
 * Transforma texto em parágrafos simples (`\n\n`) e sanitiza ao subconjunto TipTap/HTML permitido.
 */
export function textoPlanoUsuarioParaHtmlSeguro(plain: string): string {
  const t = plain.trim();
  if (t === '') return sanitizarHtmlConteudoUtilizador('<p></p>');
  const blocos = t.split(/\n{2,}/u);
  const html = blocos
    .map((b) => {
      const linhas = b.split('\n').map((ln) => escaparTextoParaHtml(ln));
      const inner = linhas.join('<br>');
      return `<p>${inner}</p>`;
    })
    .join('');
  return sanitizarHtmlConteudoUtilizador(html);
}
