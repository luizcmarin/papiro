import type { LocaleId } from './locale.js';
import { obterTextosConfig } from '../../configuracao/ui/textos-config.js';

export interface OpcoesPaginaStub {
  tituloDocumento: string;
  titulo: string;
  descricao: string;
}

export function obterOpcoesPaginaRotaNaoEncontrada(locale: LocaleId): OpcoesPaginaStub {
  const nomeApp = obterTextosConfig(locale).appNomeTituloDoc;
  if (locale === 'en') {
    return {
      tituloDocumento: `Page not found — ${nomeApp}`,
      titulo: 'Page not found',
      descricao: 'Use the menu to navigate; this route does not exist.',
    };
  }
  return {
    tituloDocumento: `Página não encontrada — ${nomeApp}`,
    titulo: 'Página não encontrada',
    descricao: 'Use o menu para navegar. Esta rota não existe.',
  };
}
