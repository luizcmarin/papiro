import * as repo from '../../modules/preparacao/dados/repositorio.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';

const preparacaoCofrePagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    const pagina = criarPaginaUi({ titulo: t0.cofreTitulo });
    const textoCofre = document.createElement('p');
    textoCofre.className = 'shell__empty';

    pagina.corpo.append(criarCardUi({ titulo: t0.cofreTitulo, conteudo: [textoCofre] }));
    container.replaceChildren(pagina.raiz);

    async function recarregar(): Promise<void> {
      const textos = tx();
      document.title = `${textos.cofreTitulo} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      pagina.titulo.textContent = textos.cofreTitulo;
      textoCofre.textContent = `${String(await repo.contarLinhasCofre())} — ${textos.cofreStub}`;
    }

    registarAoLocaleAtualizado(() => void recarregar(), sinal);
    await recarregar();
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default preparacaoCofrePagina;
