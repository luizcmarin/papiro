import '@awesome.me/webawesome/dist/components/button/button.js';

import * as repoQuiz from '../../modules/quiz/dados/repositorio.js';
import type { PerguntaQuizRow } from '../../modules/quiz/dados/types.js';
import { obterTextosQuiz } from '../../modules/quiz/ui/textos-quiz.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

const quizPagina: PaginaMontavel = {
  async mount(container, sinal) {
    let atual: PerguntaQuizRow | null = null;

    const bar = document.createElement('div');
    bar.className = 'shell__barra-ficha';
    const h1 = document.createElement('h1');
    h1.className = 'shell__titulo';
    bar.append(h1);

    const perguntaTxt = document.createElement('p');
    perguntaTxt.className = 'shell__lista-titulo';

    const campoRef = document.createElement('p');
    campoRef.className = 'shell__lista-meta';

    const escolhas = document.createElement('div');
    escolhas.className = 'shell__filtros';

    const resultado = document.createElement('p');
    resultado.className = 'shell__sub';
    resultado.setAttribute('role', 'status');

    const btOutra = document.createElement('wa-button');
    const btVer = document.createElement('wa-button');

    const hNovo = document.createElement('h2');
    hNovo.className = 'shell__titulo';

    const inP = document.createElement('textarea');
    inP.rows = 2;
    inP.className = 'shell__input-texto';

    const inRf = document.createElement('input');
    inRf.type = 'text';
    inRf.className = 'shell__input-texto';

    const inDif = document.createElement('input');
    inDif.type = 'number';
    inDif.min = '1';
    inDif.value = '2';
    inDif.className = 'shell__input-texto';

    const inR1 = document.createElement('input');
    const inR2 = document.createElement('input');
    const inR3 = document.createElement('input');
    const inR4 = document.createElement('input');
    for (const x of [inR1, inR2, inR3, inR4]) {
      x.type = 'text';
      x.className = 'shell__input-texto';
    }

    const inCor = document.createElement('input');
    inCor.type = 'number';
    inCor.min = '1';
    inCor.max = '4';
    inCor.value = '1';
    inCor.className = 'shell__input-texto';

    const inId = document.createElement('input');
    inId.type = 'number';
    inId.min = '1';
    inId.className = 'shell__input-texto';

    const legId = document.createElement('p');
    legId.className = 'shell__hint';

    const btGravar = document.createElement('wa-button');

    const hRec = document.createElement('h2');
    hRec.className = 'shell__titulo';

    const ulRec = document.createElement('ul');
    ulRec.className = 'shell__lista';

    container.replaceChildren();
    container.append(bar, perguntaTxt, campoRef, escolhas, btVer, btOutra, resultado, hNovo, legId, inId, inP, inRf, inDif, inR1, inR2, inR3, inR4, inCor, btGravar, hRec, ulRec);

    let escolheu = 0;
    let radios: { r: HTMLInputElement; l: HTMLLabelElement }[] = [];

    const tl = (): ReturnType<typeof obterTextosQuiz> => obterTextosQuiz(obterLocaleAtual());

    async function legendaId(): Promise<void> {
      const nx = await repoQuiz.proximoIdLivrePergunta();
      legId.textContent = `${tl().novoIdLegendaPrefixo} ${String(nx)}`;
      if (inId.value === '') inId.value = String(nx);
    }

    function rot(): void {
      const T = tl();
      document.title = `${T.tituloPagina} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      h1.textContent = T.tituloPagina;
      btOutra.textContent = T.carregarPergunta;
      btVer.textContent = T.responder;
      hNovo.textContent = T.novaPerguntaTitulo;
      inP.placeholder = T.perguntaCampo;
      inRf.placeholder = T.referenciaCampo;
      inDif.placeholder = T.nivelCampo;
      inR1.placeholder = `${T.opcaoCampoPrefixo}1`;
      inR2.placeholder = `${T.opcaoCampoPrefixo}2`;
      inR3.placeholder = `${T.opcaoCampoPrefixo}3`;
      inR4.placeholder = `${T.opcaoCampoPrefixo}4`;
      inCor.placeholder = T.indiceRespCorretaCampo;
      inId.placeholder = T.idCampoManual;
      btGravar.textContent = T.gravarManual;
      hRec.textContent = T.recordesTitulo;
    }

    function encherPergunta(row: PerguntaQuizRow): void {
      const T = tl();
      atual = row;
      perguntaTxt.textContent = row.pergunta;
      campoRef.textContent = `${T.referenciaCampo}: ${row.referencia}`;
      const resps = [row.resposta1, row.resposta2, row.resposta3, row.resposta4];
      for (let i = 0; i < 4; i++) {
        const rd = radios[i];
        if (!rd) continue;
        rd.r.checked = false;
        rd.l.childNodes[1]!.textContent = ` ${resps[i] ?? ''}`;
      }
      escolheu = 0;
      resultado.textContent = '';
    }

    async function tirarPergunta(): Promise<void> {
      const T = tl();
      const p = await repoQuiz.obterPerguntaAleatoria();
      if (!p) {
        perguntaTxt.textContent = T.semPerguntasTitulo;
        campoRef.textContent = '';
        escolhas.replaceChildren();
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

    async function recordesLista(): Promise<void> {
      ulRec.replaceChildren();
      const rows = await repoQuiz.listarRecordesMemoria();
      const T = tl();
      if (rows.length === 0) {
        ulRec.append(Object.assign(document.createElement('li'), { textContent: T.recordesVazio, className: 'shell__sub' }));
        return;
      }
      for (const r of rows) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';
        li.textContent = `${r.dificuldade} · ${String(r.partidasConcluidas)} `;
        ulRec.append(li);
      }
    }

    registarAoLocaleAtualizado(() => void init(), sinal);

    async function init(): Promise<void> {
      rot();
      await legendaId();
      await tirarPergunta();
      await recordesLista();
    }

    btOutra.addEventListener('click', () => void tirarPergunta(), { signal: sinal });

    btVer.addEventListener(
      'click',
      () => {
        if (!atual) return;
        const T = tl();
        if (escolheu < 1 || escolheu > 4) return;
        const ok = escolheu === atual.correta;
        resultado.textContent = ok ? T.corretoToast : T.erradoToast;
      },
      { signal: sinal },
    );

    btGravar.addEventListener(
      'click',
      async () => {
        const idNum = Number(inId.value);
        const cor = Number(inCor.value);
        if (!Number.isFinite(idNum) || idNum < 1 || cor < 1 || cor > 4) return;
        await repoQuiz.inserirOuSubstituirPerguntaManual({
          id: idNum,
          pergunta: inP.value.trim(),
          referencia: inRf.value.trim(),
          dificuldade: Number(inDif.value) || 1,
          resposta1: inR1.value.trim(),
          resposta2: inR2.value.trim(),
          resposta3: inR3.value.trim(),
          resposta4: inR4.value.trim(),
          correta: cor,
          publicar: 1,
        });
        await legendaId();
        await tirarPergunta();
      },
      { signal: sinal },
    );

    await init();
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default quizPagina;
