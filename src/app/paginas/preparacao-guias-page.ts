import * as repo from '../../modules/preparacao/dados/repositorio.js';
import type { GuiaResumoRow } from '../../modules/preparacao/dados/types.js';
import { sanitizarHtmlConteudoUtilizador } from '../../infra/sanitize.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { criarDialogoInformativo } from '../ui/dialogos.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';
import { criarLinhaLista, criarListaCrud } from '../ui/lista.js';

const preparacaoGuiasPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    const pagina = criarPaginaUi({ titulo: t0.guiasTitulo });
    const corpoGuia = document.createElement('div');
    corpoGuia.className = 'shell__corpo-html-san shell__pre-wrap';
    const dialogoGuia = criarDialogoInformativo({ titulo: t0.detalheGuiaTitulo, conteudo: [corpoGuia] });

    const listaGuias = criarListaCrud<GuiaResumoRow>({
      vazio: t0.guiasVazio,
      renderItem: (guia) => {
        const abrir = document.createElement('button');
        abrir.type = 'button';
        abrir.className = 'shell__lista-titulo shell__lista-botao';
        abrir.setAttribute('aria-label', tx().abrirGuiaAria);
        abrir.textContent = `${guia.id} · ${guia.titulo}`;
        abrir.addEventListener(
          'click',
          async () => {
            const textos = tx();
            const detalhe = await repo.obterGuiaPorId(guia.id);
            dialogoGuia.definirTitulo(`${textos.detalheGuiaTitulo}: ${detalhe?.titulo ?? ''}`);
            corpoGuia.innerHTML = sanitizarHtmlConteudoUtilizador(
              detalhe?.texto.trim().startsWith('<') ? detalhe.texto : `<p>${detalhe?.texto ?? '-'}</p>`,
            );
            dialogoGuia.abrir();
          },
          { signal: sinal },
        );
        return criarLinhaLista({ titulo: abrir });
      },
    });

    pagina.corpo.append(criarCardUi({ titulo: t0.guiasTitulo, conteudo: [listaGuias.elemento] }).cartao);
    container.replaceChildren(pagina.raiz, dialogoGuia.elemento);

    async function recarregar(): Promise<void> {
      const textos = tx();
      definirTituloDocumentoApp(textos.guiasTitulo);
      pagina.titulo.textContent = textos.guiasTitulo;
      listaGuias.definirTextoVazio(textos.guiasVazio);
      dialogoGuia.definirTitulo(textos.detalheGuiaTitulo);
      listaGuias.renderizar(await repo.listarGuiasResumo());
    }

    registarAoLocaleAtualizado(() => void recarregar(), sinal);
    await recarregar();
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default preparacaoGuiasPagina;
