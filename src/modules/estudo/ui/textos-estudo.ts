import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosEstudo {
  tituloPagina: string;
  timerTitulo: string;
  faseFoco: string;
  fasePausa: string;
  fasePausaLonga: string;
  iniciar: string;
  pausar: string;
  retomar: string;
  repor: string;
  assuntoCampo: string;
  notaPosCampo: string;
  registrarSessao: string;
  historicoTitulo: string;
  historicoVazio: string;
  conquistasTitulo: string;
  conquistasVazio: string;
  graficoLinhaTitulo: string;
  metaSessaoFoco: string;
}

const PT: TextosEstudo = {
  tituloPagina: 'Estudo',
  timerTitulo: 'Pomodoro',
  faseFoco: 'Foco',
  fasePausa: 'Pausa curta',
  fasePausaLonga: 'Pausa longa',
  iniciar: 'Iniciar',
  pausar: 'Pausar',
  retomar: 'Retomar',
  repor: 'Repor ciclo',
  assuntoCampo: 'Assunto ou passagem',
  notaPosCampo: 'Nota após o foco (opcional)',
  registrarSessao: 'Registar foco concluído na base',
  historicoTitulo: 'Últimas sessões',
  historicoVazio: 'Ainda sem sessões.',
  conquistasTitulo: 'Conquistas',
  conquistasVazio: 'Conquistas aparecem ao avançar nas sessões.',
  graficoLinhaTitulo: 'Minutos de foco por sessão (recentes)',
  metaSessaoFoco: 'Primeiro foco',
};

const EN: TextosEstudo = {
  tituloPagina: 'Study',
  timerTitulo: 'Pomodoro',
  faseFoco: 'Focus',
  fasePausa: 'Short break',
  fasePausaLonga: 'Long break',
  iniciar: 'Start',
  pausar: 'Pause',
  retomar: 'Resume',
  repor: 'Reset cycle',
  assuntoCampo: 'Topic or verse',
  notaPosCampo: 'Note after focus (optional)',
  registrarSessao: 'Save completed focus to database',
  historicoTitulo: 'Recent sessions',
  historicoVazio: 'No sessions yet.',
  conquistasTitulo: 'Achievements',
  conquistasVazio: 'Achievements unlock as you study.',
  graficoLinhaTitulo: 'Focus minutes per session (recent)',
  metaSessaoFoco: 'First focus',
};

export function obterTextosEstudo(locale: LocaleId): TextosEstudo {
  return locale === 'en' ? EN : PT;
}
