import type { LocaleId } from '../../modules/shared/ui/locale.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { OpcoesPaginaStub } from '../../modules/shared/ui/textos-paginas-stub.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

/** @deprecated Usar apenas para casos pontuais; preferir página real com texto em `textos-*`. */
export function criarPaginaStub(opcoes: OpcoesPaginaStub): PaginaMontavel {
  return criarPaginaStubDinamica(() => opcoes);
}

/**
 * Placeholder ligado ao idioma (ex.: 404 dinâmica).
 */
export function criarPaginaStubDinamica(
  textoParaLocale: (locale: LocaleId) => OpcoesPaginaStub,
): PaginaMontavel {
  return {
    mount(container, sinal) {
      const renderizar = (): void => {
        if (sinal.aborted) return;
        const op = textoParaLocale(obterLocaleAtual());
        document.title = op.tituloDocumento;
        container.replaceChildren();

        const titulo = document.createElement('h1');
        titulo.className = 'shell__titulo';
        titulo.textContent = op.titulo;

        const texto = document.createElement('p');
        texto.className = 'shell__sub';
        texto.textContent = op.descricao;

        container.append(titulo, texto);
      };

      renderizar();
      registarAoLocaleAtualizado(renderizar, sinal);
    },
    unmount() {
      document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
    },
  };
}
