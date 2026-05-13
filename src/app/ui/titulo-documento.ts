import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { LocaleId } from '../../modules/shared/ui/locale.js';
import { obterLocaleAtual } from '../../modules/shared/ui/locale.js';

/** `Secção — Nome da app` no separador do browser. */
export function definirTituloDocumentoApp(tituloPagina: string, locale?: LocaleId): void {
  const loc = locale ?? obterLocaleAtual();
  const app = obterTextosConfig(loc).appNomeTituloDoc;
  document.title = `${tituloPagina} — ${app}`;
}

/** Só o nome da app (ex.: ao sair de um ecrã). */
export function reporTituloDocumentoSoNomeApp(locale?: LocaleId): void {
  const loc = locale ?? obterLocaleAtual();
  document.title = obterTextosConfig(loc).appNomeTituloDoc;
}
