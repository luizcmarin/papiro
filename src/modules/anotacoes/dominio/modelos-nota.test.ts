import { describe, expect, it } from 'vitest';

import {
  IDS_MODELO_NOTA,
  esqueletoHtmlSanitizadoModelo,
  rotuloModeloNotaParaUi,
} from './modelos-nota.js';

describe('modelos-nota', () => {
  it('mantém lista de ids estável', () => {
    expect(IDS_MODELO_NOTA.length).toBe(10);
    expect(IDS_MODELO_NOTA[0]).toBe('livre');
    expect(IDS_MODELO_NOTA).toContain('designacao');
    expect(IDS_MODELO_NOTA).toContain('visita_circuito');
  });

  it('desconhecido devolve valor cru no rótulo', () => {
    expect(rotuloModeloNotaParaUi('tipo_custom', 'pt-BR')).toBe('tipo_custom');
  });

  it('rotula livre PT e EN', () => {
    expect(rotuloModeloNotaParaUi('livre', 'pt-BR')).toBe('Livre');
    expect(rotuloModeloNotaParaUi('livre', 'en')).toBe('Blank');
  });

  it('sanitiza esqueleto EN de discurso com heading Theme', () => {
    const html = esqueletoHtmlSanitizadoModelo('pregacao_publica', 'en');
    expect(html).toContain('Theme');
    expect(html.includes('<script')).toBe(false);
  });
});
