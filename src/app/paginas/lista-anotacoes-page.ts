import * as repo from '../../modules/anotacoes/dados/repositorio.js';
import type { AnotacaoListaRow, PastaRow } from '../../modules/anotacoes/dados/types.js';
import { IDS_MODELO_NOTA, rotuloModeloNotaParaUi } from '../../modules/anotacoes/dominio/modelos-nota.js';
import { obterTextosAnotacao } from '../../modules/anotacoes/ui/textos-anotacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { hrefParaRota } from '../menu-rotas.js';
import { criarDialogoConfirmacao } from '../ui/dialogos.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { criarBlocoLista, criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

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

function criarCampoFiltro(rotuloTexto: string, controle: HTMLElement): { elemento: HTMLElement; rotulo: HTMLElement } {
  const wrap = document.createElement('label');
  wrap.className = 'shell__campo';
  const rotulo = document.createElement('span');
  rotulo.className = 'shell__etiqueta';
  rotulo.textContent = rotuloTexto;
  wrap.append(rotulo, controle);
  return { elemento: wrap, rotulo };
}

const listaAnotacoesPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    const t = obterTextosAnotacao(loc);

    definirTituloDocumentoApp(t.tituloLista, loc);

    const estado: EstadoFiltros = {
      termo: '',
      termoEtiquetas: '',
      pastaIdEscolhido: '',
      tipoModelo: '',
      ocultarArquivadas: true,
    };

    let pastas: PastaRow[] = [];

    const linkNova = document.createElement('a');
    linkNova.className = 'shell__acao-primaria';
    linkNova.href = hrefParaRota('/anotacoes/nova');
    linkNova.textContent = t.novaNota;

    const pagina = criarPaginaUi({ titulo: t.tituloLista, acoes: [linkNova] });

    const busca = document.createElement('input');
    busca.type = 'search';
    busca.className = 'shell__input-texto';
    busca.placeholder = t.buscarTitulo;
    const campoBusca = criarCampoFiltro(t.buscarTitulo, busca);

    const buscaEtq = document.createElement('input');
    buscaEtq.type = 'search';
    buscaEtq.className = 'shell__input-texto';
    buscaEtq.placeholder = t.buscarEtiquetas;
    const campoEtq = criarCampoFiltro(t.buscarEtiquetas, buscaEtq);

    const modeloFilt = document.createElement('select');
    modeloFilt.className = 'shell__select';
    const campoModelo = criarCampoFiltro(t.filtroTipoModelo, modeloFilt);

    const pastaSel = document.createElement('select');
    pastaSel.className = 'shell__select';
    const campoPasta = criarCampoFiltro(t.pastaLabel, pastaSel);

    const arquivWrap = document.createElement('label');
    arquivWrap.className = 'shell__checkbox-linha';
    const arquivCk = document.createElement('input');
    arquivCk.type = 'checkbox';
    arquivCk.checked = estado.ocultarArquivadas;
    const arquivTx = document.createElement('span');
    arquivTx.textContent = t.somenteAtivas;
    arquivWrap.append(arquivCk, arquivTx);

    const filtros = document.createElement('div');
    filtros.className = 'shell__filtros';
    filtros.append(campoBusca.elemento, campoEtq.elemento, campoModelo.elemento, campoPasta.elemento, arquivWrap);

    const vazio = document.createElement('p');
    vazio.className = 'shell__sub';
    vazio.hidden = true;

    const confirmacao = criarDialogoConfirmacao({
      titulo: t.confirmarApagarTitulo,
      texto: t.confirmarApagarDescricao,
      cancelar: t.cancelarDialogo,
      confirmar: t.apagar,
      signal: sinal,
    });

    const listaAnotacoes = criarListaCrud<AnotacaoListaRow>({
      vazio: t.listaVazia,
      renderItem: (linha) => {
        const locLista = obterLocaleAtual();
        const tl = obterTextosAnotacao(locLista);
        const link = document.createElement('a');
        link.className = 'shell__lista-titulo';
        link.href = hrefParaRota(`/anotacoes/${String(linha.id)}`);
        link.textContent = linha.titulo.trim() !== '' ? linha.titulo : tl.notaSemTituloFallback;

        const modTxt = `${tl.metaModelo}: ${rotuloModeloNotaParaUi(linha.tipo_modelo, locLista)}`;
        const etTxt =
          linha.etiquetas.trim() !== ''
            ? `${tl.metaEtiquetas}: ${linha.etiquetas.trim()}`
            : '';
        const bloco = criarBlocoLista('', [etTxt !== '' ? `${modTxt} · ${etTxt}` : modTxt]);
        bloco.replaceChildren(link, ...Array.from(bloco.querySelectorAll('.shell__lista-sub')));

        const apagar = criarBotaoAcao(tl.apagar, { variant: 'danger' });
        apagar.addEventListener(
          'click',
          () => {
            confirmacao.abrir({
              titulo: tl.confirmarApagarTitulo,
              texto: tl.confirmarApagarDescricao,
              aoConfirmar: async () => {
                await repo.apagarAnotacao(linha.id);
                await recarregar();
              },
            });
          },
          { signal: sinal },
        );

        return criarLinhaLista({
          titulo: bloco,
          meta: new Date(linha.data_modificacao).toLocaleString(localeParaData(locLista)),
          acoes: [apagar],
        });
      },
    });

    const cardLista = criarCardUi({ titulo: t.tituloLista, conteudo: [filtros, vazio, listaAnotacoes.elemento] });
    pagina.corpo.append(cardLista.cartao);
    container.replaceChildren(pagina.raiz, confirmacao.elemento);

    function renderizarModelos(): void {
      const locUi = obterLocaleAtual();
      const tUi = obterTextosAnotacao(locUi);
      const valModPreserve = modeloFilt.value;
      modeloFilt.replaceChildren(Object.assign(document.createElement('option'), { value: '', textContent: tUi.modeloTodos }));
      for (const idMod of IDS_MODELO_NOTA) {
        const o = document.createElement('option');
        o.value = idMod;
        o.textContent = rotuloModeloNotaParaUi(idMod, locUi);
        modeloFilt.append(o);
      }
      modeloFilt.value = [...modeloFilt.options].some((o) => o.value === valModPreserve) ? valModPreserve : '';
    }

    function renderizarPastas(tUi: typeof t): void {
      const escolhaAntes = pastaSel.value;
      pastaSel.replaceChildren(
        Object.assign(document.createElement('option'), { value: '', textContent: tUi.pastaTodas }),
        Object.assign(document.createElement('option'), { value: 'null', textContent: tUi.pastaNenhuma }),
      );
      for (const p of pastas) {
        const opt = document.createElement('option');
        opt.value = String(p.id);
        opt.textContent = p.nome;
        pastaSel.append(opt);
      }
      if ([...pastaSel.options].some((o) => o.value === escolhaAntes)) {
        pastaSel.value = escolhaAntes;
      }
    }

    function atualizarCromListaPorLocale(): void {
      const locUi = obterLocaleAtual();
      const tUi = obterTextosAnotacao(locUi);
      definirTituloDocumentoApp(tUi.tituloLista, locUi);
      pagina.titulo.textContent = tUi.tituloLista;
      linkNova.textContent = tUi.novaNota;
      campoBusca.rotulo.textContent = tUi.buscarTitulo;
      busca.placeholder = tUi.buscarTitulo;
      campoEtq.rotulo.textContent = tUi.buscarEtiquetas;
      buscaEtq.placeholder = tUi.buscarEtiquetas;
      campoModelo.rotulo.textContent = tUi.filtroTipoModelo;
      campoPasta.rotulo.textContent = tUi.pastaLabel;
      arquivTx.textContent = tUi.somenteAtivas;
      cardLista.titulo.textContent = tUi.tituloLista;
      listaAnotacoes.definirTextoVazio(tUi.listaVazia);
      renderizarModelos();
      renderizarPastas(tUi);
      confirmacao.definirTextos({
        titulo: tUi.confirmarApagarTitulo,
        texto: tUi.confirmarApagarDescricao,
        cancelar: tUi.cancelarDialogo,
        confirmar: tUi.apagar,
      });
    }

    async function recarregar(): Promise<void> {
      const locLista = obterLocaleAtual();
      const tl = obterTextosAnotacao(locLista);
      const escModAntes = modeloFilt.value;
      pastas = await repo.listarPastas();
      renderizarPastas(tl);
      modeloFilt.value = [...modeloFilt.options].some((o) => o.value === escModAntes) ? escModAntes : '';

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
          termoEtiquetas: estado.termoEtiquetas.trim() !== '' ? estado.termoEtiquetas.trim() : undefined,
          tipo_modelo: estado.tipoModelo.trim() !== '' ? estado.tipoModelo.trim() : undefined,
          pasta_id: pastaFiltro,
          ocultarArquivadas: estado.ocultarArquivadas,
        });
      } catch {
        listaAnotacoes.limpar();
        vazio.hidden = false;
        vazio.textContent = tl.erroLista;
        return;
      }

      vazio.hidden = true;
      listaAnotacoes.renderizar(linhas);
    }

    busca.addEventListener('input', () => void recarregar(), { signal: sinal });
    buscaEtq.addEventListener('input', () => void recarregar(), { signal: sinal });
    modeloFilt.addEventListener('change', () => void recarregar(), { signal: sinal });
    pastaSel.addEventListener('change', () => void recarregar(), { signal: sinal });
    arquivCk.addEventListener(
      'change',
      () => {
        estado.ocultarArquivadas = arquivCk.checked;
        void recarregar();
      },
      { signal: sinal },
    );

    renderizarModelos();
    registarAoLocaleAtualizado(() => {
      atualizarCromListaPorLocale();
      void recarregar();
    }, sinal);

    if (sinal.aborted) return;
    await recarregar();
  },
  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default listaAnotacoesPagina;
