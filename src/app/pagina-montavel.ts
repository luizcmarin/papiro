/**
 * Contrato de cada ecrã montável pela SPA (ver DOCUMENTACAO.md §5).
 * `unmount` deve libertar editores, gráficos e referências a strings grandes.
 */
export interface PaginaMontavel {
  mount(container: HTMLElement, sinal: AbortSignal): void | Promise<void>;
  unmount(): void | Promise<void>;
}
