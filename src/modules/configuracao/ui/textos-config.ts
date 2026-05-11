import type { LocaleId } from '../../shared/ui/locale.js';

const PT = {
  titulo: 'Configurações',
  temaSecao: 'Tema visual',
  temaBotao: 'Alternar claro / breu',
  temaAtual: 'Tema atual',
  temaValorBreu: 'Breu',
  temaValorClaro: 'Claro',
  idiomaSecao: 'Idioma da interface',
  idiomaDescricao:
    'O inglês está disponível para navegação e Wave 1; outras fatias continuam só em pt-BR por agora.',
  idiomaPt: 'Português (Brasil)',
  idiomaEn: 'English',
  pinSecao: 'Cofre PIN (cópia de segurança)',
  pinDescricao:
    'Gestão segura da palavra-passe do cofre de documentos ficará disponível quando o fluxo de encriptação estiver ligado ao perfil.',
  pinCampoEtiqueta: 'Definir PIN de backup',
  pinCampoPlaceholder: 'Brevemente',
  guardarIdioma: 'Guardar preferência de idioma',
  appNomeTituloDoc: 'Papiro',
} as const;

const EN = {
  titulo: 'Settings',
  temaSecao: 'Theme',
  temaBotao: 'Toggle light / dark',
  temaAtual: 'Current theme',
  temaValorBreu: 'Dark',
  temaValorClaro: 'Light',
  idiomaSecao: 'Interface language',
  idiomaDescricao:
    'English applies to navigation and Wave 1 screens; deeper modules remain pt-BR for now.',
  idiomaPt: 'Portuguese (Brazil)',
  idiomaEn: 'English',
  pinSecao: 'Vault PIN (backup)',
  pinDescricao:
    'Secure PIN backup for encrypted documents will be enabled when vault flows connect to profile.',
  pinCampoEtiqueta: 'Backup PIN',
  pinCampoPlaceholder: 'Coming soon',
  guardarIdioma: 'Save language preference',
  appNomeTituloDoc: 'Papiro',
} as const;

export type TextosConfig = typeof PT;

export function obterTextosConfig(locale: LocaleId): TextosConfig {
  return (locale === 'en' ? EN : PT) as TextosConfig;
}
