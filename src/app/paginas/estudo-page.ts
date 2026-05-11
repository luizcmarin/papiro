import '@awesome.me/webawesome/dist/components/button/button.js';

import { garantirEchartsRegistrado } from '../../infra/charts/echarts-bundle.js';
import type { EChartsType } from '../../infra/charts/echarts-bundle.js';
import { lerCoresGraficoDoDocumento } from '../../infra/charts/cores-documento.js';
import { TimerPomodoroController } from '../../modules/estudo/aplicacao/timer-controller.js';
import * as repo from '../../modules/estudo/dados/repositorio.js';
import type { SessaoEstudoRow } from '../../modules/estudo/dados/types.js';
import { obterTextosEstudo } from '../../modules/estudo/ui/textos-estudo.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

let estudoGraficosPagina: EChartsType[] = [];

function formatarCronometro(ms: number): string {
  const seg = Math.max(0, Math.ceil(ms / 1000));
  const m = Math.floor(seg / 60);
  const s = seg % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function formatoDataLista(ms: number, localeUi: ReturnType<typeof obterLocaleAtual>): string {
  return new Date(ms).toLocaleDateString(localeUi === 'en' ? 'en-US' : 'pt-BR');
}

const estudoPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const echarts = garantirEchartsRegistrado();
    estudoGraficosPagina.forEach((c) => c.dispose());
    estudoGraficosPagina = [];

    const locInicial = obterLocaleAtual();
    const tbl = obterTextosEstudo(locInicial);
    document.title = `${tbl.tituloPagina} — ${obterTextosConfig(locInicial).appNomeTituloDoc}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';

    const hPag = document.createElement('h1');
    hPag.className = 'shell__titulo';

    barra.append(hPag);

    const timerBloco = document.createElement('div');
    timerBloco.className = 'shell__cartao';

    const hTimer = document.createElement('h2');
    hTimer.className = 'shell__titulo';

    const cron = document.createElement('p');
    cron.className = 'shell__titulo';
    cron.style.fontVariantNumeric = 'tabular-nums';

    const faseTxt = document.createElement('p');
    faseTxt.className = 'shell__sub';

    const btns = document.createElement('div');
    btns.className = 'shell__filtros';

    const bStart = document.createElement('wa-button');
    const bPause = document.createElement('wa-button');
    const bResume = document.createElement('wa-button');
    const bReset = document.createElement('wa-button');

    btns.append(bStart, bPause, bResume, bReset);

    const assunto = document.createElement('input');
    assunto.type = 'text';
    assunto.className = 'shell__input-texto';

    const nota = document.createElement('textarea');
    nota.rows = 2;
    nota.className = 'shell__input-texto';

    const btnReg = document.createElement('wa-button');
    btnReg.hidden = true;

    timerBloco.append(hTimer, cron, faseTxt, btns, assunto, nota, btnReg);

    const hGraf = document.createElement('h2');
    hGraf.className = 'shell__titulo';

    const boxLin = document.createElement('div');
    boxLin.style.height = '220px';

    const hHist = document.createElement('h2');
    hHist.className = 'shell__titulo';

    const ulHist = document.createElement('ul');
    ulHist.className = 'shell__lista';

    const hConq = document.createElement('h2');
    hConq.className = 'shell__titulo';

    const ulConq = document.createElement('ul');
    ulConq.className = 'shell__lista';

    container.replaceChildren();
    container.append(barra, timerBloco, hGraf, boxLin, hHist, ulHist, hConq, ulConq);

    const ctl = new TimerPomodoroController({
      onTick: (ms, f) => {
        if (sinal.aborted) return;
        const t = obterTextosEstudo(obterLocaleAtual());
        cron.textContent = formatarCronometro(ms);
        faseTxt.textContent = f === 'pausa_curta' ? t.fasePausa : t.faseFoco;
      },
      onFaseConcluida: (f) => {
        if (f === 'foco') {
          btnReg.hidden = false;
        }
        sincronizarBotoes();
      },
    });

    function sincronizarBotoes(): void {
      const t = obterTextosEstudo(obterLocaleAtual());
      const e = ctl.obterEstado();
      bStart.textContent = t.iniciar;
      bPause.textContent = t.pausar;
      bResume.textContent = t.retomar;
      bReset.textContent = t.repor;
      bStart.disabled = e === 'running';
      bPause.disabled = e !== 'running';
      bResume.disabled = e !== 'paused';
      const f = ctl.obterFase();
      faseTxt.textContent = f === 'pausa_curta' ? t.fasePausa : t.faseFoco;
      cron.textContent = formatarCronometro(ctl.obterRestanteMs());
    }

    function aplicarRotulos(): void {
      const t = obterTextosEstudo(obterLocaleAtual());
      document.title = `${t.tituloPagina} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      hPag.textContent = t.tituloPagina;
      hTimer.textContent = t.timerTitulo;
      hGraf.textContent = t.graficoLinhaTitulo;
      hHist.textContent = t.historicoTitulo;
      hConq.textContent = t.conquistasTitulo;
      assunto.placeholder = t.assuntoCampo;
      nota.placeholder = t.notaPosCampo;
      btnReg.textContent = t.registrarSessao;
      sincronizarBotoes();
    }

    function pintarLinha(focosCron: SessaoEstudoRow[]): void {
      estudoGraficosPagina.forEach((c) => c.dispose());
      estudoGraficosPagina = [];
      const cores = lerCoresGraficoDoDocumento(container);

      const t = obterTextosEstudo(obterLocaleAtual());
      const ch = echarts.init(boxLin);
      estudoGraficosPagina.push(ch);

      if (focosCron.length === 0) {

        ch.setOption({
          title: {
            text: t.historicoVazio,
            left: 'center',
            top: 'middle',
            textStyle: { color: cores.textoSuave },
          },
        });


        return;
      }

      ch.setOption({
        textStyle: { color: cores.textoPrincipal },
        grid: { left: 40, right: 12, bottom: 28, top: 24, containLabel: true },
        xAxis: { type: 'category', data: focosCron.map((_, ix) => String(ix + 1)) },
        yAxis: { type: 'value' },
        series: [
          {

            type: 'line',

            smooth: true,
            areaStyle: { opacity: 0.12, color: cores.destaque },

            itemStyle: { color: cores.destaque },
            lineStyle: { color: cores.destaque },
            data: focosCron.map((s) => s.duracao_minutos),
          },
        ],
      });
    }

    async function refrescarDadosLista(): Promise<void> {
      const t = obterTextosEstudo(obterLocaleAtual());
      const sessoes = await repo.listarSessoesEstudo(36);
      const focosCron = [...sessoes].filter((s) => s.tipo_ciclo === 'foco').slice(-16);

      ulHist.replaceChildren();


      if (sessoes.length === 0) {
        ulHist.append(
          Object.assign(document.createElement('li'), {
            className: 'shell__sub',

            textContent: t.historicoVazio,
          }),
        );
      } else {
        for (const s of sessoes) {
          const li = document.createElement('li');
          li.className = 'shell__lista-linha';
          const lab = document.createElement('span');
          lab.className = 'shell__lista-titulo';
          lab.textContent = `${s.assunto} · ${String(s.duracao_minutos)} min · ${formatoDataLista(s.concluido_em, obterLocaleAtual())}`;
          li.append(lab);
          ulHist.append(li);
        }
      }

      ulConq.replaceChildren();
      const coqs = await repo.listarConquistasEstudo();

      if (coqs.length === 0) {
        ulConq.append(
          Object.assign(document.createElement('li'), {
            className: 'shell__sub',
            textContent: t.conquistasVazio,
          }),
        );
      } else {
        for (const c of coqs) {
          const li = document.createElement('li');
          li.className = 'shell__lista-linha';
          const lab = document.createElement('span');
          lab.className = 'shell__lista-titulo';
          lab.textContent = `${c.tipo} · ${formatoDataLista(c.desbloqueado_em, obterLocaleAtual())}`;
          li.append(lab);


          ulConq.append(li);
        }
      }

      pintarLinha(focosCron);
    }


    aplicarRotulos();

    ctl.reporCicloFoco();
    sincronizarBotoes();

    bStart.addEventListener(
      'click',
      () => {
        ctl.iniciar();
        sincronizarBotoes();
      },
      { signal: sinal },


    );

    bPause.addEventListener(
      'click',

      () => {
        ctl.pausar();


        sincronizarBotoes();
      },

      {

        signal: sinal,

      },

    );


    bResume.addEventListener(

      'click',

      () => {
        ctl.retomar();


        sincronizarBotoes();
      },

      { signal: sinal },

    );

    bReset.addEventListener(
      'click',

      () => {


        ctl.reporCicloFoco();


        btnReg.hidden = true;
        sincronizarBotoes();
      },

      {

        signal: sinal,

      },

    );


    btnReg.addEventListener(

      'click',

      async () => {


        const t = obterTextosEstudo(obterLocaleAtual());
        const minGravar = 25;
        const agora = Date.now();

        await repo.inserirSessaoEstudo({
          assunto: assunto.value.trim() || t.assuntoCampo,
          tipo_ciclo: 'foco',
          duracao_minutos: minGravar,
          concluido_em: agora,
          nota_meditacao: nota.value.trim(),
        });

        await repo.inserirConquistaEstudoSeAusente('FIRST_FOCUS', agora);
        const tot = await repo.contarSessoesFocoCompletas();
        if (tot >= 5) {
          await repo.inserirConquistaEstudoSeAusente('FIVE_FOCUS', agora);
        }

        btnReg.hidden = true;
        nota.value = '';
        await refrescarDadosLista();
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(() => {
      aplicarRotulos();
      void refrescarDadosLista();
    }, sinal);

    await refrescarDadosLista();

    sinal.addEventListener('abort', () => {
      ctl.dispose();
    });
  },

  unmount() {
    estudoGraficosPagina.forEach((c) => c.dispose());
    estudoGraficosPagina = [];
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default estudoPagina;
