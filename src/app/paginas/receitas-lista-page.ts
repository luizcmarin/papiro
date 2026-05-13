import * as repo from '../../modules/receitas/dados/repositorio.js';
import type { ReceitaListaRow } from '../../modules/receitas/dados/types.js';
import { obterTextosReceitas } from '../../modules/receitas/ui/textos-receitas.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { hrefParaRota } from '../menu-rotas.js';
import { criarDialogoConfirmacao } from '../ui/dialogos.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

const listaReceitasPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    const t = obterTextosReceitas(loc);
    definirTituloDocumentoApp(t.tituloLista, loc);

    const linkNova = document.createElement('a');
    linkNova.className = 'shell__acao-primaria';
    linkNova.href = hrefParaRota('/receitas/nova');
    linkNova.textContent = t.novaReceita;

    const pagina = criarPaginaUi({ titulo: t.tituloLista, acoes: [linkNova] });

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

    const vazio = document.createElement('p');
    vazio.className = 'shell__sub';
    vazio.hidden = true;

    const confirmacao = criarDialogoConfirmacao({
      titulo: t.confirmarApagar,
      texto: t.confirmarApagar,
      cancelar: t.cancelarDialogo,
      confirmar: t.apagar,
      signal: sinal,
    });

    const listaReceitas = criarListaCrud<ReceitaListaRow>({
      vazio: t.listaVazia,
      renderItem: (receita) => {
        const tl = obterTextosReceitas(obterLocaleAtual());
        const link = document.createElement('a');
        link.className = 'shell__lista-titulo';
        link.href = hrefParaRota(`/receitas/${String(receita.id)}`);
        link.textContent = receita.titulo.trim() !== '' ? receita.titulo : tl.semTitulo;
        const apagar = criarBotaoAcao(tl.apagar, { variant: 'danger' });
        apagar.addEventListener(
          'click',
          () => {
            confirmacao.abrir({
              titulo: tl.confirmarApagar,
              texto: tl.confirmarApagar,
              aoConfirmar: async () => {
                await repo.apagarReceita(receita.id);
                await recarregar();
              },
            });
          },
          { signal: sinal },
        );
        return criarLinhaLista({ titulo: link, meta: receita.categoria, acoes: [apagar] });
      },
    });

    const cardLista = criarCardUi({ titulo: t.tituloLista, conteudo: [wrapBusca, vazio, listaReceitas.elemento] });
    pagina.corpo.append(cardLista.cartao);
    container.replaceChildren(pagina.raiz, confirmacao.elemento);

    function atualizarCromListaReceitasPorLocale(): void {
      const locUi = obterLocaleAtual();
      const tr = obterTextosReceitas(locUi);
      definirTituloDocumentoApp(tr.tituloLista, locUi);
      pagina.titulo.textContent = tr.tituloLista;
      linkNova.textContent = tr.novaReceita;
      rotuloBusca.textContent = tr.termoBusca;
      cardLista.titulo.textContent = tr.tituloLista;
      listaReceitas.definirTextoVazio(tr.listaVazia);
      confirmacao.definirTextos({
        titulo: tr.confirmarApagar,
        texto: tr.confirmarApagar,
        cancelar: tr.cancelarDialogo,
        confirmar: tr.apagar,
      });
    }

    async function recarregar(): Promise<void> {
      const tl = obterTextosReceitas(obterLocaleAtual());
      const termoBusca = busca.value.trim();
      let linhas: ReceitaListaRow[];
      try {
        linhas = await repo.listarReceitasParaLista(termoBusca.length > 0 ? { termo: termoBusca } : undefined);
      } catch {
        listaReceitas.limpar();
        vazio.hidden = false;
        vazio.textContent = tl.erroLista;
        return;
      }
      vazio.hidden = true;
      listaReceitas.renderizar(linhas);
    }

    busca.addEventListener('input', () => void recarregar(), { signal: sinal });

    registarAoLocaleAtualizado(() => {
      atualizarCromListaReceitasPorLocale();
      void recarregar();
    }, sinal);

    if (sinal.aborted) return;
    await recarregar();
  },
  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default listaReceitasPagina;
