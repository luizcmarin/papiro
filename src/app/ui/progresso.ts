export interface OpcoesResumoProgresso {
  titulo: string;
  rotulo: string;
  atual: number;
  total: number;
}

export function percentualProgresso(atual: number, total: number): number {
  if (total <= 0) return 0;

  return Math.round((Math.min(Math.max(0, atual), total) * 100) / total);
}

export function criarResumoProgresso(opcoes: OpcoesResumoProgresso): DocumentFragment {
  const pct = percentualProgresso(opcoes.atual, opcoes.total);
  const frag = document.createDocumentFragment();

  const titulo = document.createElement('span');
  titulo.textContent = opcoes.titulo;

  const meta = document.createElement('span');
  meta.className = 'shell__lista-meta';
  meta.textContent = `${opcoes.rotulo}: ${opcoes.atual}/${opcoes.total} · ${pct}%`;

  const barra = document.createElement('progress');
  barra.className = 'shell__progresso';
  barra.max = 100;
  barra.value = pct;

  frag.append(titulo, meta, barra);
  return frag;
}
