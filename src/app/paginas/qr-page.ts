import QRCode from 'qrcode';

import { obterTextosQr } from '../../modules/qr/ui/textos-qr.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { criarCampoTexto } from '../ui/form.js';
import { criarCardUi, criarGrid, criarPaginaUi, criarStack } from '../ui/layout.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

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
    definirTituloDocumentoApp(tm.tituloPagina, loc);

    const pagina = criarPaginaUi({ titulo: tm.tituloPagina, subtitulo: tm.descricao });
    const campoConteudo = criarCampoTexto({ rotulo: tm.rotuloEntrada, placeholder: tm.hintEntrada, linhas: 8 });
    campoConteudo.input.setAttribute('spellcheck', 'false');

    const aSvg = document.createElement('a');
    aSvg.className = 'shell__acao-secundaria-botao';
    aSvg.target = '_blank';
    aSvg.rel = 'noopener noreferrer';

    const aPng = document.createElement('a');
    aPng.className = 'shell__acao-secundaria-botao';

    const acoes = document.createElement('div');
    acoes.className = 'shell__acoes';
    acoes.append(aSvg, aPng);

    const img = document.createElement('img');
    img.width = 280;
    img.height = 280;
    img.alt = '';
    img.setAttribute('aria-hidden', 'true');

    const subImg = document.createElement('p');
    subImg.className = 'shell__sub shell__texto-centro';

    const erro = document.createElement('p');
    erro.className = 'shell__sub';
    erro.hidden = true;
    erro.setAttribute('role', 'alert');

    const preview = criarStack(img, subImg, acoes);
    preview.classList.add('shell__qr-preview');

    const cardEntrada = criarCardUi({ titulo: tm.rotuloEntrada, conteudo: [campoConteudo.elemento] });
    const cardPreview = criarCardUi({ titulo: tm.tituloPagina, conteudo: [erro, preview] });
    pagina.corpo.append(criarGrid(cardEntrada.cartao, cardPreview.cartao));
    container.replaceChildren(pagina.raiz);

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
      const texto = campoConteudo.valor();
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
      definirTituloDocumentoApp(tm.tituloPagina, lc);
      pagina.titulo.textContent = tm.tituloPagina;
      pagina.subtitulo.textContent = tm.descricao;
      campoConteudo.definirRotulo(tm.rotuloEntrada);
      campoConteudo.definirPlaceholder(tm.hintEntrada);
      cardEntrada.titulo.textContent = tm.rotuloEntrada;
      cardPreview.titulo.textContent = tm.tituloPagina;
      subImg.textContent = campoConteudo.valor().length === 0 ? tm.vazio : tm.gerar;
      aSvg.textContent = tm.descarregarSvg;
      aPng.textContent = tm.descarregarPng;
      erro.textContent = tm.erroGerar;
    }

    aplicarTextos(tm);
    void atualizarQr();

    campoConteudo.input.addEventListener('input', agendarAtualizacao, { signal: sinal });

    registarAoLocaleAtualizado(() => {
      aplicarTextos(obterTextosQr(obterLocaleAtual()));
      void atualizarQr();
    }, sinal);
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default qrPagina;
