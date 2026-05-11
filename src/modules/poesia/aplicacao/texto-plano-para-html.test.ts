import { describe, expect, it } from 'vitest';

import { textoPlanoUsuarioParaHtmlSeguro } from './texto-plano-para-html.js';

describe('textoPlanoUsuarioParaHtmlSeguro', () => {
  it('converte texto plano em parágrafos e quebras simples', () => {
    const html = textoPlanoUsuarioParaHtmlSeguro('Linha 1\nLinha 2\n\nOutro bloco');

    expect(html).toContain('<p>Linha 1<br>Linha 2</p>');
    expect(html).toContain('<p>Outro bloco</p>');
  });

  it('escapa HTML do utilizador antes de sanitizar', () => {
    const html = textoPlanoUsuarioParaHtmlSeguro('<img src=x onerror=alert(1)> & "texto"');

    expect(html).not.toContain('<img');
    expect(html).toContain('&lt;img');
    expect(html).toContain('&amp;');
  });
});
