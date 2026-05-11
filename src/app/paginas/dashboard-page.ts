import { garantirEchartsRegistrado } from '../../infra/charts/echarts-bundle.js';
import type { EChartsType } from '../../infra/charts/echarts-bundle.js';
import { lerCoresGraficoDoDocumento } from '../../infra/charts/cores-documento.js';
import * as dashRepo from '../../modules/dashboard/dados/repositorio.js';
import { obterTextosDashboard } from '../../modules/dashboard/ui/textos-dashboard.js';
import type { LocaleId } from '../../modules/shared/ui/locale.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { contarSessoesFocoCompletas } from '../../modules/estudo/dados/repositorio.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

function limitesMesLocalAtual(): { min: number; maxEx: number } {
  const d = new Date();
  const y = d.getFullYear();
  const m = d.getMonth();
  return {
    min: Date.UTC(y, m, 1, 0, 0, 0, 0),
    maxEx: Date.UTC(y, m + 1, 1, 0, 0, 0, 0),
  };
}

/** Instâncias ECharts da página (dispose no `unmount`). */
let graficosDashboardPagina: EChartsType[] = [];

function formatarMoeda(v: number, loc: LocaleId): string {
  return new Intl.NumberFormat(loc === 'en' ? 'en-US' : 'pt-BR', {
    style: 'currency',
    currency: loc === 'en' ? 'USD' : 'BRL',
    maximumFractionDigits: 0,
  }).format(v);
}

function mkKpiCartao(rotulo: string, valor: string): HTMLElement {
  const bl = document.createElement('div');
  bl.style.display = 'flex';
  bl.style.flexDirection = 'column';
  bl.style.gap = '0.35rem';
  bl.style.padding = 'var(--wa-space-m, 1rem)';
  bl.style.border = '1px solid var(--wa-color-neutral-border-soft, rgba(128,128,128,0.35))';
  bl.style.borderRadius = 'var(--wa-border-radius-m, 6px)';
  bl.style.minWidth = '140px';
  bl.style.flex = '1 1 140px';

  const r = document.createElement('span');
  r.className = 'shell__sub';
  r.textContent = rotulo;

  const v = document.createElement('span');
  v.className = 'shell__titulo';
  v.style.fontSize = '1.25rem';
  v.style.margin = '0';
  v.textContent = valor;

  bl.append(r, v);
  return bl;
}

