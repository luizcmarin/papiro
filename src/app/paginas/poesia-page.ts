import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import { textoPlanoUsuarioParaHtmlSeguro } from '../../modules/poesia/aplicacao/texto-plano-para-html.js';
import * as repo from '../../modules/poesia/dados/repositorio.js';
import { obterTextosPoesia } from '../../modules/poesia/ui/textos-poesia.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

const poesiaPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    let tm = obterTextosPoesia(loc);
    document.title = `${tm.tituloPagina} — ${obterTextosConfig(loc).appNomeTituloDoc}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const h1 = document.createElement('h1');
    h1.className = 'shell__titulo';

    const hLista = document.createElement('h2');
    hLista.className = 'shell__titulo';

    const form = document.createElement('div');
    form.className = 'shell__form-linha';
    form.style.flexWrap = 'wrap';
    form.style.alignItems = 'flex-start';

    const inTitulo = document.createElement('input');
    inTitulo.className = 'shell__input-texto';
    const inTexto = document.createElement('textarea');
    inTexto.rows = 6;
    inTexto.className = 'shell__textarea';

    const btnNova = document.createElement('wa-button');
    btnNova.setAttribute('variant', 'neutral');
    const btnGuardar = document.createElement('wa-button');

    const prevTitulo = document.createElement('p');
    prevTitulo.className = 'shell__campo-titulo';
    const preview = document.createElement('div');
    preview.className = 'shell__corpo-html-san';
    preview.setAttribute('role', 'region');

    const erro = document.createElement('p');
    erro.className = 'shell__sub';
    erro.hidden = true;
    erro.setAttribute('role', 'alert');

    const lista = document.createElement('ul');
    lista.className = 'shell__lista';

    const dlg = document.createElement('wa-dialog');
    dlg.setAttribute('label', tm.dialogoApagarLabel);
    const dlgP = document.createElement('p');
    const dlgF = document.createElement('div');
    dlgF.setAttribute('slot', 'footer');
    const dlgCx = document.createElement('wa-button');
    dlgCx.setAttribute('variant', 'neutral');
    const dlgOk = document.createElement('wa-button');
    dlgOk.setAttribute('variant', 'danger');
    dlgF.append(dlgCx, dlgOk);
    dlg.append(dlgP, dlgF);

    container.replaceChildren();
    barra.append(h1);
    container.append(barra, hLista, form, erro, prevTitulo, preview, lista, dlg);

    form.append(inTitulo, inTexto, btnNova, btnGuardar);

    let editingId: number | null = null;
    let idParaApagar: number | null = null;

    function atualizarPreview(): void {
      const htmlSeguro = textoPlanoUsuarioParaHtmlSeguro(inTexto.value);
      preview.innerHTML = htmlSeguro;
    }

    async function redesenharLista(): Promise<void> {
      const t = obterTextosPoesia(obterLocaleAtual());
      lista.replaceChildren();
      let linhas;
      try {
        linhas = await repo.listarPoesiasSemConteudo();
      } catch {
        erro.hidden = false;
        erro.textContent = t.erroBd;
        return;
      }
      erro.hidden = true;
      if (linhas.length === 0) {
        const li = document.createElement('li');
        li.className = 'shell__sub';
        li.textContent = t.vazia;
        lista.append(li);
        return;
      }

      for (const p of linhas) {
        const li = document.createElement('li');
        li.className = 'shell__lista-item';
        const sp = document.createElement('span');
        sp.textContent = p.titulo;
        const bEd = document.createElement('wa-button');
        bEd.setAttribute('variant', 'neutral');
        bEd.textContent = t.editar;
        bEd.addEventListener(
          'click',
          async () => {
            const det = await repo.obterPoesiaComConteudo(p.id);
            editingId = p.id;
            inTitulo.value = det?.titulo ?? '';
            inTexto.value = det?.texto ?? '';
            atualizarPreview();
          },
          { signal: sinal },
        );
        const bAp = document.createElement('wa-button');
        bAp.setAttribute('variant', 'danger');
        bAp.textContent = t.apagar;
        bAp.addEventListener(
          'click',
          () => {
            idParaApagar = p.id;
            dlgP.textContent = t.dialogoApagarTexto;
            (dlg as unknown as { show?: () => void }).show?.();
          },
          { signal: sinal },
        );
        li.append(sp, bEd, bAp);
        lista.append(li);
      }
    }

    function aplicarTextos(t: typeof tm): void {
      tm = t;
      const lc = obterLocaleAtual();
      const cfg = obterTextosConfig(lc);
      document.title = `${tm.tituloPagina} — ${cfg.appNomeTituloDoc}`;
      h1.textContent = tm.tituloPagina;
      hLista.textContent = tm.listaTitulo;
      btnNova.textContent = tm.cancelarEdicao;
      btnGuardar.textContent = tm.guardar;
      inTitulo.placeholder = tm.campoTitulo;
      inTexto.placeholder = tm.campoTexto;
      dlg.setAttribute('label', tm.dialogoApagarLabel);
      dlgP.textContent = tm.dialogoApagarTexto;
      dlgCx.textContent = tm.dialogoCancelar;
      dlgOk.textContent = tm.dialogoConfirmar;
      prevTitulo.textContent = tm.leituraTitulo;
      if (!erro.hidden) {
        erro.textContent = tm.erroBd;
      }
    }

    aplicarTextos(tm);
    atualizarPreview();
    await redesenharLista();

    inTexto.addEventListener('input', atualizarPreview, { signal: sinal });

    btnNova.addEventListener(
      'click',
      () => {
        editingId = null;
        inTitulo.value = '';
        inTexto.value = '';
        atualizarPreview();
      },
      { signal: sinal },
    );

    btnGuardar.addEventListener(
      'click',
      async () => {
        const tloc = obterTextosPoesia(obterLocaleAtual());
        erro.hidden = true;
        const titulo = inTitulo.value.trim();
        if (titulo.length === 0) {
          return;
        }
        try {
          if (editingId !== null) {
            await repo.atualizarPoesiaLocal(editingId, {
              titulo,
              texto: inTexto.value,
            });
            editingId = null;
          } else {
            await repo.inserirPoesiaLocal({ titulo, texto: inTexto.value });
          }
          inTitulo.value = '';
          inTexto.value = '';
          atualizarPreview();
          await redesenharLista();
        } catch {
          erro.hidden = false;
          erro.textContent = tloc.erroBd;
        }
      },
      { signal: sinal },
    );

    dlgCx.addEventListener('click', () => dlg.removeAttribute('open'), { signal: sinal });
    dlgOk.addEventListener(
      'click',
      async () => {
        if (idParaApagar !== null) {
          try {
            await repo.apagarPoesia(idParaApagar);
          } catch {
            erro.hidden = false;
            erro.textContent = obterTextosPoesia(obterLocaleAtual()).erroBd;
          }
          idParaApagar = null;
        }
        dlg.removeAttribute('open');
        if (editingId !== null) {
          editingId = null;
          inTitulo.value = '';
          inTexto.value = '';
          atualizarPreview();
        }
        await redesenharLista();
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(() => {
      aplicarTextos(obterTextosPoesia(obterLocaleAtual()));
      void redesenharLista();
    }, sinal);
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default poesiaPagina;
