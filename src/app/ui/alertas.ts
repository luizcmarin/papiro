import { criarLinhaLista } from './lista.js';

export interface ItemAlertaLista {
  titulo: string;
  meta: string;
}

export function renderizarAlertasLista(
  container: HTMLElement,
  tituloTexto: string,
  itens: ItemAlertaLista[],
): void {
  container.replaceChildren();
  container.hidden = itens.length === 0;
  if (itens.length === 0) return;

  const titulo = document.createElement('strong');
  titulo.textContent = tituloTexto;

  const lista = document.createElement('ul');
  lista.className = 'shell__lista shell__lista--compacta';
  for (const item of itens) {
    lista.append(criarLinhaLista({ titulo: item.titulo, meta: item.meta }));
  }

  container.append(titulo, lista);
}
