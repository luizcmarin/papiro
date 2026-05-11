import page from 'page';
import type { Context } from 'page';

import { ITENS_MENU_ROTAS, prefixoBaseUrl } from './menu-rotas.js';
import { navegarPara } from './outlet.js';
import type { PaginaMontavel } from './pagina-montavel.js';

function fecharDrawer(raiz: HTMLElement): void {
  const drawer = raiz.querySelector('#drawer-nav');
  if (drawer instanceof HTMLElement) {
    (drawer as HTMLElement & { open: boolean }).open = false;
  }
}

function irParaOutlet(
  raiz: HTMLElement,
  outlet: HTMLElement,
  criarPagina: () => Promise<PaginaMontavel>,
): void {
  fecharDrawer(raiz);
  void navegarPara(outlet, criarPagina);
}

/**
 * Regista rotas Page.js e inicia o router (History + cliques em `<a>` mesma origem).
 */
export function iniciarRouter(raiz: HTMLElement): void {
  const outlet = raiz.querySelector<HTMLElement>('#outlet-papiro');
  if (!outlet) {
    throw new Error('Elemento #outlet-papiro não encontrado no shell.');
  }

  const base = prefixoBaseUrl();
  page.base(base);

  /* Rotas mais específicas antes das parametrizadas (Wave 1). */
  page('/anotacoes/nova', () => {
    irParaOutlet(raiz, outlet, async () =>
      (await import('./paginas/editor-anotacao-page.js')).criarPaginaEditorAnotacao({ modo: 'novo' }),
    );
  });

  page('/anotacoes/:id', (ctx: Context) => {
    const brutoId = typeof ctx.params.id === 'string' ? ctx.params.id : '';
    const idNota = Number(brutoId);
    if (!Number.isFinite(idNota) || idNota <= 0) {
      irParaOutlet(raiz, outlet, async () =>
        (await import('./paginas/rota-nao-encontrada-page.js')).default,
      );
      return;
    }
    irParaOutlet(raiz, outlet, async () =>
      (
        await import('./paginas/editor-anotacao-page.js')
      ).criarPaginaEditorAnotacao({ modo: 'editar', idExistente: idNota }),
    );
  });

  page('/receitas/nova', () => {
    irParaOutlet(raiz, outlet, async () =>
      (
        await import('./paginas/receita-detalhe-page.js')
      ).criarPaginaReceitaDetalhe({ modo: 'novo' }),
    );
  });

  page('/receitas/:id', (ctx: Context) => {
    const bruto = typeof ctx.params.id === 'string' ? ctx.params.id : '';
    const idReceita = Number(bruto);
    if (!Number.isFinite(idReceita) || idReceita <= 0) {
      irParaOutlet(raiz, outlet, async () =>
        (await import('./paginas/rota-nao-encontrada-page.js')).default,
      );
      return;
    }
    irParaOutlet(raiz, outlet, async () =>
      (
        await import('./paginas/receita-detalhe-page.js')
      ).criarPaginaReceitaDetalhe({ modo: 'editar', idExistente: idReceita }),
    );
  });

  for (const item of ITENS_MENU_ROTAS) {
    const handler = () =>
      irParaOutlet(raiz, outlet, async () => (await item.importPagina()).default);
    for (const caminho of item.caminhos) {
      page(caminho, handler);
    }
  }

  page(
    '*',
    () =>
      irParaOutlet(raiz, outlet, async () =>
        (await import('./paginas/rota-nao-encontrada-page.js')).default,
      ),
  );

  page.start();
}
