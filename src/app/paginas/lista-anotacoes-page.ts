import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import * as repo from '../../modules/anotacoes/dados/repositorio.js';
import type { AnotacaoListaRow, PastaRow } from '../../modules/anotacoes/dados/types.js';
import { IDS_MODELO_NOTA, rotuloModeloNotaParaUi } from '../../modules/anotacoes/dominio/modelos-nota.js';
import { obterTextosAnotacao } from '../../modules/anotacoes/ui/textos-anotacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { hrefParaRota } from '../menu-rotas.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

interface EstadoFiltros {
  termo: string;
  termoEtiquetas: string;
  pastaIdEscolhido: string;
  tipoModelo: string;
  ocultarArquivadas: boolean;
}

function localeParaData(locale: ReturnType<typeof obterLocaleAtual>): string {
  return locale === 'en' ? 'en-US' : 'pt-BR';
}

const listaAnotacoesPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    const tc = obterTextosConfig(loc);
    const t = obterTextosAnotacao(loc);

    document.title = `${t.tituloLista} — ${tc.appNomeTituloDoc}`;
    container.replaceChildren();

    const estado: EstadoFiltros = {
      termo: '',
      termoEtiquetas: '',
      pastaIdEscolhido: '',
      tipoModelo: '',
      ocultarArquivadas: true,
    };

    let pastas: PastaRow[] = [];
    let idApagar: number | null = null;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';

    const titulo = document.createElement('h1');
    titulo.className = 'shell__titulo';
    titulo.textContent = t.tituloLista;

    const linkNova = document.createElement('a');
    linkNova.className = 'shell__acao-primaria';
    linkNova.href = hrefParaRota('/anotacoes/nova');
    linkNova.textContent = t.novaNota;

    barra.append(titulo, linkNova);

    const filtros = document.createElement('div');
    filtros.className = 'shell__filtros';

    const rotuloBusca = document.createElement('label');
    rotuloBusca.className = 'shell__etiqueta';
    rotuloBusca.textContent = t.buscarTitulo;
    rotuloBusca.setAttribute('for', 'filtro-busca-anotacao');
    const busca = document.createElement('input');
    busca.id = 'filtro-busca-anotacao';
    busca.type = 'search';
    busca.className = 'shell__input-texto';
    busca.placeholder = t.buscarTitulo;

    const rotuloEtq = document.createElement('label');
    rotuloEtq.className = 'shell__etiqueta';
    rotuloEtq.textContent = t.buscarEtiquetas;
    rotuloEtq.setAttribute('for', 'filtro-etiquetas-anotacao');
    const buscaEtq = document.createElement('input');
    buscaEtq.id = 'filtro-etiquetas-anotacao';
    buscaEtq.type = 'search';
    buscaEtq.className = 'shell__input-texto';
    buscaEtq.placeholder = t.buscarEtiquetas;

    const rotuloTipo = document.createElement('label');
    rotuloTipo.className = 'shell__etiqueta';
    rotuloTipo.textContent = t.filtroTipoModelo;
    rotuloTipo.setAttribute('for', 'filtro-modelo-anotacao');
    const modeloFilt = document.createElement('select');
    modeloFilt.id = 'filtro-modelo-anotacao';
    modeloFilt.className = 'shell__select';
    const opModTodos = document.createElement('option');
    opModTodos.value = '';
    opModTodos.textContent = t.modeloTodos;
    modeloFilt.append(opModTodos);
    for (const idMod of IDS_MODELO_NOTA) {
      const o = document.createElement('option');
      o.value = idMod;
      o.textContent = rotuloModeloNotaParaUi(idMod, loc);
      modeloFilt.append(o);
    }

    const etiquetaPasta = document.createElement('label');
    etiquetaPasta.className = 'shell__etiqueta';
    etiquetaPasta.textContent = t.pastaLabel;
    const pastaSel = document.createElement('select');
    pastaSel.className = 'shell__select';

    const opPastaTodas = document.createElement('option');
    opPastaTodas.value = '';
    opPastaTodas.textContent = t.pastaTodas;
    pastaSel.append(opPastaTodas);

    const opPastaSem = document.createElement('option');
    opPastaSem.value = 'null';
    opPastaSem.textContent = t.pastaNenhuma;
    pastaSel.append(opPastaSem);

    const arquivWrap = document.createElement('label');
    arquivWrap.className = 'shell__checkbox-linha';
    const arquivCk = document.createElement('input');
    arquivCk.type = 'checkbox';
    arquivCk.checked = estado.ocultarArquivadas;
    const arquivTx = document.createElement('span');
    arquivTx.textContent = t.somenteAtivas;
    arquivWrap.append(arquivCk, arquivTx);

    const wrapBusca = document.createElement('div');
    wrapBusca.className = 'shell__campo';
    wrapBusca.append(rotuloBusca, busca);

    const wrapEt = document.createElement('div');
    wrapEt.className = 'shell__campo';
    wrapEt.append(rotuloEtq, buscaEtq);

    const wrapMod = document.createElement('div');
    wrapMod.className = 'shell__campo';
    wrapMod.append(rotuloTipo, modeloFilt);

    filtros.append(wrapBusca, wrapEt, wrapMod, etiquetaPasta, pastaSel, arquivWrap);

    const listaUl = document.createElement('ul');
    listaUl.className = 'shell__lista';
    listaUl.setAttribute('aria-label', t.tituloLista);

    const vazio = document.createElement('p');
    vazio.className = 'shell__sub';
    vazio.hidden = true;
    vazio.textContent = t.listaVazia;

    const dialogo = document.createElement('wa-dialog');
    dialogo.setAttribute('label', t.confirmarApagarTitulo);
    const corpoDlg = document.createElement('p');
    corpoDlg.textContent = t.confirmarApagarDescricao;
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

    container.append(barra, filtros, listaUl, vazio, dialogo);

    function atualizarCromListaPorLocale(): void {
      const locUi = obterLocaleAtual();
      const tcUi = obterTextosConfig(locUi);
      const tUi = obterTextosAnotacao(locUi);
      document.title = `${tUi.tituloLista} — ${tcUi.appNomeTituloDoc}`;
      titulo.textContent = tUi.tituloLista;
      linkNova.textContent = tUi.novaNota;
      rotuloBusca.textContent = tUi.buscarTitulo;
      busca.placeholder = tUi.buscarTitulo;
      rotuloEtq.textContent = tUi.buscarEtiquetas;
      buscaEtq.placeholder = tUi.buscarEtiquetas;
      rotuloTipo.textContent = tUi.filtroTipoModelo;

      const valModPreserve = modeloFilt.value;
      modeloFilt.replaceChildren();
      const opTodosN = document.createElement('option');
      opTodosN.value = '';
      opTodosN.textContent = tUi.modeloTodos;
      modeloFilt.append(opTodosN);
      for (const idMod of IDS_MODELO_NOTA) {
        const o = document.createElement('option');
        o.value = idMod;
        o.textContent = rotuloModeloNotaParaUi(idMod, locUi);
        modeloFilt.append(o);
      }
      modeloFilt.value = [...modeloFilt.options].some((o) => o.value === valModPreserve)
        ? valModPreserve
        : '';

      etiquetaPasta.textContent = tUi.pastaLabel;
      if (pastaSel.options.length > 0) {
        pastaSel.options[0]!.textContent = tUi.pastaTodas;
      }
      if (pastaSel.options.length > 1) {
        pastaSel.options[1]!.textContent = tUi.pastaNenhuma;
      }
      arquivTx.textContent = tUi.somenteAtivas;
      listaUl.setAttribute('aria-label', tUi.tituloLista);
      dialogo.setAttribute('label', tUi.confirmarApagarTitulo);
      corpoDlg.textContent = tUi.confirmarApagarDescricao;
      btnCancelarDlg.textContent = tUi.cancelarDialogo;
      btnConfirmarDlg.textContent = tUi.apagar;
    }

    async function recarregar(): Promise<void> {
      const locLista = obterLocaleAtual();
      const tl = obterTextosAnotacao(locLista);
      const escolhaAntes = pastaSel.value;
      const escModAntes = modeloFilt.value;
      pastas = await repo.listarPastas();
      while (pastaSel.options.length > 2) {
        pastaSel.remove(2);
      }
      for (const p of pastas) {
        const opt = document.createElement('option');
        opt.value = String(p.id);
        opt.textContent = p.nome;
        pastaSel.append(opt);
      }
      if ([...pastaSel.options].some((o) => o.value === escolhaAntes)) {
        pastaSel.value = escolhaAntes;
      }
      modeloFilt.value = [...modeloFilt.options].some((o) => o.value === escModAntes)
        ? escModAntes
        : '';

      estado.pastaIdEscolhido = pastaSel.value;
      estado.termo = busca.value;
      estado.termoEtiquetas = buscaEtq.value;
      estado.tipoModelo = modeloFilt.value;

      let pastaFiltro: number | null | undefined;
      if (estado.pastaIdEscolhido === '') {
        pastaFiltro = undefined;
      } else if (estado.pastaIdEscolhido === 'null') {
        pastaFiltro = null;
      } else {
        pastaFiltro = Number(estado.pastaIdEscolhido);
      }

      let linhas: AnotacaoListaRow[];
      try {
        linhas = await repo.listarAnotacoesParaLista({
          termoTitulo: estado.termo.trim() !== '' ? estado.termo.trim() : undefined,
          termoEtiquetas:
            estado.termoEtiquetas.trim() !== '' ? estado.termoEtiquetas.trim() : undefined,
          tipo_modelo: estado.tipoModelo.trim() !== '' ? estado.tipoModelo.trim() : undefined,
          pasta_id: pastaFiltro,
          ocultarArquivadas: estado.ocultarArquivadas,
        });
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

      for (const linha of linhas) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';

        const bloco = document.createElement('div');
        bloco.className = 'shell__lista-bloco';

        const link = document.createElement('a');
        link.className = 'shell__lista-titulo';
        link.href = hrefParaRota(`/anotacoes/${String(linha.id)}`);
        link.textContent =
          linha.titulo.trim() !== '' ? linha.titulo : tl.notaSemTituloFallback;

        const det = document.createElement('div');
        det.className = 'shell__lista-sub';
        const modTxt = `${tl.metaModelo}: ${rotuloModeloNotaParaUi(linha.tipo_modelo, locLista)}`;
        const etTxt =
          linha.etiquetas.trim() !== ''
            ? `${tl.metaEtiquetas}: ${linha.etiquetas.trim()}`
            : '';
        det.textContent = etTxt !== '' ? `${modTxt} · ${etTxt}` : modTxt;

        bloco.append(link, det);

        const meta = document.createElement('span');
        meta.className = 'shell__lista-meta';
        meta.textContent = new Date(linha.data_modificacao).toLocaleString(localeParaData(locLista));

        const btnApagar = document.createElement('button');
        btnApagar.type = 'button';
        btnApagar.className = 'shell__botao-perigo';
        btnApagar.textContent = tl.apagar;
        btnApagar.addEventListener('click', () => {
          idApagar = linha.id;
          const dlg = dialogo as unknown as { show?: () => void };
          dlg.show?.();
        });

        li.append(bloco, meta, btnApagar);
        listaUl.append(li);
      }
    }

    busca.addEventListener('input', () => void recarregar());
    buscaEtq.addEventListener('input', () => void recarregar());
    modeloFilt.addEventListener('change', () => void recarregar());

    pastaSel.addEventListener('change', () => void recarregar());
    arquivCk.addEventListener('change', () => {
      estado.ocultarArquivadas = arquivCk.checked;
      void recarregar();
    });

    btnCancelarDlg.addEventListener('click', () => {
      const dlg = dialogo as unknown as { hide?: () => void };
      dlg.hide?.();
      idApagar = null;
    });
    btnConfirmarDlg.addEventListener('click', async () => {
      if (idApagar !== null) {
        await repo.apagarAnotacao(idApagar);
        idApagar = null;
        const dlg = dialogo as unknown as { hide?: () => void };
        dlg.hide?.();
        await recarregar();
      }
    });

    registarAoLocaleAtualizado(() => {
      atualizarCromListaPorLocale();
      void recarregar();
    }, sinal);

    if (sinal.aborted) {
      return;
    }
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

export default listaAnotacoesPagina;
