import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

type WaDialogLike = HTMLElement & { show?: () => void; hide?: () => void; open?: boolean };

function abrirDialogo(el: HTMLElement): void {
  const dlg = el as WaDialogLike;
  if (typeof dlg.show === 'function') {
    dlg.show();
  } else {
    dlg.open = true;
    el.setAttribute('open', '');
  }
}

function fecharDialogo(el: HTMLElement): void {
  const dlg = el as WaDialogLike;
  if (typeof dlg.hide === 'function') {
    dlg.hide();
  } else {
    dlg.open = false;
    el.removeAttribute('open');
  }
}

export interface DialogoFormulario {
  elemento: HTMLElement;
  corpo: HTMLElement;
  abrir: () => void;
  fechar: () => void;
  definirTitulo: (titulo: string) => void;
  botaoConfirmar: HTMLElement;
  botaoCancelar: HTMLElement;
}

export interface OpcoesDialogoFormulario {
  titulo: string;
  confirmarTexto: string;
  cancelarTexto: string;
  conteudo: Node[];
  aoConfirmar: () => false | void | Promise<false | void>;
  signal?: AbortSignal;
}

export function criarDialogoFormulario(opcoes: OpcoesDialogoFormulario): DialogoFormulario {
  const dialogo = document.createElement('wa-dialog');
  dialogo.setAttribute('label', opcoes.titulo);

  const corpo = document.createElement('div');
  corpo.className = 'shell__dialog-corpo shell__stack';
  corpo.append(...opcoes.conteudo);

  const rodape = document.createElement('div');
  rodape.slot = 'footer';
  rodape.className = 'shell__dialog-footer';

  const cancelar = document.createElement('wa-button');
  cancelar.setAttribute('variant', 'neutral');
  cancelar.textContent = opcoes.cancelarTexto;

  const confirmar = document.createElement('wa-button');
  confirmar.setAttribute('variant', 'brand');
  confirmar.textContent = opcoes.confirmarTexto;

  rodape.append(cancelar, confirmar);
  dialogo.append(corpo, rodape);

  cancelar.addEventListener('click', () => fecharDialogo(dialogo), { signal: opcoes.signal });
  confirmar.addEventListener(
    'click',
    async () => {
      const deveFechar = await opcoes.aoConfirmar();
      if (deveFechar === false) return;
      fecharDialogo(dialogo);
    },
    { signal: opcoes.signal },
  );

  return {
    elemento: dialogo,
    corpo,
    abrir: () => abrirDialogo(dialogo),
    fechar: () => fecharDialogo(dialogo),
    definirTitulo: (titulo: string) => dialogo.setAttribute('label', titulo),
    botaoConfirmar: confirmar,
    botaoCancelar: cancelar,
  };
}

export interface DialogoConfirmacao {
  elemento: HTMLElement;
  abrir: (opcoes?: { titulo?: string; texto?: string; aoConfirmar?: () => void | Promise<void> }) => void;
  fechar: () => void;
  definirTextos: (opcoes: { titulo: string; texto: string; cancelar: string; confirmar: string }) => void;
}

export function criarDialogoConfirmacao(opcoes: {
  titulo: string;
  texto: string;
  cancelar: string;
  confirmar: string;
  signal?: AbortSignal;
}): DialogoConfirmacao {
  const dialogo = document.createElement('wa-dialog');
  dialogo.setAttribute('label', opcoes.titulo);

  const p = document.createElement('p');
  p.textContent = opcoes.texto;

  const rodape = document.createElement('div');
  rodape.slot = 'footer';
  rodape.className = 'shell__dialog-footer';

  const cancelar = document.createElement('wa-button');
  cancelar.setAttribute('variant', 'neutral');
  cancelar.textContent = opcoes.cancelar;

  const confirmar = document.createElement('wa-button');
  confirmar.setAttribute('variant', 'danger');
  confirmar.textContent = opcoes.confirmar;

  rodape.append(cancelar, confirmar);
  dialogo.append(p, rodape);

  let aoConfirmarAtual: (() => void | Promise<void>) | null = null;

  cancelar.addEventListener('click', () => fecharDialogo(dialogo), { signal: opcoes.signal });
  confirmar.addEventListener(
    'click',
    async () => {
      await Promise.resolve(aoConfirmarAtual?.());
      aoConfirmarAtual = null;
      fecharDialogo(dialogo);
    },
    { signal: opcoes.signal },
  );

  return {
    elemento: dialogo,
    abrir: (novasOpcoes) => {
      if (novasOpcoes?.titulo) dialogo.setAttribute('label', novasOpcoes.titulo);
      if (novasOpcoes?.texto) p.textContent = novasOpcoes.texto;
      aoConfirmarAtual = novasOpcoes?.aoConfirmar ?? null;
      abrirDialogo(dialogo);
    },
    fechar: () => fecharDialogo(dialogo),
    definirTextos: (textos) => {
      dialogo.setAttribute('label', textos.titulo);
      p.textContent = textos.texto;
      cancelar.textContent = textos.cancelar;
      confirmar.textContent = textos.confirmar;
    },
  };
}

export interface DialogoInformativo {
  elemento: HTMLElement;
  abrir: () => void;
  fechar: () => void;
  definirTitulo: (titulo: string) => void;
}

export function criarDialogoInformativo(opcoes: { titulo: string; conteudo: Node[] }): DialogoInformativo {
  const dialogo = document.createElement('wa-dialog');
  dialogo.setAttribute('label', opcoes.titulo);
  dialogo.append(...opcoes.conteudo);

  return {
    elemento: dialogo,
    abrir: () => abrirDialogo(dialogo),
    fechar: () => fecharDialogo(dialogo),
    definirTitulo: (titulo) => dialogo.setAttribute('label', titulo),
  };
}

export function abrirModal(el: HTMLElement): void {
  abrirDialogo(el);
}

export function fecharModal(el: HTMLElement): void {
  fecharDialogo(el);
}
