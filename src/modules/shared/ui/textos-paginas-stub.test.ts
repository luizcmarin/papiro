import { describe, expect, it } from 'vitest';

import { obterOpcoesPaginaRotaNaoEncontrada } from './textos-paginas-stub.js';

describe('textos-paginas-stub', () => {
  it('404 bilingue', () => {
    expect(obterOpcoesPaginaRotaNaoEncontrada('pt-BR').titulo).toBe('Página não encontrada');
    expect(obterOpcoesPaginaRotaNaoEncontrada('en').titulo).toBe('Page not found');
  });
});
