import type { PaginaMontavel } from './pagina-montavel.js';

let desmontarAtual: (() => void | Promise<void>) | null = null;
let geracaoNavegacao = 0;

/**
 * Troca o conteúdo do outlet: desmonta a página anterior, depois monta a nova.
 * Navegações concorrentes são ignoradas pela geração monotónica.
 */
export async function navegarPara(
  outlet: HTMLElement,
  carregarPagina: () => Promise<PaginaMontavel>,
): Promise<void> {
  const id = ++geracaoNavegacao;

  if (desmontarAtual) {
    await Promise.resolve(desmontarAtual());
    desmontarAtual = null;
  }

  if (id !== geracaoNavegacao) {
    return;
  }

  outlet.replaceChildren();

  const pagina = await carregarPagina();
  if (id !== geracaoNavegacao) {
    await Promise.resolve(pagina.unmount());
    return;
  }

  const controlador = new AbortController();
  desmontarAtual = async () => {
    controlador.abort();
    await Promise.resolve(pagina.unmount());
  };

  await Promise.resolve(pagina.mount(outlet, controlador.signal));
}
