import '@awesome.me/webawesome/dist/components/button/button.js';

import page from 'page';

import { sanitizarHtmlConteudoUtilizador } from '../../infra/sanitize.js';
import * as repo from '../../modules/anotacoes/dados/repositorio.js';
import type { AnotacaoDetalheRow, PastaRow } from '../../modules/anotacoes/dados/types.js';
import {
  IDS_MODELO_NOTA,
  esqueletoHtmlSanitizadoModelo,
  rotuloModeloNotaParaUi,
  type IdModeloNota,
} from '../../modules/anotacoes/dominio/modelos-nota.js';
import { arquivoImagemParaDataUriAutorizada } from '../../modules/anotacoes/ui/imagem-data-uri.js';
import { obterTextosAnotacao } from '../../modules/anotacoes/ui/textos-anotacao.js';
import type { FabricaTipTapEditorResultado } from '../../modules/anotacoes/ui/tiptap-editor.js';
import { fabricarTipTapEditor } from '../../modules/anotacoes/ui/tiptap-editor.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { hrefParaRota } from '../menu-rotas.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

export interface OpcoesPaginaEditorAnotacao {
  modo: 'novo' | 'editar';
  idExistente?: number | undefined;
}

function modeloGuardadoOuLivre(valorRaw: string | undefined): string {
  if (valorRaw && IDS_MODELO_NOTA.includes(valorRaw as IdModeloNota)) {
    return valorRaw;
  }
  return 'livre';
}

