import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosQr {
  tituloPagina: string;
  descricao: string;
  rotuloEntrada: string;
  hintEntrada: string;
  gerar: string;
  descarregarSvg: string;
  descarregarPng: string;
  erroGerar: string;
  vazio: string;
}

const PT: TextosQr = {
  tituloPagina: 'QR Code',
  descricao:
    'Gera um código QR neste dispositivo a partir do texto ou da ligação. Funciona offline depois da primeira visita ao painel.',
  rotuloEntrada: 'Conteúdo',
  hintEntrada: 'Texto, URL, dados de emergência curtos…',
  gerar: 'Atualização contínua',
  descarregarSvg: 'Descarregar SVG',
  descarregarPng: 'Descarregar PNG',
  erroGerar: 'Não foi possível criar o QR. Reduza o tamanho do texto.',
  vazio: 'Escreva algo à esquerda para ver o código.',
};

const EN: TextosQr = {
  tituloPagina: 'QR code',
  descricao:
    'Builds a QR code on-device from plain text or a URL. Offline after your first load of this screen.',
  rotuloEntrada: 'Payload',
  hintEntrada: 'Plain text, URL, short emergency snippet…',
  gerar: 'Live update',
  descarregarSvg: 'Download SVG',
  descarregarPng: 'Download PNG',
  erroGerar: 'Could not build the QR. Try shorter content.',
  vazio: 'Type content on the left to render the code.',
};

export function obterTextosQr(locale: LocaleId): TextosQr {
  return locale === 'en' ? EN : PT;
}
