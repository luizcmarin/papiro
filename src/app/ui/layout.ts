import '@awesome.me/webawesome/dist/components/card/card.js';

export interface PaginaUi {
  raiz: HTMLElement;
  titulo: HTMLHeadingElement;
  subtitulo: HTMLParagraphElement;
  acoes: HTMLElement;
  corpo: HTMLElement;
}

export interface OpcoesPaginaUi {
  titulo: string;
  subtitulo?: string;
  acoes?: Node[];
}

export interface OpcoesCardUi {
  titulo: string;
  descricao?: string;
  conteudo?: Node[];
  acoes?: Node[];
}

export function criarTituloSecao(texto: string): HTMLHeadingElement {
  const h = document.createElement('h2');
  h.className = 'shell__subtitulo';
  h.textContent = texto;
  return h;
}

export function criarStack(...filhos: Node[]): HTMLElement {
  const el = document.createElement('div');
  el.className = 'shell__stack';
  el.append(...filhos);
  return el;
}

export function criarGrid(...filhos: Node[]): HTMLElement {
  const el = document.createElement('div');
  el.className = 'shell__grid';
  el.append(...filhos);
  return el;
}

export function criarEmptyState(texto: string): HTMLElement {
  const p = document.createElement('p');
  p.className = 'shell__empty';
  p.textContent = texto;
  return p;
}

export function criarErroState(texto: string): HTMLElement {
  const p = document.createElement('p');
  p.className = 'shell__empty shell__empty--erro';
  p.setAttribute('role', 'alert');
  p.textContent = texto;
  return p;
}

export function criarPaginaUi(opcoes: OpcoesPaginaUi): PaginaUi {
  const raiz = document.createElement('div');
  raiz.className = 'shell__pagina';

  const cabecalho = document.createElement('div');
  cabecalho.className = 'shell__page-header';

  const blocoTitulo = document.createElement('div');
  blocoTitulo.className = 'shell__stack shell__stack--compacta';

  const titulo = document.createElement('h1');
  titulo.className = 'shell__titulo';
  titulo.textContent = opcoes.titulo;

  const subtitulo = document.createElement('p');
  subtitulo.className = 'shell__sub';
  subtitulo.textContent = opcoes.subtitulo ?? '';
  subtitulo.hidden = !opcoes.subtitulo;

  blocoTitulo.append(titulo, subtitulo);

  const acoes = document.createElement('div');
  acoes.className = 'shell__acoes';
  if (opcoes.acoes) {
    acoes.append(...opcoes.acoes);
  }

  cabecalho.append(blocoTitulo, acoes);

  const corpo = document.createElement('div');
  corpo.className = 'shell__stack';

  raiz.append(cabecalho, corpo);
  return { raiz, titulo, subtitulo, acoes, corpo };
}

export function criarCardUi(opcoes: OpcoesCardUi): HTMLElement {
  const card = document.createElement('wa-card');
  card.className = 'shell__cartao';
  card.setAttribute('appearance', 'filled-outlined');

  const cabecalho = document.createElement('div');
  cabecalho.slot = 'header';
  cabecalho.className = 'shell__card-header';

  const blocoTitulo = document.createElement('div');
  blocoTitulo.className = 'shell__stack shell__stack--compacta';
  blocoTitulo.append(criarTituloSecao(opcoes.titulo));

  if (opcoes.descricao) {
    const desc = document.createElement('p');
    desc.className = 'shell__sub';
    desc.textContent = opcoes.descricao;
    blocoTitulo.append(desc);
  }

  const acoes = document.createElement('div');
  acoes.className = 'shell__card-actions';
  if (opcoes.acoes) {
    acoes.append(...opcoes.acoes);
  }

  cabecalho.append(blocoTitulo, acoes);

  const corpo = criarStack(...(opcoes.conteudo ?? []));
  card.append(cabecalho, corpo);
  return card;
}
