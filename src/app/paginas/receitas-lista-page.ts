import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import * as repo from '../../modules/receitas/dados/repositorio.js';
import type { ReceitaListaRow } from '../../modules/receitas/dados/types.js';
import { obterTextosReceitas } from '../../modules/receitas/ui/textos-receitas.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { hrefParaRota } from '../menu-rotas.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

const listaReceitasPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    const t = obterTextosReceitas(loc);
    const appNome = obterTextosConfig(loc).appNomeTituloDoc;
    document.title = `${t.tituloLista} — ${appNome}`;
    container.replaceChildren();

    let idApagar: number | null = null;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';

    const titulo = document.createElement('h1');
    titulo.className = 'shell__titulo';
    titulo.textContent = t.tituloLista;

    const linkNova = document.createElement('a');
    linkNova.className = 'shell__acao-primaria';
    linkNova.href = hrefParaRota('/receitas/nova');
    linkNova.textContent = t.novaReceita;

    barra.append(titulo, linkNova);

    const wrapBusca = document.createElement('div');
    wrapBusca.className = 'shell__campo';
    const rotuloBusca = document.createElement('label');
    rotuloBusca.className = 'shell__etiqueta';
    rotuloBusca.setAttribute('for', 'busca-receita');
    rotuloBusca.textContent = t.termoBusca;
    const busca = document.createElement('input');
    busca.id = 'busca-receita';
    busca.type = 'search';
    busca.className = 'shell__input-texto';
    wrapBusca.append(rotuloBusca, busca);

    const listaUl = document.createElement('ul');
    listaUl.className = 'shell__lista';

    const vazio = document.createElement('p');
    vazio.className = 'shell__sub';
    vazio.hidden = true;
    vazio.textContent = t.listaVazia;

    const dialogo = document.createElement('wa-dialog');
    dialogo.setAttribute('label', t.confirmarApagar);
    const corpoDlg = document.createElement('p');
    corpoDlg.textContent = t.confirmarApagar;
    const acoesDlg = document.createElement('div');
    acoesDlg.setAttribute('slot', 'footer');
    const btnCancelarDlg = document.createElement('wa-button');
    btnCancelarDlg.setAttribute('variant', 'neutral');
    btnCancelarDlg.textContent = t.cancelarDialogo;
    const btnConfirmarDlg = document.createElement('wa-button');
    btnConfirmarDlg.setAttribute('variant', 'danger');
    btnConfirmarDlg.textContent = t.apagar;
    acoesDlg.append(btnCancelarDlg, btnConfirmarDlg);
    dialogo.append(corpoDlg, acoesDlg);

    container.append(barra, wrapBusca, listaUl, vazio, dialogo);

    function atualizarCromListaReceitasPorLocale(): void {
      const locUi = obterLocaleAtual();
      const tr = obterTextosReceitas(locUi);
      const nomeApp = obterTextosConfig(locUi).appNomeTituloDoc;
      document.title = `${tr.tituloLista} — ${nomeApp}`;
      titulo.textContent = tr.tituloLista;
      linkNova.textContent = tr.novaReceita;
      rotuloBusca.textContent = tr.termoBusca;
      dialogo.setAttribute('label', tr.confirmarApagar);
      corpoDlg.textContent = tr.confirmarApagar;
      btnCancelarDlg.textContent = tr.cancelarDialogo;
      btnConfirmarDlg.textContent = tr.apagar;
    }

    async function recarregar(): Promise<void> {
      const tl = obterTextosReceitas(obterLocaleAtual());
      const termoBusca = busca.value.trim();
      let linhas: ReceitaListaRow[];
      try {
        linhas = await repo.listarReceitasParaLista(
          termoBusca.length > 0 ? { termo: termoBusca } : undefined,
        );
      } catch {
        listaUl.replaceChildren();
        vazio.hidden = false;
        vazio.textContent = tl.erroLista;
        return;
      }
      listaUl.replaceChildren();
      vazio.hidden = linhas.length > 0;
      if (linhas.length === 0) {
        vazio.textContent = tl.listaVazia;
      }
      for (const r of linhas) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';
        const link = document.createElement('a');
        link.className = 'shell__lista-titulo';
        link.href = hrefParaRota(`/receitas/${String(r.id)}`);
        link.textContent = r.titulo.trim() !== '' ? r.titulo : tl.semTitulo;
        const meta = document.createElement('span');
        meta.className = 'shell__lista-meta';
        meta.textContent = r.categoria;
        const btnApagar = document.createElement('button');
        btnApagar.type = 'button';
        btnApagar.className = 'shell__botao-perigo';
        btnApagar.textContent = tl.apagar;
        btnApagar.addEventListener('click', () => {
          idApagar = r.id;
          const dlg = dialogo as unknown as { show?: () => void };
          dlg.show?.();
        });
        li.append(link, meta, btnApagar);
        listaUl.append(li);
      }
    }

    busca.addEventListener('input', () => void recarregar());
    btnCancelarDlg.addEventListener('click', () => {
      const dlg = dialogo as unknown as { hide?: () => void };
      dlg.hide?.();
      idApagar = null;
    });
    btnConfirmarDlg.addEventListener('click', async () => {
      if (idApagar !== null) {
        await repo.apagarReceita(idApagar);
        idApagar = null;
        const dlg = dialogo as unknown as { hide?: () => void };
        dlg.hide?.();
        await recarregar();
      }
    });

    registarAoLocaleAtualizado(() => {
      atualizarCromListaReceitasPorLocale();
      void recarregar();
    }, sinal);

    if (sinal.aborted) return;
    await recarregar();
    sinal.addEventListener('abort', () => {
      const dlg = dialogo as unknown as { hide?: () => void };
      dlg.hide?.();
    });
  },
  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default listaReceitasPagina;
