import '@awesome.me/webawesome/dist/components/button/button.js';

import { criarEmptyState } from './layout.js';

export interface ListaCrud<TItem> {
  elemento: HTMLElement;
  renderizar: (itens: TItem[]) => void;
  definirTextoVazio: (texto: string) => void;
  limpar: () => void;
}

export interface OpcoesListaCrud<TItem> {
  vazio: string;
  classeLista?: string;
  renderItem: (item: TItem) => HTMLElement;
}

export function criarBotaoAcao(texto: string, opcoes?: { variant?: string; appearance?: string }): HTMLElement {
  const botao = document.createElement('wa-button');
  if (opcoes?.variant) botao.setAttribute('variant', opcoes.variant);
  if (opcoes?.appearance) botao.setAttribute('appearance', opcoes.appearance);
  botao.textContent = texto;
  return botao;
}

export function criarListaCrud<TItem>(opcoes: OpcoesListaCrud<TItem>): ListaCrud<TItem> {
  const lista = document.createElement('ul');
  lista.className = opcoes.classeLista ?? 'shell__lista';
  let textoVazio = opcoes.vazio;

  function renderizar(itens: TItem[]): void {
    lista.replaceChildren();
    if (itens.length === 0) {
      const li = document.createElement('li');
      li.append(criarEmptyState(textoVazio));
      lista.append(li);
      return;
    }

    for (const item of itens) {
      lista.append(opcoes.renderItem(item));
    }
  }

  return {
    elemento: lista,
    renderizar,
    definirTextoVazio: (texto) => {
      textoVazio = texto;
    },
    limpar: () => lista.replaceChildren(),
  };
}

export function criarLinhaLista(opcoes: {
  titulo: string | Node;
  meta?: string | Node;
  acoes?: Node[];
}): HTMLLIElement {
  const li = document.createElement('li');
  li.className = 'shell__lista-linha';

  const titulo =
    typeof opcoes.titulo === 'string'
      ? Object.assign(document.createElement('span'), {
          className: 'shell__lista-titulo',
          textContent: opcoes.titulo,
        })
      : opcoes.titulo;

  const meta =
    opcoes.meta === undefined
      ? document.createElement('span')
      : typeof opcoes.meta === 'string'
        ? Object.assign(document.createElement('span'), {
            className: 'shell__lista-meta',
            textContent: opcoes.meta,
          })
        : opcoes.meta;

  const acoes = document.createElement('div');
  acoes.className = 'shell__lista-acoes';
  if (opcoes.acoes) acoes.append(...opcoes.acoes);

  li.append(titulo, meta, acoes);
  return li;
}

export function criarBlocoLista(tituloTexto: string, detalhes: string[] = []): HTMLElement {
  const bloco = document.createElement('span');
  bloco.className = 'shell__lista-bloco';

  const titulo = document.createElement('span');
  titulo.className = 'shell__lista-titulo';
  titulo.textContent = tituloTexto;
  bloco.append(titulo);

  for (const detalheTexto of detalhes.filter(Boolean)) {
    const detalhe = document.createElement('span');
    detalhe.className = 'shell__lista-sub';
    detalhe.textContent = detalheTexto;
    bloco.append(detalhe);
  }

  return bloco;
}
