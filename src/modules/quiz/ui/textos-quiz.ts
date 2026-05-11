import type { LocaleId } from '../../shared/ui/locale.js';

export interface TextosQuiz {
  tituloPagina: string;
  carregarPergunta: string;
  referenciaCampo: string;
  nivelCampo: string;
  responder: string;
  corretoToast: string;
  erradoToast: string;
  semPerguntasTitulo: string;
  novaPerguntaTitulo: string;
  novoIdLegendaPrefixo: string;
  idCampoManual: string;
  perguntaCampo: string;
  opcaoCampoPrefixo: string;
  indiceRespCorretaCampo: string;
  gravarManual: string;
  recordesTitulo: string;
  recordesVazio: string;
}

const PT: TextosQuiz = {
  tituloPagina: 'Quiz',
  carregarPergunta: 'Outra pergunta',
  referenciaCampo: 'Referência',
  nivelCampo: 'Dificuldade (1=fácil…)',
  responder: 'Verificar escolha',
  corretoToast: 'Resposta certa!',
  erradoToast: 'Tenta outra vez.',
  semPerguntasTitulo: 'Sem perguntas na base',
  novaPerguntaTitulo: 'Inserir pergunta local',
  novoIdLegendaPrefixo: 'Próximo id sugerido:',
  idCampoManual: 'Ou ID manual específico',
  perguntaCampo: 'Texto da pergunta',
  opcaoCampoPrefixo: 'Opção ',
  indiceRespCorretaCampo: 'Índice certo (1‑4)',
  gravarManual: 'Guardar pergunta',
  recordesTitulo: 'Recordes memorização',
  recordesVazio: 'Sem recordes registados.',
};

const EN: TextosQuiz = {
  tituloPagina: 'Quiz',
  carregarPergunta: 'Shuffle question',
  referenciaCampo: 'Citation',
  nivelCampo: 'Difficulty (numeric)',
  responder: 'Check answer',
  corretoToast: 'Correct!',
  erradoToast: 'Not quite.',
  semPerguntasTitulo: 'No trivia rows locally',
  novaPerguntaTitulo: 'Add local trivia row',
  novoIdLegendaPrefixo: 'Suggested next id:',
  idCampoManual: 'Override id if needed',
  perguntaCampo: 'Question text',
  opcaoCampoPrefixo: 'Option ',
  indiceRespCorretaCampo: 'Correct index (1–4)',
  gravarManual: 'Save trivia row',
  recordesTitulo: 'Matching-game records',
  recordesVazio: 'No leaderboard rows.',
};

export function obterTextosQuiz(locale: LocaleId): TextosQuiz {
  return locale === 'en' ? EN : PT;
}
