import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import { garantirEchartsRegistrado } from '../../infra/charts/echarts-bundle.js';
import type { EChartsType } from '../../infra/charts/echarts-bundle.js';
import { lerCoresGraficoDoDocumento } from '../../infra/charts/cores-documento.js';
import * as repo from '../../modules/metas/dados/repositorio.js';
import type { MetaRow } from '../../modules/metas/dados/types.js';
import { obterTextosMetas } from '../../modules/metas/ui/textos-metas.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

function dataInputUtcMs(s: string): number | null {
  const ok = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.trim());
  if (!ok) return null;
  const t = Date.UTC(Number(ok[1]), Number(ok[2]) - 1, Number(ok[3]), 12, 0, 0, 0);
  return Number.isNaN(t) ? null : t;
}

function formatoData(ms: number): string {
  const d = new Date(ms);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

let donutMetasPaginaAtual: EChartsType | null = null;

const metasPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const echarts = garantirEchartsRegistrado();
    const locBase = obterLocaleAtual();
    const tb = obterTextosMetas(locBase);
    document.title = `${tb.tituloPagina} — ${obterTextosConfig(locBase).appNomeTituloDoc}`;

    let metas: MetaRow[] = [];
    let selecaoId: number | null = null;
    let apagarId: number | null = null;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const h = document.createElement('h1');
    h.className = 'shell__titulo';
    h.textContent = tb.tituloPagina;
    barra.append(h);

    const divChart = document.createElement('div');
    divChart.style.height = '240px';

    const hForm = document.createElement('h2');
    hForm.className = 'shell__titulo';
    hForm.textContent = tb.novoObjetivo;

    const tituloI = mkInput(tb.tituloCampo);
    const itemI = mkInput(tb.itemCampo);
    const ativoI = mkInput(tb.ativoNomeCampo);
    const dataMeta = mkInputTipo('date');
    dataMeta.value = formatoData(Date.now());
    const prazoI = mkInputTipo('date');
    prazoI.value = formatoData(Date.now() + 7 * 86400000);
    const progAt = mkInputTipo('number');
    progAt.step = 'any';
    progAt.value = '0';
    const progAlvo = mkInputTipo('number');
    progAlvo.step = 'any';
    progAlvo.value = '100';
    const chk = document.createElement('label');
    chk.className = 'shell__checkbox-linha';
    const chkIn = document.createElement('input');
    chkIn.type = 'checkbox';
    const chkTxt = document.createTextNode(tb.concluidaLabel);
    chk.append(chkIn, chkTxt);
    const btn = document.createElement('wa-button');
    btn.textContent = tb.salvar;

    const ul = document.createElement('ul');
    ul.className = 'shell__lista';

    const dlg = document.createElement('wa-dialog');
    dlg.setAttribute('label', tb.apagarTituloDialogo);
    const dlgP = document.createElement('p');
    const dlgFt = document.createElement('div');
    dlgFt.setAttribute('slot', 'footer');
    const cx = document.createElement('wa-button');
    cx.setAttribute('variant', 'neutral');
    cx.textContent = tb.cancelar;
    const cc = document.createElement('wa-button');
    cc.setAttribute('variant', 'danger');
    cc.textContent = tb.apagarBotao;
    dlgFt.append(cx, cc);
    dlg.append(dlgP, dlgFt);

    const hLst = document.createElement('h2');
    hLst.className = 'shell__titulo';
    hLst.textContent = tb.tituloLista;

    const subDon = document.createElement('p');
    subDon.className = 'shell__sub';
    subDon.textContent = tb.donutDetalhe;

    container.replaceChildren();
    container.append(barra, hLst, ul, divChart, subDon, hForm, tituloI, itemI, ativoI, dataMeta, prazoI, progAt, progAlvo, chk, btn, dlg);

    function mkInput(ph: string): HTMLInputElement {
      const z = document.createElement('input');
      z.className = 'shell__input-texto';
      z.placeholder = ph;
      return z;
    }
    function mkInputTipo(t: string): HTMLInputElement {
      const z = document.createElement('input');
      z.type = t;
      z.className = 'shell__input-texto';
      return z;
    }

    function atualizarTodosTextosPagina(): void {
      const l = obterLocaleAtual();
      const tm = obterTextosMetas(l);
      document.title = `${tm.tituloPagina} — ${obterTextosConfig(l).appNomeTituloDoc}`;
      h.textContent = tm.tituloPagina;
      hForm.textContent = tm.novoObjetivo;
      tituloI.placeholder = tm.tituloCampo;
      itemI.placeholder = tm.itemCampo;
      ativoI.placeholder = tm.ativoNomeCampo;
      chkTxt.textContent = tm.concluidaLabel;
      btn.textContent = tm.salvar;
      hLst.textContent = tm.tituloLista;
      dlg.setAttribute('label', tm.apagarTituloDialogo);
      cx.textContent = tm.cancelar;
      cc.textContent = tm.apagarBotao;
      subDon.textContent = tm.donutDetalhe;
    }

    function reporDonut(): void {
      if (donutMetasPaginaAtual) {
        donutMetasPaginaAtual.dispose();
        donutMetasPaginaAtual = null;
      }
      const meta = metas.find((m) => m.id === selecaoId);
      const cores = lerCoresGraficoDoDocumento(container);
      const tm = obterTextosMetas(obterLocaleAtual());

      const ch = echarts.init(divChart);
      donutMetasPaginaAtual = ch;

      if (!meta) {
        ch.setOption({
          title: { text: tm.listaVazia, left: 'center', top: 'center', textStyle: { color: cores.textoSuave } },
        });
        return;
      }
      const alvo = Math.max(meta.progresso_alvo, 0.0001);
      const atual = meta.esta_concluida !== 0 ? alvo : Math.min(Math.max(meta.progresso_atual, 0), alvo);
      const pct = Math.min(100, Math.round((100 * atual) / alvo));
      const dados =
        pct >= 100 || meta.esta_concluida !== 0
          ? [{ name: 'OK', value: 100, itemStyle: { color: cores.destaque } }]
          : [
              { name: 'Progresso', value: pct, itemStyle: { color: cores.destaque } },
              { name: '—', value: 100 - pct, itemStyle: { color: cores.linhaGrade } },
            ];
      ch.setOption({
        title: { text: tm.donutTitulo + `: ${meta.titulo}`, textStyle: { color: cores.textoPrincipal } },
        series: [
          {
            type: 'pie',
            radius: ['50%', '74%'],
            label: {
              formatter: `{b}\n{d}%`,
              color: cores.textoPrincipal,
            },
            data: dados,
          },
        ],
      });
    }

    async function lista(): Promise<void> {
      metas = await repo.listarMetas();
      ul.replaceChildren();
      const tm = obterTextosMetas(obterLocaleAtual());

      if (metas.length === 0) {
        ul.append(
          Object.assign(document.createElement('li'), {
            textContent: tm.listaVazia,
          }),
        );
        selecaoId = null;
        reporDonut();
        return;
      }

      if (selecaoId === null || !metas.some((x) => x.id === selecaoId)) {
        selecaoId = metas[0]?.id ?? null;
      }

      for (const m of metas) {
        const li = document.createElement('li');
        li.className = 'shell__lista-linha';

        const r = document.createElement('button');
        r.type = 'button';
        r.className = 'shell__lista-titulo';
        Object.assign(r.style, {
          cursor: 'pointer',
          border: 'none',
          padding: '0',
          margin: '0',
          font: 'inherit',
          background: 'transparent',
          textAlign: 'left',
        });
        r.textContent =
          `${m.titulo} (${m.progresso_atual}/${m.progresso_alvo})` +
          (m.esta_concluida ? ' [ok]' : '');
        r.addEventListener(
          'click',
          () => {
            selecaoId = m.id;
            reporDonut();
          },
          { signal: sinal },
        );

        const esp = document.createElement('span');
        esp.className = 'shell__lista-meta';

        const bx = document.createElement('wa-button');
        bx.setAttribute('variant', 'danger');
        bx.textContent = tm.apagarBotao;
        bx.addEventListener(
          'click',
          () => {
            apagarId = m.id;
            dlgP.textContent = tm.apagarTituloDialogo;
            (dlg as unknown as { show?: () => void }).show?.();
          },
          { signal: sinal },
        );
        li.append(r, esp, bx);
        ul.append(li);
      }

      reporDonut();
    }

    cx.addEventListener('click', () => dlg.removeAttribute('open'), { signal: sinal });
    cc.addEventListener(
      'click',
      async () => {
        if (apagarId !== null) await repo.apagarMeta(apagarId);
        dlg.removeAttribute('open');
        selecaoId = null;
        await lista();
      },
      { signal: sinal },
    );

    btn.addEventListener(
      'click',
      async () => {
        const dm = dataInputUtcMs(dataMeta.value);
        const pf = dataInputUtcMs(prazoI.value);
        const pa = Number(progAt.value);
        const pb = Number(progAlvo.value);
        if (dm === null || pf === null || !Number.isFinite(pa) || !Number.isFinite(pb) || pb <= 0) return;
        await repo.inserirMeta({
          titulo: tituloI.value.trim() || '?',
          item: itemI.value.trim(),
          ativo_id: 0,
          ativo_nome: ativoI.value.trim(),
          data_meta: dm,
          prazo_final: pf,
          progresso_atual: pa,
          progresso_alvo: pb,
          esta_concluida: chkIn.checked ? 1 : 0,
        });
        tituloI.value = '';
        itemI.value = '';
        ativoI.value = '';
        await lista();
      },
      { signal: sinal },
    );

    atualizarTodosTextosPagina();
    await lista();

    registarAoLocaleAtualizado(() => {
      atualizarTodosTextosPagina();
      reporDonut();
      void lista();
    }, sinal);
  },
  unmount() {
    if (donutMetasPaginaAtual) donutMetasPaginaAtual.dispose();
    donutMetasPaginaAtual = null;
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default metasPagina;
