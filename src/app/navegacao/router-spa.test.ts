import { describe, expect, it } from 'vitest';

import { encaixarPadraoRota } from './router-spa.js';

describe('encaixarPadraoRota', () => {
  it('captura parâmetro :id', () => {
    expect(encaixarPadraoRota('/anotacoes/:id', '/anotacoes/42')).toEqual({ id: '42' });
    expect(encaixarPadraoRota('/anotacoes/:id', '/anotacoes/nova')).toEqual({ id: 'nova' });
  });

  it('não confunde com prefixo mais longo', () => {
    expect(encaixarPadraoRota('/receitas/nova', '/receitas/novamente')).toBeNull();
    expect(encaixarPadraoRota('/receitas/nova', '/receitas/nova')).toEqual({});
  });

  it('wildcard casa tudo', () => {
    expect(encaixarPadraoRota('*', '/qualquer/coisa')).toEqual({});
  });

  it('aceita barra final opcional no padrão', () => {
    expect(encaixarPadraoRota('/metas', '/metas/')).toEqual({});
  });
});
