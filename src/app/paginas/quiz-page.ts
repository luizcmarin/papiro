import * as repoQuiz from '../../modules/quiz/dados/repositorio.js';
import type { PerguntaQuizRow, RecordeMemoriaRow } from '../../modules/quiz/dados/types.js';
import { avaliarRespostaQuiz, calcularNivelQuiz, respostasDaPergunta } from '../../modules/quiz/aplicacao/motor-quiz.js';
import { obterTextosQuiz } from '../../modules/quiz/ui/textos-quiz.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { criarDialogoFormulario } from '../ui/dialogos.js';
import { criarCampoNumero, criarCampoTexto, criarFormGrid } from '../ui/form.js';
import { criarCardUi, criarGrid, criarPaginaUi } from '../ui/layout.js';
import { criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

const quizPagina: PaginaMontavel = {
  async mount(container, sinal) {
    let atual: PerguntaQuizRow | null = null;
    let escolheu = 0;
    let radios: { r: HTMLInputElement; l: HTMLLabelElement }[] = [];
    let xpTotal = 0;
    let sequencia = 0;
    let usouDica = false;

    const tl = (): ReturnType<typeof obterTextosQuiz> => obterTextosQuiz(obterLocaleAtual());
    const t0 = tl();
    definirTituloDocumentoApp(t0.tituloPagina);

    const botaoNovaPergunta = criarBotaoAcao(t0.novaPerguntaTitulo, { variant: 'brand' });
    const pagina = criarPaginaUi({ titulo: t0.tituloPagina, acoes: [botaoNovaPergunta] });

    const perguntaTxt = document.createElement('p');
    perguntaTxt.className = 'shell__lista-titulo';

    const campoRef = document.createElement('p');
    campoRef.className = 'shell__lista-meta';

    const escolhas = document.createElement('div');
    escolhas.className = 'shell__stack shell__stack--compacta';

    const resultado = document.createElement('p');
    resultado.className = 'shell__sub';
    resultado.setAttribute('role', 'status');

    const progresso = document.createElement('p');
    progresso.className = 'shell__empty';

    const btOutra = criarBotaoAcao(t0.carregarPergunta, { variant: 'neutral' });
    const btVer = criarBotaoAcao(t0.responder, { variant: 'brand' });
    const btDica = criarBotaoAcao(t0.dica, { variant: 'neutral' });
    const acoesQuiz = document.createElement('div');
    acoesQuiz.className = 'shell__acoes';
    acoesQuiz.append(btVer, btDica, btOutra);

    const campoPergunta = criarCampoTexto({ rotulo: t0.perguntaCampo, linhas: 3 });
    const campoReferencia = criarCampoTexto({ rotulo: t0.referenciaCampo });
    const campoDificuldade = criarCampoNumero({ rotulo: t0.nivelCampo, valorInicial: 2, min: 1 });
    const campoResposta1 = criarCampoTexto({ rotulo: `${t0.opcaoCampoPrefixo}1` });
    const campoResposta2 = criarCampoTexto({ rotulo: `${t0.opcaoCampoPrefixo}2` });
    const campoResposta3 = criarCampoTexto({ rotulo: `${t0.opcaoCampoPrefixo}3` });
    const campoResposta4 = criarCampoTexto({ rotulo: `${t0.opcaoCampoPrefixo}4` });
    const campoCorreta = criarCampoNumero({ rotulo: t0.indiceRespCorretaCampo, valorInicial: 1, min: 1 });
    campoCorreta.input.setAttribute('max', '4');
    const campoId = criarCampoNumero({ rotulo: t0.idCampoManual, min: 1 });
    const legId = document.createElement('p');
    legId.className = 'shell__hint';

    const listaRecordes = criarListaCrud<RecordeMemoriaRow>({
      vazio: t0.recordesVazio,
      renderItem: (recorde) =>
        criarLinhaLista({
          titulo: recorde.dificuldade,
          meta: `${String(recorde.partidasConcluidas)} partidas · ${String(recorde.melhorMovimentos)} movimentos`,
        }),
    });

    const dialogoPergunta = criarDialogoFormulario({
      titulo: t0.novaPerguntaTitulo,
      confirmarTexto: t0.gravarManual,
      cancelarTexto: obterLocaleAtual() === 'en' ? 'Cancel' : 'Cancelar',
      conteudo: [
        legId,
        criarFormGrid(campoId.elemento, campoDificuldade.elemento, campoCorreta.elemento),
        campoPergunta.elemento,
        criarFormGrid(campoReferencia.elemento, campoResposta1.elemento, campoResposta2.elemento, campoResposta3.elemento, campoResposta4.elemento),
      ],
      signal: sinal,
      aoConfirmar: async () => {
        const idNum = campoId.valor();
        const cor = campoCorreta.valor();
        if (!Number.isFinite(idNum) || idNum < 1 || cor < 1 || cor > 4) return false;
        await repoQuiz.inserirOuSubstituirPerguntaManual({
          id: idNum,
          pergunta: campoPergunta.valor(),
          referencia: campoReferencia.valor(),
          dificuldade: campoDificuldade.valor() || 1,
          resposta1: campoResposta1.valor(),
          resposta2: campoResposta2.valor(),
          resposta3: campoResposta3.valor(),
          resposta4: campoResposta4.valor(),
          correta: cor,
          publicar: 1,
        });
        limparPerguntaManual();
        await legendaId();
        await tirarPergunta();
      },
    });

    const cardPergunta = criarCardUi({
      titulo: t0.tituloPagina,
      conteudo: [progresso, perguntaTxt, campoRef, escolhas, acoesQuiz, resultado],
    });
    const cardRecordes = criarCardUi({ titulo: t0.recordesTitulo, conteudo: [listaRecordes.elemento] });
    pagina.corpo.append(criarGrid(cardPergunta.cartao, cardRecordes.cartao));
    container.replaceChildren(pagina.raiz, dialogoPergunta.elemento);

    async function legendaId(): Promise<void> {
      const nx = await repoQuiz.proximoIdLivrePergunta();
      legId.textContent = `${tl().novoIdLegendaPrefixo} ${String(nx)}`;
      if (!Number.isFinite(campoId.valor()) || campoId.valor() <= 0) campoId.definirValor(nx);
    }

    function rot(): void {
      const T = tl();
      definirTituloDocumentoApp(T.tituloPagina);
      pagina.titulo.textContent = T.tituloPagina;
      botaoNovaPergunta.textContent = T.novaPerguntaTitulo;
      btOutra.textContent = T.carregarPergunta;
      btVer.textContent = T.responder;
      btDica.textContent = T.dica;
      cardPergunta.titulo.textContent = T.tituloPagina;
      cardRecordes.titulo.textContent = T.recordesTitulo;
      campoPergunta.definirRotulo(T.perguntaCampo);
      campoPergunta.definirPlaceholder(T.perguntaCampo);
      campoReferencia.definirRotulo(T.referenciaCampo);
      campoReferencia.definirPlaceholder(T.referenciaCampo);
      campoDificuldade.definirRotulo(T.nivelCampo);
      campoDificuldade.definirPlaceholder(T.nivelCampo);
      campoResposta1.definirRotulo(`${T.opcaoCampoPrefixo}1`);
      campoResposta1.definirPlaceholder(`${T.opcaoCampoPrefixo}1`);
      campoResposta2.definirRotulo(`${T.opcaoCampoPrefixo}2`);
      campoResposta2.definirPlaceholder(`${T.opcaoCampoPrefixo}2`);
      campoResposta3.definirRotulo(`${T.opcaoCampoPrefixo}3`);
      campoResposta3.definirPlaceholder(`${T.opcaoCampoPrefixo}3`);
      campoResposta4.definirRotulo(`${T.opcaoCampoPrefixo}4`);
      campoResposta4.definirPlaceholder(`${T.opcaoCampoPrefixo}4`);
      campoCorreta.definirRotulo(T.indiceRespCorretaCampo);
      campoCorreta.definirPlaceholder(T.indiceRespCorretaCampo);
      campoId.definirRotulo(T.idCampoManual);
      campoId.definirPlaceholder(T.idCampoManual);
      dialogoPergunta.definirTitulo(T.novaPerguntaTitulo);
      dialogoPergunta.botaoConfirmar.textContent = T.gravarManual;
      dialogoPergunta.botaoCancelar.textContent = obterLocaleAtual() === 'en' ? 'Cancel' : 'Cancelar';
      listaRecordes.definirTextoVazio(T.recordesVazio);
      atualizarProgresso();
    }

    function atualizarProgresso(): void {
      const T = tl();
      progresso.textContent = T.progressoResumo
        .replace('{xp}', String(xpTotal))
        .replace('{nivel}', String(calcularNivelQuiz(xpTotal)))
        .replace('{seq}', String(sequencia));
    }

    function encherPergunta(row: PerguntaQuizRow): void {
      const T = tl();
      atual = row;
      perguntaTxt.textContent = row.pergunta;
      campoRef.textContent = `${T.referenciaCampo}: ${row.referencia}`;
      const resps = respostasDaPergunta(row);
      for (let i = 0; i < 4; i++) {
        const rd = radios[i];
        if (!rd) continue;
        rd.r.checked = false;
        rd.l.childNodes[1]!.textContent = ` ${resps[i] ?? ''}`;
      }
      escolheu = 0;
      usouDica = false;
      btDica.toggleAttribute('disabled', false);
      resultado.textContent = '';
      atualizarProgresso();
    }

    async function tirarPergunta(): Promise<void> {
      const T = tl();
      const p = await repoQuiz.obterPerguntaAleatoria();
      if (!p) {
        atual = null;
        perguntaTxt.textContent = T.semPerguntasTitulo;
        campoRef.textContent = '';
        escolhas.replaceChildren();
        btDica.toggleAttribute('disabled', true);
        return;
      }
      escolhas.replaceChildren();
      radios = [];
      for (let ix = 1; ix <= 4; ix++) {
        const lbl = document.createElement('label');
        lbl.className = 'shell__checkbox-linha';
        const rd = document.createElement('input');
        rd.type = 'radio';
        rd.name = 'resp-quiz-atual';
        rd.value = String(ix);
        rd.addEventListener('change', () => { escolheu = ix; }, { signal: sinal });
        lbl.append(rd, document.createTextNode(''));
        radios.push({ r: rd, l: lbl });
        escolhas.append(lbl);
      }
      encherPergunta(p);
    }

    function usarDica(): void {
      if (!atual || usouDica) return;
      const erradas = radios.filter((rd) => Number(rd.r.value) !== atual?.correta && !rd.r.checked);
      const alvo = erradas[0];
      if (!alvo) return;
      alvo.r.disabled = true;
      alvo.l.classList.add('shell__lista-meta');
      usouDica = true;
      btDica.toggleAttribute('disabled', true);
    }

    async function recordesLista(): Promise<void> {
      const rows = await repoQuiz.listarRecordesMemoria();
      listaRecordes.renderizar(rows);
    }

    async function init(): Promise<void> {
      rot();
      await legendaId();
      await tirarPergunta();
      await recordesLista();
    }

    function limparPerguntaManual(): void {
      campoPergunta.limpar();
      campoReferencia.limpar();
      campoResposta1.limpar();
      campoResposta2.limpar();
      campoResposta3.limpar();
      campoResposta4.limpar();
      campoDificuldade.definirValor(2);
      campoCorreta.definirValor(1);
    }

    registarAoLocaleAtualizado(() => void init(), sinal);
    btOutra.addEventListener('click', () => void tirarPergunta(), { signal: sinal });
    btDica.addEventListener('click', usarDica, { signal: sinal });

    btVer.addEventListener(
      'click',
      () => {
        if (!atual) return;
        const T = tl();
        if (escolheu < 1 || escolheu > 4) return;
        const aval = avaliarRespostaQuiz({
          pergunta: atual,
          escolha: escolheu,
          xpAtual: xpTotal,
          sequenciaAtual: sequencia,
          usouDica,
        });
        xpTotal += aval.xpGanho;
        sequencia = aval.sequenciaNova;
        resultado.textContent = aval.correta
          ? `${T.corretoToast} +${String(aval.xpGanho)} XP`
          : T.erradoToast;
        atualizarProgresso();
      },
      { signal: sinal },
    );

    botaoNovaPergunta.addEventListener(
      'click',
      async () => {
        limparPerguntaManual();
        await legendaId();
        dialogoPergunta.abrir();
      },
      { signal: sinal },
    );

    await init();
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default quizPagina;
