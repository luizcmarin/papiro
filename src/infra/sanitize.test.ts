import { describe, expect, it } from 'vitest';

import { sanitizarHtmlConteudoUtilizador } from './sanitize.js';

describe('sanitizarHtmlConteudoUtilizador', () => {
  it('remove scripts e mantém parágrafos', () => {
    const entrada = '<p>ok</p><script>alert(1)</script><iframe src=x></iframe>';
    const saida = sanitizarHtmlConteudoUtilizador(entrada);
    expect(saida).toContain('ok');
    expect(saida).not.toContain('script');
    expect(saida).not.toContain('iframe');
  });

  it('não permite data:image/png em img', () => {
    const entrada = '<p>x</p><img alt="test" src="data:image/png;base64,Zm9v" />';
    const saida = sanitizarHtmlConteudoUtilizador(entrada);
    expect(saida).not.toContain('png');
    expect(saida).toContain('<p>x</p>');
  });

  it('mantém img webp e svg+xml em base64', () => {
    const webp =
      '<img alt="w" src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4ICAAABAAAAwAQCdASAABAAEADcwLOwA/v9wAAA=" />';
    expect(sanitizarHtmlConteudoUtilizador(webp)).toContain('webp');
    const svg =
      '<img alt="s" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciLz4=" />';
    expect(sanitizarHtmlConteudoUtilizador(svg)).toContain('svg+xml');
  });
});
