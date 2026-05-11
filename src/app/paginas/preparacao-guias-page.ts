import * as repo from '../../modules/preparacao/dados/repositorio.js';
import type { GuiaResumoRow } from '../../modules/preparacao/dados/types.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { abrirModal } from '../ui/dialogos.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { criarLinhaLista, criarListaCrud } from '../ui/lista.js';

const preparacaoGuiasPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    const pagina = criarPaginaUi({ titulo: t0.guiasTitulo });
    const preGuia = document.createElement('pre');
    preGuia.className = 'shell__sub';
    preGuia.style.whiteSpace = 'pre-wrap';

    const dialogoGuia = document.createElement('wa-dialog');
    dialogoGuia.setAttribute('label', t0.detalheGuiaTitulo);
    dialogoGuia.append(preGuia);

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
            dialogoGuia.setAttribute('label', `${textos.detalheGuiaTitulo}: ${detalhe?.titulo ?? ''}`);
            preGuia.textContent = detalhe?.texto ?? '-';
            abrirModal(dialogoGuia);
          },
          { signal: sinal },
        );
        return criarLinhaLista({ titulo: abrir });
      },
    });

    pagina.corpo.append(criarCardUi({ titulo: t0.guiasTitulo, conteudo: [listaGuias.elemento] }));
    container.replaceChildren(pagina.raiz, dialogoGuia);

    async function recarregar(): Promise<void> {
      const textos = tx();
      document.title = `${textos.guiasTitulo} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      pagina.titulo.textContent = textos.guiasTitulo;
      listaGuias.definirTextoVazio(textos.guiasVazio);
      dialogoGuia.setAttribute('label', textos.detalheGuiaTitulo);
      listaGuias.renderizar(await repo.listarGuiasResumo());
    }

    registarAoLocaleAtualizado(() => void recarregar(), sinal);
    await recarregar();
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default preparacaoGuiasPagina;
