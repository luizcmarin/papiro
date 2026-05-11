import QRCode from 'qrcode';

import { obterTextosQr } from '../../modules/qr/ui/textos-qr.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

const opPng = {
  errorCorrectionLevel: 'M' as const,
  width: 280,
  margin: 2,
  color: { dark: '#1a1a2eff', light: '#ffffffff' },
};

function refUrlRevogar(href: string): void {
  URL.revokeObjectURL(href);
}

const qrPagina: PaginaMontavel = {
  mount(container, sinal) {
    const loc = obterLocaleAtual();
    let tm = obterTextosQr(loc);
    document.title = `${tm.tituloPagina} — ${obterTextosConfig(loc).appNomeTituloDoc}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const h1 = document.createElement('h1');
    h1.className = 'shell__titulo';
    const desc = document.createElement('p');
    desc.className = 'shell__sub';

    const grelha = document.createElement('div');
    grelha.style.display = 'grid';
    grelha.style.gap = 'var(--wa-space-l, 1.5rem)';
    grelha.style.gridTemplateColumns = 'minmax(220px, 1fr) auto';
    grelha.style.alignItems = 'start';

    const colEsq = document.createElement('div');
    colEsq.style.display = 'flex';
    colEsq.style.flexDirection = 'column';
    colEsq.style.gap = 'var(--wa-space-m, 1rem)';

    const rot = document.createElement('label');
    rot.className = 'shell__campo';
    const sp = document.createElement('span');
    sp.className = 'shell__etiqueta';
    const aria = document.createElement('textarea');
    aria.rows = 8;
    aria.className = 'shell__textarea';
    aria.setAttribute('spellcheck', 'false');
    rot.append(sp, aria);

    const acoes = document.createElement('div');
    acoes.style.display = 'flex';
    acoes.style.flexWrap = 'wrap';
    acoes.style.gap = 'var(--wa-space-m, 1rem)';

    const aSvg = document.createElement('a');
    aSvg.className = 'shell__acao-secundaria-botao';
    aSvg.target = '_blank';
    aSvg.rel = 'noopener noreferrer';

    const aPng = document.createElement('a');
    aPng.className = 'shell__acao-secundaria-botao';

    acoes.append(aSvg, aPng);

    const colDir = document.createElement('div');
    colDir.style.display = 'flex';
    colDir.style.flexDirection = 'column';
    colDir.style.alignItems = 'center';
    colDir.style.gap = 'var(--wa-space-m, 1rem)';

    const img = document.createElement('img');
    img.width = 280;
    img.height = 280;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');

    const subImg = document.createElement('p');
    subImg.className = 'shell__sub';
    subImg.style.textAlign = 'center';

    const erro = document.createElement('p');
    erro.className = 'shell__sub';
    erro.hidden = true;
    erro.setAttribute('role', 'alert');

    colEsq.append(rot, acoes);
    colDir.append(img, subImg);
    grelha.append(colEsq, colDir);

    container.replaceChildren();
    barra.append(h1);
    container.append(barra, desc, erro, grelha);

    let revogacaoSvgUrl: string | null = null;

    let debounceTimer: number | undefined;
    sinal.addEventListener(
      'abort',
      () => {
        if (debounceTimer !== undefined) {
          window.clearTimeout(debounceTimer);
        }
        img.removeAttribute('src');
        if (revogacaoSvgUrl) {
          refUrlRevogar(revogacaoSvgUrl);
          revogacaoSvgUrl = null;
        }
      },
      { once: true },
    );

    async function atualizarQr(): Promise<void> {
      if (revogacaoSvgUrl) {
        refUrlRevogar(revogacaoSvgUrl);
        revogacaoSvgUrl = null;
      }
      const texto = aria.value.trim();
      const tloc = obterTextosQr(obterLocaleAtual());
      if (texto.length === 0) {
        erro.hidden = true;
        img.removeAttribute('src');
        subImg.textContent = tloc.vazio;
        aSvg.removeAttribute('href');
        aPng.removeAttribute('href');
        return;
      }
      try {
        const png = await QRCode.toDataURL(texto, opPng);
        const svg = await QRCode.toString(texto, { type: 'svg', margin: 2, width: 280 });

        erro.hidden = true;
        img.src = png;
        subImg.textContent = tloc.gerar;

        revogacaoSvgUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
        aSvg.href = revogacaoSvgUrl;
        aSvg.download = 'papiro-qr.svg';

        aPng.href = png;
        aPng.download = 'papiro-qr.png';
      } catch {
        erro.hidden = false;
        erro.textContent = tloc.erroGerar;
        img.removeAttribute('src');
      }
    }

    function agendarAtualizacao(): void {
      if (debounceTimer !== undefined) {
        window.clearTimeout(debounceTimer);
      }
      debounceTimer = window.setTimeout(() => void atualizarQr(), 300);
    }

    function aplicarTextos(t: typeof tm): void {
      tm = t;
      const lc = obterLocaleAtual();
      const cfg = obterTextosConfig(lc);
      document.title = `${tm.tituloPagina} — ${cfg.appNomeTituloDoc}`;
      h1.textContent = tm.tituloPagina;
      desc.textContent = tm.descricao;
      sp.textContent = tm.rotuloEntrada;
      aria.placeholder = tm.hintEntrada;
      subImg.textContent = aria.value.trim().length === 0 ? tm.vazio : tm.gerar;
      aSvg.textContent = tm.descarregarSvg;
      aPng.textContent = tm.descarregarPng;
      erro.textContent = tm.erroGerar;
    }

    aplicarTextos(tm);
    void atualizarQr();

    aria.addEventListener('input', agendarAtualizacao, { signal: sinal });

    registarAoLocaleAtualizado(() => {
      aplicarTextos(obterTextosQr(obterLocaleAtual()));
      void atualizarQr();
    }, sinal);
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default qrPagina;
