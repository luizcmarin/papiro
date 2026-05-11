import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import { garantirEchartsRegistrado } from '../../infra/charts/echarts-bundle.js';
import type { EChartsType } from '../../infra/charts/echarts-bundle.js';
import { lerCoresGraficoDoDocumento } from '../../infra/charts/cores-documento.js';
import * as repo from '../../modules/ministerio/dados/repositorio.js';
import type { EstudoBiblicoRow, RelatorioMinisterioRow } from '../../modules/ministerio/dados/types.js';
import { obterTextosMinisterio } from '../../modules/ministerio/ui/textos-ministerio.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

function utcDoInputData(s: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const t = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
  return Number.isNaN(t) ? null : t;
}

function relatórioMaisRecente(ls: RelatorioMinisterioRow[]): RelatorioMinisterioRow | null {
  let top: RelatorioMinisterioRow | null = null;
  for (const r of ls) {
    if (!top || r.ano > top.ano || (r.ano === top.ano && r.mes > top.mes)) top = r;
  }
  return top;
}

function ordenRelCrescente(ls: RelatorioMinisterioRow[]): RelatorioMinisterioRow[] {
  return [...ls].sort((a, b) => (a.ano !== b.ano ? a.ano - b.ano : a.mes - b.mes));
}

let ministerioGraficosPagina: EChartsType[] = [];

function mkCampo(rotulo: string, entrada: HTMLElement): HTMLElement {
  const w = document.createElement('label');
  w.className = 'shell__campo';
  const s = document.createElement('span');
  s.className = 'shell__etiqueta';
  s.textContent = rotulo;
  w.append(s, entrada);
  return w;
}

const ministerioPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const echarts = garantirEchartsRegistrado();
    function limparCharts(): void {
      ministerioGraficosPagina.forEach((x) => x.dispose());
      ministerioGraficosPagina = [];
    }
    limparCharts();

    let rels: RelatorioMinisterioRow[] = [];
    let ests: EstudoBiblicoRow[] = [];
    let idApagarRel: number | null = null;
    let idApagarEst: number | null = null;

    const lm = obterLocaleAtual();
    const tm0 = obterTextosMinisterio(lm);
    document.title = `${tm0.tituloPagina} — ${obterTextosConfig(lm).appNomeTituloDoc}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const ht = document.createElement('h1');
    ht.className = 'shell__titulo';
    ht.textContent = tm0.tituloPagina;
    barra.append(ht);

    const subBarTxt = document.createElement('p');
    subBarTxt.className = 'shell__sub';
    const bxBarra = document.createElement('div');
    bxBarra.style.height = '240px';

    const subGgTxt = document.createElement('p');
    subGgTxt.className = 'shell__sub';
    const bxGauge = document.createElement('div');
    bxGauge.style.height = '196px';

    const hRel = document.createElement('h2');
    hRel.className = 'shell__titulo';

    function num(mi?: number, ma?: number, valor?: string): HTMLInputElement {
      const z = document.createElement('input');
      z.type = 'number';
      z.className = 'shell__input-texto';
      if (mi !== undefined) z.min = String(mi);
      if (ma !== undefined) z.max = String(ma);
      if (valor !== undefined) z.value = valor;
      return z;
    }

    function str(): HTMLInputElement {
      const z = document.createElement('input');
      z.type = 'text';
      z.className = 'shell__input-texto';
      return z;
    }

    const inMes = num(1, 12, String(new Date().getMonth() + 1));
    const inAno = num(undefined, undefined, String(new Date().getFullYear()));
    const inAnoServ = num(undefined, undefined, '1');

    const inHoras = num(undefined, undefined, '8');
    inHoras.step = 'any';

    const inEstudos = num(undefined, undefined, '0');
    const inPart = num(undefined, undefined, '1');
    const inTipo = str();

    const inMetaHoras = num(undefined, undefined, '40');
    inMetaHoras.step = 'any';

    const inNotas = document.createElement('textarea');
    inNotas.rows = 2;
    inNotas.className = 'shell__input-texto';

    const inDirNome = str();
    const inDirTel = str();

    const formaRelWrap = document.createElement('div');
    formaRelWrap.className = 'shell__filtros';

    const btnRelatorio = document.createElement('wa-button');
    btnRelatorio.textContent = tm0.salvarRelatorio;

    const listaRel = document.createElement('ul');
    listaRel.className = 'shell__lista';

    const dlgRel = document.createElement('wa-dialog');
    dlgRel.setAttribute('label', tm0.apagarRelatorioTitulo);
    const dlgRelP = document.createElement('p');
    dlgRelP.textContent = tm0.apagarRelatorioTitulo;
    const dlgFtR = document.createElement('div');
    dlgFtR.setAttribute('slot', 'footer');
    const dlgRelX = document.createElement('wa-button');
    dlgRelX.setAttribute('variant', 'neutral');
    dlgRelX.textContent = tm0.cancelar;
    const dlgRelOk = document.createElement('wa-button');
    dlgRelOk.setAttribute('variant', 'danger');
    dlgRelOk.textContent = tm0.confirmarExclusao;
    dlgFtR.append(dlgRelX, dlgRelOk);
    dlgRel.append(dlgRelP, dlgFtR);

    const hEstudos = document.createElement('h2');
    hEstudos.className = 'shell__titulo';

    const eNome = str();
    const eContato = str();
    const eEndereco = str();
    const eZoom = str();
    const ePubAt = str();
    const eLicao = num(undefined, undefined, '1');
    const eDia = str();
    const eHrMin = num(undefined, undefined, '1140');

    const eProximo = document.createElement('input');
    eProximo.type = 'date';
    eProximo.className = 'shell__input-texto';
    const hj = new Date();
    const pad = (n: number): string => String(n).padStart(2, '0');
    eProximo.value = `${hj.getFullYear()}-${pad(hj.getMonth() + 1)}-${pad(hj.getDate())}`;

    const eNotEst = document.createElement('textarea');
    eNotEst.rows = 2;
    eNotEst.className = 'shell__input-texto';

    const formaEs = document.createElement('div');
    formaEs.className = 'shell__filtros';

    const btnEstudoBtn = document.createElement('wa-button');
    btnEstudoBtn.textContent = tm0.salvarEstudo;

    const listaEst = document.createElement('ul');
    listaEst.className = 'shell__lista';

    const dlgEst = document.createElement('wa-dialog');
    dlgEst.setAttribute('label', tm0.apagarEstudoTitulo);
    const dlgEstP = document.createElement('p');
    dlgEstP.textContent = tm0.apagarEstudoTitulo;
    const dlgFtE = document.createElement('div');
    dlgFtE.setAttribute('slot', 'footer');
    const dlgEstX = document.createElement('wa-button');
    dlgEstX.setAttribute('variant', 'neutral');
    dlgEstX.textContent = tm0.cancelar;
    const dlgEstOk = document.createElement('wa-button');
    dlgEstOk.setAttribute('variant', 'danger');
    dlgEstOk.textContent = tm0.confirmarExclusao;
    dlgFtE.append(dlgEstX, dlgEstOk);
    dlgEst.append(dlgEstP, dlgFtE);

    container.replaceChildren();
    container.append(
      barra,
      subBarTxt,
      bxBarra,
      subGgTxt,
      bxGauge,
      hRel,
      formaRelWrap,
      btnRelatorio,
      listaRel,
      dlgRel,
      hEstudos,
      formaEs,
      btnEstudoBtn,
      listaEst,
      dlgEst,
    );

    function rebildRel(tm: ReturnType<typeof obterTextosMinisterio>): void {
      formaRelWrap.replaceChildren(
        mkCampo(tm.mesCampo, inMes),
        mkCampo(tm.anoCampo, inAno),
        mkCampo(tm.anoServicoCampo, inAnoServ),
        mkCampo(tm.horasCampo, inHoras),
        mkCampo(tm.estudosCampo, inEstudos),
        mkCampo(tm.participacaoCampo, inPart),
        mkCampo(tm.tipoCampo, inTipo),
        mkCampo(tm.metaHorasCampo, inMetaHoras),
        mkCampo(tm.notasPubCampo, inNotas),
        mkCampo(tm.dirigenteNome, inDirNome),
        mkCampo(tm.dirigenteTel, inDirTel),
      );
    }

    function rebildEst(tm: ReturnType<typeof obterTextosMinisterio>): void {
      formaEs.replaceChildren(
        mkCampo(tm.nomeEstudo, eNome),
        mkCampo(tm.contatoCampo, eContato),
        mkCampo(tm.enderecoCampo, eEndereco),
        mkCampo(tm.zoomCampo, eZoom),
        mkCampo(tm.publicacaoCampo, ePubAt),
        mkCampo(tm.licaoCampo, eLicao),
        mkCampo(tm.diaCampo, eDia),
        mkCampo(tm.horarioMinCampo, eHrMin),
        mkCampo(tm.proximoEstudoCampo, eProximo),
        mkCampo(tm.notasEstudoCampo, eNotEst),
      );
    }

    rebildRel(tm0);
    rebildEst(tm0);

    function pintarCharts(tm: ReturnType<typeof obterTextosMinisterio>): void {
      limparCharts();
      const cores = lerCoresGraficoDoDocumento(container);

      const ord = ordenRelCrescente(rels);
      const cBarra = echarts.init(bxBarra);
      ministerioGraficosPagina.push(cBarra);

      if (ord.length === 0) {
        cBarra.setOption({
          title: {
            text: tm.semRelatorios,
            left: 'center',
            top: 'middle',
            textStyle: { color: cores.textoSuave },
          },
        });
      } else {
        cBarra.setOption({
          textStyle: { color: cores.textoPrincipal },
          tooltip: {},
          grid: { left: 56, bottom: 32, containLabel: true },
          xAxis: {
            type: 'category',
            data: ord.map((r) => `${pad(r.mes)}/${String(r.ano)}`),
          },
          yAxis: { type: 'value' },
          series: [{ type: 'bar', data: ord.map((r) => r.horas), itemStyle: { color: cores.destaque } }],
        });
      }

      const cGg = echarts.init(bxGauge);
      ministerioGraficosPagina.push(cGg);

      const topo = relatórioMaisRecente(rels);
      const objetivoMeta = topo ? Math.max(Number(topo.meta_horas), 0.001) : 50;
      const pct = topo ? Math.min(100, (100 * Number(topo.horas)) / objetivoMeta) : 0;

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
    }

    function aplicarRotulos(tm: ReturnType<typeof obterTextosMinisterio>): void {
      document.title = `${tm.tituloPagina} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      ht.textContent = tm.tituloPagina;
      subBarTxt.textContent = tm.graficoBarrasTitulo;
      subGgTxt.textContent = `${tm.graficoGaugeTitulo}. ${tm.gaugeDetalhe}`;
      hRel.textContent = tm.relatoriosTitulo;
      rebildRel(tm);
      btnRelatorio.textContent = tm.salvarRelatorio;
      dlgRel.setAttribute('label', tm.apagarRelatorioTitulo);
      dlgRelP.textContent = tm.apagarRelatorioTitulo;
      dlgRelX.textContent = tm.cancelar;
      dlgRelOk.textContent = tm.confirmarExclusao;

      hEstudos.textContent = tm.estudosTitulo;
      rebildEst(tm);
      btnEstudoBtn.textContent = tm.salvarEstudo;

      dlgEst.setAttribute('label', tm.apagarEstudoTitulo);
      dlgEstP.textContent = tm.apagarEstudoTitulo;
      dlgEstX.textContent = tm.cancelar;
      dlgEstOk.textContent = tm.confirmarExclusao;
      redesRel(tm);
      redesEst(tm);
      pintarCharts(tm);
    }

    function redesRel(tm: ReturnType<typeof obterTextosMinisterio>): void {
      listaRel.replaceChildren();

      const rotuloListaApagar =
        obterLocaleAtual() === 'en'
          ? 'Delete'
          : 'Apagar';

      const ordenadoRev = ordenRelCrescente(rels).reverse();
      if (ordenadoRev.length === 0) {
        const li = document.createElement('li');
        li.className = 'shell__sub';
        li.textContent = tm.semRelatorios;
        listaRel.append(li);
        return;
      }

      for (const r of ordenadoRev) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';
        const t = document.createElement('span');
        t.className = 'shell__lista-titulo';
        t.textContent = `${pad(r.mes)}/${r.ano}`;
        const m = document.createElement('span');
        m.className = 'shell__lista-meta';
        m.textContent = `${r.horas} h`;

        const b = document.createElement('wa-button');
        b.setAttribute('variant', 'danger');
        b.textContent = rotuloListaApagar;
        b.addEventListener(
          'click',
          () => {
            idApagarRel = r.id;
            const dlgShow = dlgRel as unknown as { show?: () => void };
            dlgShow.show?.();
          },
          { signal: sinal },
        );
        li.append(t, m, b);
        listaRel.append(li);
      }
    }

    function redesEst(tm: ReturnType<typeof obterTextosMinisterio>): void {
      listaEst.replaceChildren();
      const rotuloListaApagar =
        obterLocaleAtual() === 'en'
          ? 'Delete'
          : 'Apagar';

      if (ests.length === 0) {
        const li = document.createElement('li');
        li.className = 'shell__sub';
        li.textContent = tm.listaEstudosVazia;
        listaEst.append(li);
        return;
      }

      for (const eRow of ests) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';
        const t = document.createElement('span');
        t.className = 'shell__lista-titulo';
        t.textContent = eRow.nome;
        const m = document.createElement('span');
        m.className = 'shell__lista-meta';
        m.textContent = eRow.publicacao_atual.replace(/\s+/u, ' ').slice(0, 42);

        const b = document.createElement('wa-button');
        b.setAttribute('variant', 'danger');
        b.textContent = rotuloListaApagar;
        b.addEventListener(
          'click',
          () => {
            idApagarEst = eRow.id;
            const dlgShow = dlgEst as unknown as { show?: () => void };
            dlgShow.show?.();
          },
          { signal: sinal },
        );

        li.append(t, m, b);
        listaEst.append(li);
      }
    }

    async function dados(): Promise<void> {
      rels = await repo.listarRelatorios();
      ests = await repo.listarEstudosBiblicos();
      aplicarRotulos(obterTextosMinisterio(obterLocaleAtual()));
    }

    dlgRelX.addEventListener(
      'click',
      () => {
        const dlgHide = dlgRel as unknown as { hide?: () => void };
        dlgHide.hide?.();
        idApagarRel = null;
      },
      { signal: sinal },
    );

    dlgRelOk.addEventListener(
      'click',
      async () => {
        const dlgHide = dlgRel as unknown as { hide?: () => void };
        dlgHide.hide?.();
        if (idApagarRel !== null) {
          await repo.apagarRelatorio(idApagarRel);
          idApagarRel = null;
        }
        await dados();
      },
      { signal: sinal },
    );

    dlgEstX.addEventListener(
      'click',
      () => {
        idApagarEst = null;
        const dlgHide = dlgEst as unknown as { hide?: () => void };
        dlgHide.hide?.();
      },
      { signal: sinal },
    );

    dlgEstOk.addEventListener(
      'click',
      async () => {
        const dlgHide = dlgEst as unknown as { hide?: () => void };
        dlgHide.hide?.();
        if (idApagarEst !== null) {
          await repo.apagarEstudoBiblico(idApagarEst);
          idApagarEst = null;
        }
        await dados();
      },
      { signal: sinal },
    );

    btnRelatorio.addEventListener(
      'click',
      async () => {
        const mes = Number(inMes.value);
        const ano = Number(inAno.value);
        await repo.inserirRelatorio({
          mes,
          ano,
          ano_servico: Number(inAnoServ.value),
          horas: Number(inHoras.value),
          estudos: Number(inEstudos.value),
          participacao: Number(inPart.value),
          tipo_publicador: inTipo.value.trim(),
          meta_horas: Number(inMetaHoras.value),
          notas_publicacoes: inNotas.value.trim(),
          telefone_dirigente: inDirTel.value.trim(),
          nome_dirigente: inDirNome.value.trim(),
        });

        await dados();
      },
      { signal: sinal },
    );

    btnEstudoBtn.addEventListener(
      'click',
      async () => {
        const ms = utcDoInputData(eProximo.value);

        await repo.inserirEstudoBiblico({
          nome: eNome.value.trim(),
          contato: eContato.value.trim(),
          endereco: eEndereco.value.trim(),
          zoom_link: eZoom.value.trim(),
          publicacao_atual: ePubAt.value.trim(),
          licao_atual: Number(eLicao.value),
          dia_semana: eDia.value.trim(),
          horario_minutos: Number(eHrMin.value),
          proximo_estudo_em: ms ?? Date.now(),
          notas: eNotEst.value.trim(),
        });

        eNome.value = '';
        await dados();
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(() => void dados(), sinal);

    await dados();

  },

  unmount() {
    ministerioGraficosPagina.forEach((x) => x.dispose());
    ministerioGraficosPagina = [];
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default ministerioPagina;
