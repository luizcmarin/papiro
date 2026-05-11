import type { PaginaMontavel } from './pagina-montavel.js';
import type { ChaveNav } from '../modules/shared/ui/menu-navegacao.js';

/**
 * Menu lateral + rotas Page.js (Fase 3). Ícones em `public/icons/m3/{icone}.svg`.
 */
export interface ItemMenuRota {
  /** Chave estável para i18n (ver `menu-navegacao.ts`). */
  chaveNav: ChaveNav;
  caminhos: readonly string[];
  icone: string;
  importPagina: () => Promise<{ default: PaginaMontavel }>;
}

export const ITENS_MENU_ROTAS: readonly ItemMenuRota[] = [
  {
    chaveNav: 'dashboard',
    caminhos: ['/dashboard', '/'],
    icone: 'dashboard',
    importPagina: () => import('./paginas/dashboard-page.js'),
  },
  {
    chaveNav: 'anotacoes',
    caminhos: ['/anotacoes'],
    icone: 'note_alt',
    importPagina: () => import('./paginas/lista-anotacoes-page.js'),
  },
  {
    chaveNav: 'estudo',
    caminhos: ['/estudo'],
    icone: 'school',
    importPagina: () => import('./paginas/estudo-page.js'),
  },
  {
    chaveNav: 'ministerio',
    caminhos: ['/ministerio'],
    icone: 'groups',
    importPagina: () => import('./paginas/ministerio-page.js'),
  },
  {
    chaveNav: 'financeiro',
    caminhos: ['/financeiro'],
    icone: 'account_balance_wallet',
    importPagina: () => import('./paginas/financeiro-page.js'),
  },
  {
    chaveNav: 'metas',
    caminhos: ['/metas'],
    icone: 'target',
    importPagina: () => import('./paginas/metas-page.js'),
  },
  {
    chaveNav: 'receitas',
    caminhos: ['/receitas'],
    icone: 'restaurant_menu',
    importPagina: () => import('./paginas/receitas-lista-page.js'),
  },
  {
    chaveNav: 'preparacao',
    caminhos: ['/preparacao'],
    icone: 'emergency',
    importPagina: () => import('./paginas/preparacao-page.js'),
  },
  {
    chaveNav: 'preparacaoGuias',
    caminhos: ['/preparacao/guias'],
    icone: 'menu_book',
    importPagina: () => import('./paginas/preparacao-guias-page.js'),
  },
  {
    chaveNav: 'preparacaoCofre',
    caminhos: ['/preparacao/cofre'],
    icone: 'lock',
    importPagina: () => import('./paginas/preparacao-cofre-page.js'),
  },
  {
    chaveNav: 'quiz',
    caminhos: ['/quiz'],
    icone: 'quiz',
    importPagina: () => import('./paginas/quiz-page.js'),
  },
  {
    chaveNav: 'poesia',
    caminhos: ['/poesia'],
    icone: 'auto_stories',
    importPagina: () => import('./paginas/poesia-page.js'),
  },
  {
    chaveNav: 'perfil',
    caminhos: ['/perfil'],
    icone: 'person',
    importPagina: () => import('./paginas/perfil-page.js'),
  },
  {
    chaveNav: 'qr',
    caminhos: ['/qr'],
    icone: 'qr_code_2',
    importPagina: () => import('./paginas/qr-page.js'),
  },
  {
    chaveNav: 'configuracoes',
    caminhos: ['/configuracoes'],
    icone: 'settings',
    importPagina: () => import('./paginas/config-page.js'),
  },
] as const;

export function prefixoBaseUrl(): string {
  const b = import.meta.env.BASE_URL;
  return b.endsWith('/') ? b.slice(0, -1) : b;
}

export function hrefParaRota(caminho: string): string {
  if (!caminho.startsWith('/')) {
    throw new Error(`Caminho inválido (esperado /…): ${caminho}`);
  }
  const p = prefixoBaseUrl();
  return p ? `${p}${caminho}` : caminho;
}
