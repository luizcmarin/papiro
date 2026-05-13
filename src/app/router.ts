import { ITENS_MENU_ROTAS } from './menu-rotas.js';
import {
  despacharPathAtual,
  iniciarHistoricoPopstateEClicks,
  registarRota,
} from './navegacao/router-spa.js';
import type { ParamsRota } from './navegacao/router-spa.js';
import { navegarPara } from './outlet.js';
import type { PaginaMontavel } from './pagina-montavel.js';

let routerSpaMontado = false;

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
 * Regista rotas da SPA (History API + captura de `<a>` mesma origem sob o `base` do Vite).
 */
export function iniciarRouter(raiz: HTMLElement): void {
  if (routerSpaMontado) {
    despacharPathAtual();
    return;
  }
  routerSpaMontado = true;

  const outlet = raiz.querySelector<HTMLElement>('#outlet-papiro');
  if (!outlet) {
    throw new Error('Elemento #outlet-papiro não encontrado no shell.');
  }

  /* Rotas mais específicas antes das parametrizadas. */
  registarRota('/anotacoes/nova', () => {
    irParaOutlet(raiz, outlet, async () =>
      (await import('./paginas/editor-anotacao-page.js')).criarPaginaEditorAnotacao({ modo: 'novo' }),
    );
  });

  registarRota('/anotacoes/:id', (params: ParamsRota) => {
    const brutoId = params.id ?? '';
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

  registarRota('/receitas/nova', () => {
    irParaOutlet(raiz, outlet, async () =>
      (await import('./paginas/receita-detalhe-page.js')).criarPaginaReceitaDetalhe({ modo: 'novo' }),
    );
  });

  registarRota('/receitas/:id', (params: ParamsRota) => {
    const bruto = params.id ?? '';
    const idReceita = Number(bruto);
    if (!Number.isFinite(idReceita) || idReceita <= 0) {
      irParaOutlet(raiz, outlet, async () =>
        (await import('./paginas/rota-nao-encontrada-page.js')).default,
      );
      return;
    }
    irParaOutlet(raiz, outlet, async () =>
      (await import('./paginas/receita-detalhe-page.js')).criarPaginaReceitaDetalhe({
        modo: 'editar',
        idExistente: idReceita,
      }),
    );
  });

  for (const item of ITENS_MENU_ROTAS) {
    const handler = (): void =>
      irParaOutlet(raiz, outlet, async () => (await item.importPagina()).default);
    for (const caminho of item.caminhos) {
      registarRota(caminho, handler);
    }
  }

  registarRota('*', () =>
    irParaOutlet(raiz, outlet, async () =>
      (await import('./paginas/rota-nao-encontrada-page.js')).default,
    ),
  );

  iniciarHistoricoPopstateEClicks();
  despacharPathAtual();
}

export { navegar } from './navegacao/router-spa.js';
