import type { MeuPerfilRow } from '../../perfil/dados/types.js';

function limparLinha(valor: string): string {
  return valor.replace(/\r?\n/g, ' ').trim();
}

export function normalizarTelefoneParaWhatsApp(telefone: string): string {
  return telefone.replace(/\D/g, '');
}

export function criarLinkWhatsApp(telefone: string, mensagem = ''): string {
  const numero = normalizarTelefoneParaWhatsApp(telefone);
  const params = mensagem.trim() ? `?text=${encodeURIComponent(mensagem.trim())}` : '';
  return `https://wa.me/${numero}${params}`;
}

export function criarVCardDoPerfil(perfil: MeuPerfilRow): string {
  const linhas = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${limparLinha(perfil.nome)}`,
    perfil.telefone ? `TEL;TYPE=CELL:${limparLinha(perfil.telefone)}` : '',
    perfil.email ? `EMAIL:${limparLinha(perfil.email)}` : '',
    perfil.link ? `URL:${limparLinha(perfil.link)}` : '',
    perfil.contatoEmergencia
      ? `NOTE:ICE ${limparLinha(perfil.contatoEmergencia)} ${limparLinha(perfil.contatoEmergenciaTelefone)}`
      : '',
    'END:VCARD',
  ].filter(Boolean);
  return `${linhas.join('\n')}\n`;
}