const dashboardPagina: PaginaMontavel = {
  async mount(container, sinal) {
    for (const g of graficosDashboardPagina) {
      g.dispose();
    }
    graficosDashboardPagina = [];

    const echarts = garantirEchartsRegistrado();
    let geracaoCharts = 0;

    const loc0 = obterLocaleAtual();
    const t0 = obterTextosDashboard(loc0);
    const appNome = obterTextosConfig(loc0).appNomeTituloDoc;
    document.title = `${t0.tituloPagina} — ${appNome}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const h1 = document.createElement('h1');
    h1.className = 'shell__titulo';
    h1.textContent = t0.tituloPagina;
    barra.append(h1);

    const msgBd = document.createElement('p');
    msgBd.className = 'shell__sub';
    msgBd.hidden = true;
    msgBd.setAttribute('role', 'alert');

    const kpiRow = document.createElement('div');
    kpiRow.style.display = 'flex';
    kpiRow.style.flexWrap = 'wrap';
    kpiRow.style.gap = 'var(--wa-space-m, 1rem)';
    kpiRow.style.marginBottom = 'var(--wa-space-l, 1.5rem)';

    const cartoes: {
      anot: HTMLElement;
      rec: HTMLElement;
      fin: HTMLElement;
      mAb: HTMLElement;
      mOk: HTMLElement;
      foco: HTMLElement;
    } = {
      anot: mkKpiCartao(t0.kpiAnotacoes, '—'),
      rec: mkKpiCartao(t0.kpiReceitas, '—'),
      fin: mkKpiCartao(t0.kpiFinanceiroMes, '—'),
      mAb: mkKpiCartao(t0.kpiMetasAbertas, '—'),
      mOk: mkKpiCartao(t0.kpiMetasConcluidas, '—'),
      foco: mkKpiCartao(t0.kpiSessoesFoco, '—'),
    };
    kpiRow.append(cartoes.anot, cartoes.rec, cartoes.fin, cartoes.mAb, cartoes.mOk, cartoes.foco);

    const wrapGraf = document.createElement('div');
    wrapGraf.className = 'shell__cartao';
    wrapGraf.style.display = 'grid';
    wrapGraf.style.gridTemplateColumns = 'repeat(auto-fit, minmax(260px, 1fr))';
    wrapGraf.style.gap = 'var(--wa-space-l, 1.5rem)';

    const subGg = document.createElement('h2');
    subGg.className = 'shell__subtitulo';
    subGg.textContent = t0.graficoGaugeTitulo;
    const detGg = document.createElement('p');
    detGg.className = 'shell__sub';
    detGg.textContent = t0.graficoGaugeSub;
    const divGauge = document.createElement('div');
    divGauge.style.height = '200px';

    const colGauge = document.createElement('div');
    colGauge.append(subGg, detGg, divGauge);

    const subFin = document.createElement('h2');
    subFin.className = 'shell__subtitulo';
    subFin.textContent = t0.graficoFinMesTitulo;
    const divFin = document.createElement('div');
    divFin.style.height = '220px';

    const subMeta = document.createElement('h2');
    subMeta.className = 'shell__subtitulo';
    subMeta.textContent = t0.graficoMetasTitulo;
    const divMeta = document.createElement('div');
    divMeta.style.height = '220px';

    const colFin = document.createElement('div');
    colFin.append(subFin, divFin);
    const colMeta = document.createElement('div');
    colMeta.append(subMeta, divMeta);

    wrapGraf.append(colGauge, colFin, colMeta);

    container.replaceChildren();
    container.append(barra, msgBd, kpiRow, wrapGraf);

    function aplicarRotulos(): void {
      const lc = obterLocaleAtual();
      const tm = obterTextosDashboard(lc);
      document.title = `${tm.tituloPagina} — ${obterTextosConfig(lc).appNomeTituloDoc}`;
      h1.textContent = tm.tituloPagina;
      subGg.textContent = tm.graficoGaugeTitulo;
      detGg.textContent = tm.graficoGaugeSub;
      subFin.textContent = tm.graficoFinMesTitulo;
      subMeta.textContent = tm.graficoMetasTitulo;
      msgBd.textContent = tm.erroBd;

      const filhos = kpiRow.children;
      const rotulos = [
        tm.kpiAnotacoes,
        tm.kpiReceitas,
        tm.kpiFinanceiroMes,
        tm.kpiMetasAbertas,
        tm.kpiMetasConcluidas,
        tm.kpiSessoesFoco,
      ];
      for (let i = 0; i < Math.min(filhos.length, rotulos.length); i++) {
        const primeiro = filhos[i]?.firstElementChild;
        if (primeiro) primeiro.textContent = rotulos[i];
      }
    }

    function encadearCharts(
      ultimoRel: Awaited<ReturnType<typeof dashRepo.obterUltimoRelatorioMinisterioResumo>>,
      totaisMes: Awaited<ReturnType<typeof dashRepo.totaisFinanceirosNoIntervalo>>,
      contMeta: Awaited<ReturnType<typeof dashRepo.contarMetasPorEstado>>,
    ): void {
      const minhaGeracao = ++geracaoCharts;
      for (const g of graficosDashboardPagina) {
        g.dispose();
      }
      graficosDashboardPagina = [];

      const tm = obterTextosDashboard(obterLocaleAtual());
      const cores = lerCoresGraficoDoDocumento(container);

      const cGg = echarts.init(divGauge);
      graficosDashboardPagina.push(cGg);

      const objetivo = ultimoRel ? Math.max(Number(ultimoRel.meta_horas), 0.001) : 50;
      const pct = ultimoRel ? Math.min(100, (100 * Number(ultimoRel.horas)) / objetivo) : 0;

      cGg.setOption({
        tooltip: {},
        series: [
          {
            type: 'gauge',
            radius: '100%',
            startAngle: 220,
            endAngle: -35,
            min: 0,
            max: 100,
            splitNumber: 5,
            progress: {
              width: 8,
              show: true,
              color: cores.destaque,
            },
            axisLine: {
              lineStyle: { width: 8, color: [[1, cores.linhaGrade]] },
            },
            axisTick: { show: false },
            splitLine: { show: false },
            axisLabel: { distance: -16, fontSize: 10, color: cores.textoSuave },
            pointer: { show: false },
            anchor: { show: false },
            title: {
              fontSize: 12,
              color: cores.textoSuave,
            },
            detail: {
              valueAnimation: true,
              fontSize: 18,
              color: cores.textoPrincipal,
              formatter: `{value}%`,
            },
            data: [{ value: Math.round(pct), name: tm.graficoGaugeTitulo }],
          },
        ],
      });

      if (sinal.aborted || minhaGeracao !== geracaoCharts) {
        graficosDashboardPagina.forEach((x) => x.dispose());
        graficosDashboardPagina = [];
        return;
      }

      const cFin = echarts.init(divFin);
      graficosDashboardPagina.push(cFin);
      if (totaisMes.receita <= 0 && totaisMes.despesa <= 0) {
        cFin.setOption({
          title: {
            text: tm.listaVaziaGraficos,
            left: 'center',
            top: 'center',
            textStyle: { fontSize: 14, color: cores.textoSuave },
          },
        });
      } else {
        cFin.setOption({
          tooltip: {},
          legend: { bottom: 0, textStyle: { color: cores.textoPrincipal } },
          series: [
            {
              type: 'pie',
              radius: ['36%', '62%'],
              data: [
                { value: totaisMes.receita, name: tm.receitaLegenda, itemStyle: { color: cores.destaque } },
                { value: totaisMes.despesa, name: tm.despesaLegenda, itemStyle: { color: '#EF5350' } },
              ],
            },
          ],
        });
      }

      if (sinal.aborted || minhaGeracao !== geracaoCharts) {
        graficosDashboardPagina.forEach((x) => x.dispose());
        graficosDashboardPagina = [];
        return;
      }

      const cMeta = echarts.init(divMeta);
      graficosDashboardPagina.push(cMeta);
      if (contMeta.abertas === 0 && contMeta.concluidas === 0) {
        cMeta.setOption({
          title: {
            text: tm.listaVaziaGraficos,
            left: 'center',
            top: 'center',
            textStyle: { fontSize: 14, color: cores.textoSuave },
          },
        });
      } else {
        cMeta.setOption({
          tooltip: {},
          legend: { bottom: 0, textStyle: { color: cores.textoPrincipal } },
          series: [
            {
              type: 'pie',
              radius: ['36%', '62%'],
              data: [
                { value: contMeta.abertas, name: tm.metaAbertaLegenda, itemStyle: { color: cores.destaque } },
                { value: contMeta.concluidas, name: tm.metaConclLegenda, itemStyle: { color: cores.linhaGrade } },
              ],
            },
          ],
        });
      }
    }

    async function carregar(): Promise<void> {
      msgBd.hidden = true;
      const lim = limitesMesLocalAtual();
      try {
        const [nAnot, nRec, tot, ultRel, mets, nFoco] = await Promise.all([
          dashRepo.contarAnotacoesNaoArquivadas(),
          dashRepo.contarReceitas(),
          dashRepo.totaisFinanceirosNoIntervalo(lim.min, lim.maxEx),
          dashRepo.obterUltimoRelatorioMinisterioResumo(),
          dashRepo.contarMetasPorEstado(),
          contarSessoesFocoCompletas(),
        ]);

        if (sinal.aborted) return;

        const locM = obterLocaleAtual();

        const setValor = (el: HTMLElement, txt: string): void => {
          const v = el.lastElementChild;
          if (v) v.textContent = txt;
        };

        setValor(cartoes.anot, String(nAnot));
        setValor(cartoes.rec, String(nRec));
        setValor(
          cartoes.fin,
          `${formatarMoeda(tot.receita, locM)} / ${formatarMoeda(tot.despesa, locM)}`,
        );
        setValor(cartoes.mAb, String(mets.abertas));
        setValor(cartoes.mOk, String(mets.concluidas));
        setValor(cartoes.foco, String(nFoco));

        encadearCharts(ultRel, tot, mets);
      } catch {
        msgBd.hidden = false;
      }
    }

    aplicarRotulos();
    await carregar();

    registarAoLocaleAtualizado(() => {
      aplicarRotulos();
      void carregar();
    }, sinal);
  },

  unmount() {
    for (const g of graficosDashboardPagina) {
      g.dispose();
    }
    graficosDashboardPagina = [];
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default dashboardPagina;
