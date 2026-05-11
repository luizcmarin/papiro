export interface CampoFormulario<TValor> {
  elemento: HTMLElement;
  input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
  valor: () => TValor;
  definirValor: (valor: TValor) => void;
  definirRotulo: (rotulo: string) => void;
  definirPlaceholder: (placeholder: string) => void;
  limpar: () => void;
}

function criarBaseCampo(rotulo: string, input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement): {
  wrapper: HTMLElement;
  rotuloEl: HTMLElement;
} {
  const label = document.createElement('label');
  label.className = 'shell__campo';

  const span = document.createElement('span');
  span.className = 'shell__etiqueta';
  span.textContent = rotulo;

  label.append(span, input);
  return { wrapper: label, rotuloEl: span };
}

export function criarCampoTexto(opcoes: {
  rotulo: string;
  valorInicial?: string;
  placeholder?: string;
  linhas?: number;
}): CampoFormulario<string> {
  const input =
    opcoes.linhas && opcoes.linhas > 1
      ? document.createElement('textarea')
      : document.createElement('input');

  input.className = opcoes.linhas && opcoes.linhas > 1 ? 'shell__textarea' : 'shell__input-texto';
  input.placeholder = opcoes.placeholder ?? opcoes.rotulo;
  input.value = opcoes.valorInicial ?? '';
  if (input instanceof HTMLTextAreaElement) input.rows = opcoes.linhas ?? 3;
  if (input instanceof HTMLInputElement) input.type = 'text';
  const base = criarBaseCampo(opcoes.rotulo, input);

  return {
    elemento: base.wrapper,
    input,
    valor: () => input.value.trim(),
    definirValor: (valor) => {
      input.value = valor;
    },
    definirRotulo: (rotulo) => {
      base.rotuloEl.textContent = rotulo;
    },
    definirPlaceholder: (placeholder) => {
      input.placeholder = placeholder;
    },
    limpar: () => {
      input.value = '';
    },
  };
}

export function criarCampoNumero(opcoes: {
  rotulo: string;
  valorInicial?: number;
  placeholder?: string;
  min?: number;
  step?: string;
}): CampoFormulario<number> {
  const input = document.createElement('input');
  input.type = 'number';
  input.className = 'shell__input-texto';
  input.placeholder = opcoes.placeholder ?? opcoes.rotulo;
  input.value = opcoes.valorInicial === undefined ? '' : String(opcoes.valorInicial);
  if (opcoes.min !== undefined) input.min = String(opcoes.min);
  if (opcoes.step) input.step = opcoes.step;
  const base = criarBaseCampo(opcoes.rotulo, input);

  return {
    elemento: base.wrapper,
    input,
    valor: () => Number(input.value),
    definirValor: (valor) => {
      input.value = String(valor);
    },
    definirRotulo: (rotulo) => {
      base.rotuloEl.textContent = rotulo;
    },
    definirPlaceholder: (placeholder) => {
      input.placeholder = placeholder;
    },
    limpar: () => {
      input.value = '';
    },
  };
}

export function criarCampoData(opcoes: {
  rotulo: string;
  valorInicial?: string;
  placeholder?: string;
}): CampoFormulario<string> {
  const input = document.createElement('input');
  input.type = 'date';
  input.className = 'shell__input-texto';
  input.placeholder = opcoes.placeholder ?? opcoes.rotulo;
  input.value = opcoes.valorInicial ?? '';
  const base = criarBaseCampo(opcoes.rotulo, input);

  return {
    elemento: base.wrapper,
    input,
    valor: () => input.value,
    definirValor: (valor) => {
      input.value = valor;
    },
    definirRotulo: (rotulo) => {
      base.rotuloEl.textContent = rotulo;
    },
    definirPlaceholder: (placeholder) => {
      input.placeholder = placeholder;
    },
    limpar: () => {
      input.value = '';
    },
  };
}

export function criarFormGrid(...campos: Node[]): HTMLElement {
  const form = document.createElement('div');
  form.className = 'shell__form-grid';
  form.append(...campos);
  return form;
}

export function limparCampos(...campos: Array<CampoFormulario<unknown>>): void {
  for (const campo of campos) {
    campo.limpar();
  }
}
