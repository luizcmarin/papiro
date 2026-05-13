import { describe, expect, it } from 'vitest';

import { criarLinkWhatsApp, criarVCardDoPerfil, normalizarTelefoneParaWhatsApp } from './vcard.js';
import type { MeuPerfilRow } from '../../perfil/dados/types.js';

const perfil: MeuPerfilRow = {
  id: 1,
  nome: 'Marin',
  telefone: '+55 (11) 99999-0000',
  email: 'marin@example.com',
  link: 'https://example.com',
  comentario: '',
  nomeSecretario: '',
  telefoneSecretario: '',
  tipoSanguineo: '',
  alergias: '',
  medicamentosEmUso: '',
  observacoesMedicas: '',
  recusaTransfusao: 1,
  fracoesAceitas: '',
  uriScanDpa: '',
  contatoEmergencia: 'ICE',
  contatoEmergenciaTelefone: '+55 11 98888-0000',
  nomeColih: '',
  telefoneColih: '',
  dpaCategoriaAtualizado: 0,
};

describe('vcard', () => {
  it('normaliza telefone e monta link WhatsApp', () => {
    expect(normalizarTelefoneParaWhatsApp('+55 (11) 99999-0000')).toBe('5511999990000');
    expect(criarLinkWhatsApp('+55 (11) 99999-0000', 'Olá')).toBe('https://wa.me/5511999990000?text=Ol%C3%A1');
  });

  it('cria vCard a partir do perfil', () => {
    const vcard = criarVCardDoPerfil(perfil);
    expect(vcard).toContain('BEGIN:VCARD');
    expect(vcard).toContain('FN:Marin');
    expect(vcard).toContain('NOTE:ICE ICE +55 11 98888-0000');
  });
});

