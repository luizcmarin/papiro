import { hrefParaRota, prefixoBaseUrl } from '../menu-rotas.js';

export type ParamsRota = Readonly<Record<string, string>>;

type EncaixeRota = {
  readonly testar: (pathNorm: string) => ParamsRota | null;
  readonly handler: (params: ParamsRota) => void;
};

const filaRotas: EncaixeRota[] = [];
let escutasRegistadas = false;

function normalizarPathAplicacao(path: string): string {
  const p = path.trim() || '/';
  if (p.length > 1 && p.endsWith('/')) {
    return p.replace(/\/+$/, '');
  }
  return p;
}

/** Converte `location.pathname` (com prefixo de deploy) no caminho lógico da SPA. */
export function pathAplicacaoDePathname(pathnameBruto: string): string {
  let p = decodeURI(pathnameBruto);
  const base = prefixoBaseUrl();
  if (base) {
    if (p === base) {
      p = '/';
    } else if (p.startsWith(`${base}/`)) {
      p = p.slice(base.length);
    } else {
      return normalizarPathAplicacao(p);
    }
  }
  if (!p.startsWith('/')) {
    p = `/${p}`;
  }
  return normalizarPathAplicacao(p);
}

/**
 * Caminho lógico da SPA (sem prefixo Vite/GitHub Pages), sempre começando por `/`.
 */
export function pathnameDaAplicacao(): string {
  return pathAplicacaoDePathname(window.location.pathname);
}

function compilarPadrao(padrao: string): (pathNorm: string) => ParamsRota | null {
  if (padrao === '*') {
    return () => ({});
  }
  const segmentos = padrao.split('/').filter((s) => s.length > 0);
  const chaves: string[] = [];
  let src = '^';
  for (let i = 0; i < segmentos.length; i++) {
    src += i === 0 ? '\\/' : '\\/';
    const seg = segmentos[i]!;
    if (seg.startsWith(':')) {
      chaves.push(seg.slice(1));
      src += '([^/]+)';
    } else {
      src += seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
  }
  src += '\\/?$';
  const re = new RegExp(src);
  return (pathNorm: string): ParamsRota | null => {
    const m = pathNorm.match(re);
    if (!m) return null;
    const out: Record<string, string> = {};
    for (let k = 0; k < chaves.length; k++) {
      out[chaves[k]!] = m[k + 1] ?? '';
    }
    return out;
  };
}

/** Encaixa um caminho da aplicação num padrão de rota (útil em testes). */
export function encaixarPadraoRota(padrao: string, pathAplicacao: string): ParamsRota | null {
  return compilarPadrao(padrao)(normalizarPathAplicacao(pathAplicacao));
}

export function limparRotasParaTeste(): void {
  filaRotas.length = 0;
  escutasRegistadas = false;
}

export function registarRota(padrao: string, handler: (params: ParamsRota) => void): void {
  filaRotas.push({ testar: compilarPadrao(padrao), handler });
}

export function despacharPathAtual(): void {
  const pathApp = pathnameDaAplicacao();
  for (const r of filaRotas) {
    const params = r.testar(pathApp);
    if (params !== null) {
      r.handler(params);
      return;
    }
  }
}

function extrairPartesDestino(destino: string): { pathApp: string; suffixo: string } {
  const hashIdx = destino.indexOf('#');
  const antesHash = hashIdx >= 0 ? destino.slice(0, hashIdx) : destino;
  const hash = hashIdx >= 0 ? destino.slice(hashIdx) : '';
  const qIdx = antesHash.indexOf('?');
  const pathOnly = qIdx >= 0 ? antesHash.slice(0, qIdx) : antesHash;
  const search = qIdx >= 0 ? antesHash.slice(qIdx) : '';
  const pathApp = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`;
  return { pathApp: normalizarPathAplicacao(pathApp), suffixo: `${search}${hash}` };
}

/**
 * Navegação programática (History API), alinhada a cliques em `<a href>` internos.
 * `destino` usa caminho da aplicação (ex.: `/anotacoes`, `/receitas?x=1`).
 */
export function navegar(destino: string, opcoes?: { replace?: boolean }): void {
  const { pathApp, suffixo } = extrairPartesDestino(destino);
  const pathnameComBase = hrefParaRota(pathApp);
  const alvo = `${pathnameComBase}${suffixo}`;
  if (opcoes?.replace) {
    window.history.replaceState(null, '', alvo);
  } else {
    window.history.pushState(null, '', alvo);
  }
  despacharPathAtual();
}

function aoClicarEmLink(ev: MouseEvent): void {
  if (
    ev.defaultPrevented ||
    ev.button !== 0 ||
    ev.metaKey ||
    ev.ctrlKey ||
    ev.shiftKey ||
    ev.altKey
  ) {
    return;
  }
  const alvo = ev.composedPath()[0];
  const a = alvo instanceof Element ? alvo.closest('a[href]') : null;
  if (!(a instanceof HTMLAnchorElement)) return;
  if (a.target && a.target !== '' && a.target !== '_self') return;
  if (a.hasAttribute('download')) return;
  const rel = a.getAttribute('rel');
  if (rel?.split(/\s+/).includes('external')) return;

  let url: URL;
  try {
    url = new URL(a.href);
  } catch {
    return;
  }
  if (url.origin !== window.location.origin) return;

  if (url.href === window.location.href) {
    ev.preventDefault();
    despacharPathAtual();
    return;
  }

  const base = prefixoBaseUrl();
  if (base) {
    const p = url.pathname;
    if (p !== base && !p.startsWith(`${base}/`)) {
      return;
    }
  }

  ev.preventDefault();
  const pathNorm = pathAplicacaoDePathname(url.pathname);
  navegar(`${pathNorm}${url.search}${url.hash}`, { replace: false });
}

export function iniciarHistoricoPopstateEClicks(): void {
  if (escutasRegistadas) return;
  escutasRegistadas = true;
  window.addEventListener('popstate', () => {
    despacharPathAtual();
  });
  document.addEventListener('click', aoClicarEmLink, { capture: true });
}
