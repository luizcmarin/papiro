import type { LocaleId } from './locale.js';

/** Chaves estáveis alinhadas a `menu-rotas.ts` (não usar como texto direto na UI). */
export type ChaveNav =
  | 'dashboard'
  | 'anotacoes'
  | 'estudo'
  | 'ministerio'
  | 'financeiro'
  | 'metas'
  | 'receitas'
  | 'preparacao'
  | 'preparacaoGuias'
  | 'preparacaoCofre'
  | 'quiz'
  | 'poesia'
  | 'perfil'
  | 'qr'
  | 'configuracoes';

const PT: Record<ChaveNav, string> = {
  dashboard: 'Dashboard',
  anotacoes: 'Anotações',
  estudo: 'Estudo',
  ministerio: 'Ministério',
  financeiro: 'Financeiro',
  metas: 'Metas',
  receitas: 'Receitas',
  preparacao: 'Preparação',
  preparacaoGuias: 'Guias de preparação',
  preparacaoCofre: 'Cofre',
  quiz: 'Quiz',
  poesia: 'Poesia',
  perfil: 'Perfil e ficha ICE',
  qr: 'QR Code',
  configuracoes: 'Configurações',
};

const EN: Record<ChaveNav, string> = {
  dashboard: 'Dashboard',
  anotacoes: 'Notes',
  estudo: 'Study',
  ministerio: 'Ministry',
  financeiro: 'Finance',
  metas: 'Goals',
  receitas: 'Recipes',
  preparacao: 'Preparedness',
  preparacaoGuias: 'Preparedness guides',
  preparacaoCofre: 'Vault',
  quiz: 'Quiz',
  poesia: 'Poetry',
  perfil: 'Profile & ICE card',
  qr: 'QR code',
  configuracoes: 'Settings',
};

export function textoRotuloNavegacao(chave: ChaveNav, locale: LocaleId): string {
  return locale === 'en' ? EN[chave] : PT[chave];
}

export function textosTopoShell(locale: LocaleId): {
  botaoAbrirMenu: string;
  botaoTema: string;
  gavetaLabel: string;
  navAria: string;
} {
  return locale === 'en'
    ? {
        botaoAbrirMenu: 'Menu',
        botaoTema: 'Light / Dark',
        gavetaLabel: 'Navigation',
        navAria: 'Main navigation',
      }
    : {
        botaoAbrirMenu: 'Menu',
        botaoTema: 'Claro / Breu',
        gavetaLabel: 'Navegação',
        navAria: 'Principal',
      };
}