export function criarPaginaEditorAnotacao(opcoes: OpcoesPaginaEditorAnotacao): PaginaMontavel {
  let recursoTipTap: FabricaTipTapEditorResultado | null = null;
  /** Elemento de leitura (para sair do ecrã inteiro ao desmontar). */
  let alvoFullscreen: HTMLElement | null = null;
  /** Botão texto ecrã inteiro (referência ao nó atual). */
  let btnFullscreenRef: HTMLButtonElement | null = null;
  let handlerFullscreen: (() => void) | null = null;

  return {
    async mount(container, sinal) {
      const loc = obterLocaleAtual();
      const t = obterTextosAnotacao(loc);
      const tc = obterTextosConfig(loc);

      recursoTipTap?.destruir();
      recursoTipTap = null;
      alvoFullscreen = null;
      btnFullscreenRef = null;

      let idPersistente: number | null = opcoes.modo === 'editar' ? (opcoes.idExistente ?? null) : null;
      if (opcoes.modo === 'editar' && (idPersistente === null || !Number.isFinite(idPersistente))) {
        document.title = `${t.erroIdInvalido} — ${tc.appNomeTituloDoc}`;
        container.replaceChildren();
        const e = document.createElement('p');
        e.className = 'shell__sub';
        e.textContent = t.erroCarregar;
        const voltar = document.createElement('a');
        voltar.href = hrefParaRota('/anotacoes');
        voltar.className = 'shell__acao-secundaria';
        voltar.textContent = t.voltarLista;
        container.append(e, voltar);
        return;
      }

      let detalhe: AnotacaoDetalheRow | null = null;
      if (idPersistente !== null) {
        detalhe = await repo.obterAnotacaoComConteudo(idPersistente);
        if (!detalhe) {
          document.title = `${t.erroCarregar} — ${tc.appNomeTituloDoc}`;
          container.replaceChildren();
          const e = document.createElement('p');
          e.className = 'shell__sub';
          e.textContent = t.erroCarregar;
          const voltar = document.createElement('a');
          voltar.href = hrefParaRota('/anotacoes');
          voltar.className = 'shell__acao-secundaria';
          voltar.textContent = t.voltarLista;
          container.append(e, voltar);
          return;
        }
      }

      document.title =
        detalhe !== null
          ? `${detalhe.titulo.trim() || t.notaSemTituloFallback} — ${tc.appNomeTituloDoc}`
          : `${t.novaNota} — ${tc.appNomeTituloDoc}`;

      container.replaceChildren();

      const topo = document.createElement('div');
      topo.className = 'shell__barra-ficha';

      const linkVoltar = document.createElement('a');
      linkVoltar.href = hrefParaRota('/anotacoes');
      linkVoltar.className = 'shell__acao-secundaria';
      linkVoltar.textContent = t.voltarLista;

      const btnSalvar = document.createElement('button');
      btnSalvar.type = 'button';
      btnSalvar.className = 'shell__acao-primaria-botao';
      btnSalvar.textContent = t.salvar;

      const btnApresentacao = document.createElement('button');
      btnApresentacao.type = 'button';
      btnApresentacao.className = 'shell__acao-secundaria-botao';
      btnApresentacao.textContent = t.modoApresentacao;

      const btnApagar = document.createElement('button');
      btnApagar.type = 'button';
      btnApagar.className = 'shell__botao-perigo';
      btnApagar.textContent = t.apagar;
      btnApagar.hidden = idPersistente === null;

      topo.append(linkVoltar, btnSalvar, btnApresentacao, btnApagar);

      const rotuloTit = document.createElement('label');
      rotuloTit.className = 'shell__etiqueta';
      rotuloTit.textContent = t.tituloPlaceholder;
      const inputTitulo = document.createElement('input');
      inputTitulo.type = 'text';
      inputTitulo.className = 'shell__input-texto shell__campo-titulo';
      inputTitulo.placeholder = t.tituloPlaceholder;
      inputTitulo.value = detalhe?.titulo ?? '';

      const rotuloPasta = document.createElement('label');
      rotuloPasta.className = 'shell__etiqueta';
      rotuloPasta.textContent = t.pastaLabel;
      const pastaSel = document.createElement('select');
      pastaSel.className = 'shell__select';
      const semPasta = document.createElement('option');
      semPasta.value = '';
      semPasta.textContent = t.pastaNenhuma;
      pastaSel.append(semPasta);

      const pastasLista: PastaRow[] = await repo.listarPastas();
      for (const p of pastasLista) {
        const o = document.createElement('option');
        o.value = String(p.id);
        o.textContent = p.nome;
        pastaSel.append(o);
      }
      if (detalhe?.pasta_id !== null && detalhe?.pasta_id !== undefined) {
        pastaSel.value = String(detalhe.pasta_id);
      }

      const modeloGuardado =
        detalhe?.tipo_modelo && !IDS_MODELO_NOTA.includes(detalhe.tipo_modelo as IdModeloNota)
          ? detalhe.tipo_modelo
          : modeloGuardadoOuLivre(detalhe?.tipo_modelo);

      const rotuloMl = document.createElement('label');
      rotuloMl.className = 'shell__etiqueta';
      rotuloMl.textContent = t.modeloNotaLabel;
      const modeloSel = document.createElement('select');
      modeloSel.className = 'shell__select';
      for (const idMod of IDS_MODELO_NOTA) {
        const o = document.createElement('option');
        o.value = idMod;
        o.textContent = rotuloModeloNotaParaUi(idMod, loc);
        modeloSel.append(o);
      }
      if (detalhe?.tipo_modelo && !IDS_MODELO_NOTA.includes(detalhe.tipo_modelo as IdModeloNota)) {
        const ox = document.createElement('option');
        ox.value = detalhe.tipo_modelo;
        ox.textContent = detalhe.tipo_modelo;
        modeloSel.append(ox);
      }
      modeloSel.value =
        modeloGuardado && [...modeloSel.options].some((o) => o.value === modeloGuardado)
          ? modeloGuardado
          : 'livre';

      const btnAplicarModelo = document.createElement('button');
      btnAplicarModelo.type = 'button';
      btnAplicarModelo.className = 'shell__acao-secundaria-botao';
      btnAplicarModelo.textContent = t.aplicarEsqueleto;

      const rotuloEti = document.createElement('label');
      rotuloEti.className = 'shell__etiqueta';
      rotuloEti.textContent = t.etiquetasLabel;
      const ajudaEti = document.createElement('span');
      ajudaEti.className = 'shell__sub shell__hint';
      ajudaEti.textContent = t.etiquetasAjuda;
      const inputEtiquetas = document.createElement('input');
      inputEtiquetas.type = 'text';
      inputEtiquetas.className = 'shell__input-texto shell__campo-titulo';
      inputEtiquetas.placeholder = t.etiquetasAjuda;
      inputEtiquetas.value = detalhe?.etiquetas ?? '';

      const rotuloCkArq = document.createElement('label');
      rotuloCkArq.className = 'shell__checkbox-linha';
      const ckArquivada = document.createElement('input');
      ckArquivada.type = 'checkbox';
      ckArquivada.checked = detalhe ? detalhe.esta_arquivada === 1 : false;
      const txArquivada = document.createElement('span');
      txArquivada.textContent = t.arquivada;
      rotuloCkArq.append(ckArquivada, txArquivada);

      const rotuloCkPin = document.createElement('label');
      rotuloCkPin.className = 'shell__checkbox-linha';
      const ckFixada = document.createElement('input');
      ckFixada.type = 'checkbox';
      ckFixada.checked = detalhe ? detalhe.esta_fixada === 1 : false;
      const txFixada = document.createElement('span');
      txFixada.textContent = t.fixada;
      rotuloCkPin.append(ckFixada, txFixada);

      const ferramentas = document.createElement('div');
      ferramentas.className = 'shell__toolbar-editor';
      ferramentas.setAttribute('role', 'toolbar');
      ferramentas.setAttribute('aria-label', t.formatoToolbarAria);

      const entradaFicheiro = document.createElement('input');
      entradaFicheiro.type = 'file';
      entradaFicheiro.accept = 'image/png,image/jpeg,image/webp,image/svg+xml,.svg';
      entradaFicheiro.hidden = true;

      let modoLeitura = false;

      const hostEditor = document.createElement('div');
      hostEditor.className = 'shell__editor-host shell__tiptap';

      const apresentacao = document.createElement('div');
      apresentacao.className = 'shell__apresentacao shell__tiptap';
      apresentacao.hidden = true;
      alvoFullscreen = apresentacao;

      const htmlInicio = sanitizarHtmlConteudoUtilizador(detalhe?.conteudo ?? '<p></p>');
      recursoTipTap = fabricarTipTapEditor(hostEditor, htmlInicio);

      function atualizarTituloFullscreen(): void {
        if (!btnFullscreenRef || !apresentacao) return;
        const txFs = obterTextosAnotacao(obterLocaleAtual());
        btnFullscreenRef.textContent =
          document.fullscreenElement === apresentacao ? txFs.sairEcranInteiro : txFs.ecranInteiro;
      }

      handlerFullscreen = (): void => {
        atualizarTituloFullscreen();
      };
      document.addEventListener('fullscreenchange', handlerFullscreen);
      sinal.addEventListener(
        'abort',
        () => {
          if (handlerFullscreen) {
            document.removeEventListener('fullscreenchange', handlerFullscreen);
          }
          handlerFullscreen = null;
        },
        { once: true },
      );

      function botToolbar(rotulo: string, comando: () => void): HTMLButtonElement {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'shell__btn-toolbar';
        b.textContent = rotulo;
        b.title = rotulo;
        b.setAttribute('aria-label', rotulo);
        b.addEventListener('click', () => {
          if (!modoLeitura && recursoTipTap) comando();
        });
        return b;
      }

      const botoesFormatacaoToolbar: HTMLButtonElement[] = [
        botToolbar(t.toolbarNegrito, () => recursoTipTap!.editor.chain().focus().toggleBold().run()),
        botToolbar(t.toolbarItalico, () => recursoTipTap!.editor.chain().focus().toggleItalic().run()),
        botToolbar(t.toolbarSubtitulo, () =>
          recursoTipTap!.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        ),
        botToolbar(t.toolbarListaMarcadores, () =>
          recursoTipTap!.editor.chain().focus().toggleBulletList().run(),
        ),
        botToolbar(t.toolbarListaNumerada, () =>
          recursoTipTap!.editor.chain().focus().toggleOrderedList().run(),
        ),
        botToolbar(t.toolbarDesfazer, () => recursoTipTap!.editor.chain().focus().undo().run()),
        botToolbar(t.toolbarRefazer, () => recursoTipTap!.editor.chain().focus().redo().run()),
      ];

      ferramentas.append(...botoesFormatacaoToolbar);

      const btnImg = document.createElement('button');
      btnImg.type = 'button';
      btnImg.className = 'shell__btn-toolbar';
      btnImg.textContent = t.inserirImagem;
      btnImg.title = t.inserirImagem;
      btnImg.setAttribute('aria-label', t.inserirImagem);
      btnImg.addEventListener('click', () => {
        if (!modoLeitura) entradaFicheiro.click();
      });
      ferramentas.append(btnImg);

      entradaFicheiro.addEventListener('change', async () => {
        const f = entradaFicheiro.files?.[0];
        entradaFicheiro.value = '';
        if (!f || modoLeitura || !recursoTipTap) return;
        try {
          const src = await arquivoImagemParaDataUriAutorizada(f);
          recursoTipTap.editor.chain().focus().setImage({ src }).run();
        } catch (er) {
          globalThis.alert?.(er instanceof Error ? er.message : String(er));
        }
      });

      btnAplicarModelo.addEventListener('click', () => {
        if (modoLeitura || !recursoTipTap) return;
        const txCf = obterTextosAnotacao(obterLocaleAtual());
        if (!globalThis.confirm?.(`${txCf.confirmarSubstituirCorpoTitulo}\n${txCf.confirmarSubstituirCorpoDescricao}`)) {
          return;
        }
        const idMod = modeloSel.value;
        const html = esqueletoHtmlSanitizadoModelo(idMod, obterLocaleAtual());
        recursoTipTap.definirConteudoHtml(html);
      });

      function atualizarApresentacao(): void {
        if (!recursoTipTap) return;
        const sanitizado = recursoTipTap.obterHtmlSanitizado();

        const barraLeitura = document.createElement('div');
        barraLeitura.className = 'shell__barra-apresentacao';
        const btnFs = document.createElement('button');
        btnFs.type = 'button';
        btnFs.className = 'shell__acao-secundaria-botao';
        btnFullscreenRef = btnFs;
        atualizarTituloFullscreen();
        btnFs.addEventListener('click', async () => {
          try {
            if (document.fullscreenElement === apresentacao) {
              await document.exitFullscreen();
            } else {
              await apresentacao.requestFullscreen();
            }
          } catch {
            /* ignorar se API indisponível */
          }
        });
        barraLeitura.append(btnFs);

        const saida = document.createElement('div');
        saida.className = 'shell__corpo-html-san';
        saida.innerHTML = sanitizarHtmlConteudoUtilizador(sanitizado);

        const scroller = document.createElement('div');
        scroller.className = 'shell__apresentacao--leitura';
        scroller.append(saida);

        apresentacao.replaceChildren();
        apresentacao.append(barraLeitura, scroller);
      }

      function alternarApresentacao(): void {
        modoLeitura = !modoLeitura;
        if (!recursoTipTap) return;
        const txApr = obterTextosAnotacao(obterLocaleAtual());
        if (modoLeitura) {
          atualizarApresentacao();
          recursoTipTap.editor.setEditable(false);
          hostEditor.hidden = true;
          apresentacao.hidden = false;
          btnApresentacao.textContent = txApr.modoEdicao;
        } else {
          recursoTipTap.editor.setEditable(true);
          hostEditor.hidden = false;
          apresentacao.hidden = true;
          btnApresentacao.textContent = txApr.modoApresentacao;
          apresentacao.replaceChildren();
          btnFullscreenRef = null;
          recursoTipTap.focarEditor();
          void document.exitFullscreen().catch(() => undefined);
        }
      }

      btnApresentacao.addEventListener('click', () => alternarApresentacao());

      async function gravar(): Promise<void> {
        if (!recursoTipTap || modoLeitura) return;
        const tituloLimpo =
          inputTitulo.value.trim() !== ''
            ? inputTitulo.value.trim()
            : obterTextosAnotacao(obterLocaleAtual()).notaSemTituloFallback;
        const pastaValor = pastaSel.value;
        const pastaIdNumerico = pastaValor === '' ? null : Number(pastaValor);
        const pastaIdFinal =
          pastaIdNumerico !== null && Number.isFinite(pastaIdNumerico) ? pastaIdNumerico : null;
        const conteudoHtml = recursoTipTap.obterHtmlSanitizado();
        const modeloSalvar = modeloSel.value;

        const base = {
          pasta_id: pastaIdFinal,
          titulo: tituloLimpo,
          conteudo: conteudoHtml,
          tipo_modelo: modeloSalvar,
          esta_fixada: ckFixada.checked ? 1 : 0,
          esta_arquivada: ckArquivada.checked ? 1 : 0,
          etiquetas: inputEtiquetas.value.trim(),
        };

        if (idPersistente === null) {
          idPersistente = await repo.inserirAnotacao(base);
          btnApagar.hidden = false;
        } else {
          await repo.atualizarAnotacao(idPersistente, base);
        }
        detalhe =
          idPersistente !== null
            ? ((await repo.obterAnotacaoComConteudo(idPersistente)) ?? detalhe)
            : detalhe;
        document.title = `${tituloLimpo} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      }

      btnSalvar.addEventListener('click', () => void gravar());
      btnApagar.addEventListener('click', async () => {
        if (
          idPersistente === null ||
          !globalThis.confirm?.(obterTextosAnotacao(obterLocaleAtual()).confirmarApagarTitulo)
        )
          return;
        await repo.apagarAnotacao(idPersistente);
        page('/anotacoes');
      });

      const wrapModeloLinha = document.createElement('div');
      wrapModeloLinha.className = 'shell__linha-modelo';
      wrapModeloLinha.append(rotuloMl, modeloSel, btnAplicarModelo);

      container.append(
        topo,
        rotuloTit,
        inputTitulo,
        rotuloPasta,
        pastaSel,
        wrapModeloLinha,
        rotuloEti,
        ajudaEti,
        inputEtiquetas,
        rotuloCkArq,
        rotuloCkPin,
        entradaFicheiro,
        ferramentas,
        hostEditor,
        apresentacao,
      );

      function aplicarChromeEditorAnot(): void {
        const lang = obterLocaleAtual();
        const tx = obterTextosAnotacao(lang);
        const tcx = obterTextosConfig(lang);
        const tituloOuFallback =
          inputTitulo.value.trim() !== ''
            ? inputTitulo.value.trim()
            : idPersistente === null
              ? tx.novaNota
              : tx.notaSemTituloFallback;
        document.title = `${tituloOuFallback} — ${tcx.appNomeTituloDoc}`;
        linkVoltar.textContent = tx.voltarLista;
        btnSalvar.textContent = tx.salvar;
        btnApagar.textContent = tx.apagar;
        btnApresentacao.textContent = modoLeitura ? tx.modoEdicao : tx.modoApresentacao;
        rotuloTit.textContent = tx.tituloPlaceholder;
        inputTitulo.placeholder = tx.tituloPlaceholder;
        rotuloPasta.textContent = tx.pastaLabel;
        if (pastaSel.options.length > 0) {
          pastaSel.options[0]!.textContent = tx.pastaNenhuma;
        }
        rotuloMl.textContent = tx.modeloNotaLabel;
        const modeloValorAntes = modeloSel.value;
        const extrasOpcoes: Array<{ valor: string; rotulo: string }> = [];
        for (const opt of modeloSel.options) {
          const v = opt.value;
          if (!IDS_MODELO_NOTA.includes(v as IdModeloNota)) {
            extrasOpcoes.push({ valor: v, rotulo: opt.textContent ?? v });
          }
        }
        modeloSel.replaceChildren();
        for (const idMod of IDS_MODELO_NOTA) {
          const o = document.createElement('option');
          o.value = idMod;
          o.textContent = rotuloModeloNotaParaUi(idMod, lang);
          modeloSel.append(o);
        }
        for (const ex of extrasOpcoes) {
          const ox = document.createElement('option');
          ox.value = ex.valor;
          ox.textContent = ex.rotulo;
          modeloSel.append(ox);
        }
        modeloSel.value = [...modeloSel.options].some((o) => o.value === modeloValorAntes)
          ? modeloValorAntes
          : 'livre';

        btnAplicarModelo.textContent = tx.aplicarEsqueleto;
        rotuloEti.textContent = tx.etiquetasLabel;
        ajudaEti.textContent = tx.etiquetasAjuda;
        inputEtiquetas.placeholder = tx.etiquetasAjuda;
        txArquivada.textContent = tx.arquivada;
        txFixada.textContent = tx.fixada;
        ferramentas.setAttribute('aria-label', tx.formatoToolbarAria);
        const rotulosFmt: readonly string[] = [
          tx.toolbarNegrito,
          tx.toolbarItalico,
          tx.toolbarSubtitulo,
          tx.toolbarListaMarcadores,
          tx.toolbarListaNumerada,
          tx.toolbarDesfazer,
          tx.toolbarRefazer,
        ];
        for (let i = 0; i < botoesFormatacaoToolbar.length; i++) {
          const bt = botoesFormatacaoToolbar[i];
          const r = rotulosFmt[i];
          if (bt && r !== undefined) {
            bt.textContent = r;
            bt.title = r;
            bt.setAttribute('aria-label', r);
          }
        }
        btnImg.textContent = tx.inserirImagem;
        btnImg.title = tx.inserirImagem;
        btnImg.setAttribute('aria-label', tx.inserirImagem);
        atualizarTituloFullscreen();
      }

      registarAoLocaleAtualizado(() => {
        aplicarChromeEditorAnot();
        if (modoLeitura) {
          atualizarApresentacao();
        }
      }, sinal);

      inputTitulo.addEventListener('input', () => aplicarChromeEditorAnot());

      if (sinal.aborted) {
        recursoTipTap.destruir();
        recursoTipTap = null;
        if (handlerFullscreen) {
          document.removeEventListener('fullscreenchange', handlerFullscreen);
        }
        handlerFullscreen = null;
        return;
      }

      recursoTipTap.focarEditor();
    },
    async unmount() {
      document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
      const alvo = alvoFullscreen ?? undefined;
      if (alvo && document.fullscreenElement === alvo) {
        await document.exitFullscreen().catch(() => undefined);
      }
      if (handlerFullscreen) {
        document.removeEventListener('fullscreenchange', handlerFullscreen);
      }
      handlerFullscreen = null;
      recursoTipTap?.destruir();
      recursoTipTap = null;
      alvoFullscreen = null;
      btnFullscreenRef = null;
    },
  };
}
