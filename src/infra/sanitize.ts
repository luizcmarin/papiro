import DOMPurify from 'dompurify';

let hooksSanitizaImagemInstalados = false;

/** Permite apenas `data:image/webp` e `data:image/svg+xml` em Base64 (contrato TipTap/offline-first). */
function instalarHooksImagemStrict(): void {
  if (hooksSanitizaImagemInstalados || typeof window === 'undefined') {
    return;
  }
  hooksSanitizaImagemInstalados = true;
  DOMPurify.addHook('uponSanitizeAttribute', (node, dados) => {
    if (!(node instanceof HTMLElement) || dados.attrName !== 'src') return;
    if (node.tagName !== 'IMG') return;
    const v = dados.attrValue.trim();
    const compacto = v.replace(/\s+/g, '');
    const okWebp = /^data:image\/webp;base64,.+/i.test(compacto);
    const okSvg = /^data:image\/svg\+xml;base64,.+/i.test(compacto);
    if (!(okWebp || okSvg)) {
      dados.keepAttr = false;
    }
  });
}

const TAGS_HTML_TIPTAP_PADRAO: string[] = [
  'p',
  'strong',
  'b',
  'em',
  'i',
  'u',
  's',
  'span',
  'br',
  'h1',
  'h2',
  'h3',
  'ul',
  'ol',
  'li',
  'blockquote',
  'code',
  'pre',
  'img',
  'hr',
];

const ATRIBUTOS_PERM: string[] = ['class', 'src', 'alt', 'title', 'width', 'height'];

/**
 * HTML destinado ao **editor** TipTap ou leitura: alinhado ao subconjunto que o StarterKit + Image emitem.
 * Usar sempre antes de gravar ou de `innerHTML` fora do editor de texto.
 */
export function sanitizarHtmlConteudoUtilizador(fragmentoHtml: string): string {
  instalarHooksImagemStrict();
  return DOMPurify.sanitize(fragmentoHtml, {
    ALLOWED_TAGS: TAGS_HTML_TIPTAP_PADRAO,
    ALLOWED_ATTR: ATRIBUTOS_PERM,
    ALLOW_DATA_ATTR: false,
    USE_PROFILES: { html: true },
    RETURN_TRUSTED_TYPE: false,
    KEEP_CONTENT: false,
  });
}
