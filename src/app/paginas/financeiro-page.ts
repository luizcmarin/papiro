import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/dialog/dialog.js';

import { garantirEchartsRegistrado } from '../../infra/charts/echarts-bundle.js';
import type { EChartsType } from '../../infra/charts/echarts-bundle.js';
import { lerCoresGraficoDoDocumento } from '../../infra/charts/cores-documento.js';
import * as repo from '../../modules/financeiro/dados/repositorio.js';
import type {
  CategoriaFinanceiroRow,
  TipoTransacao,
  TransacaoRow,
} from '../../modules/financeiro/dados/types.js';
import { obterTextosFinanceiro } from '../../modules/financeiro/ui/textos-financeiro.js';
import type { LocaleId } from '../../modules/shared/ui/locale.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

function limitesMesReferencia(anoMes: string): { min: number; maxEx: number } | null {
  const ok = /^(\d{4})-(\d{2})$/.exec(anoMes.trim());
  if (!ok) return null;
  const ano = Number(ok[1]);
  const mesIdx = Number(ok[2]) - 1;
  if (mesIdx < 0 || mesIdx > 11) return null;
  return {
    min: Date.UTC(ano, mesIdx, 1, 0, 0, 0, 0),
    maxEx: Date.UTC(ano, mesIdx + 1, 1, 0, 0, 0, 0),
  };
}

function formatoDataInput(ms: number): string {
  const d = new Date(ms);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dia = String(d.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${dia}`;
}

function parseDataInputParaUtc(s: string): number | null {
  const ok = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.trim());
  if (!ok) return null;
  const t = Date.UTC(Number(ok[1]), Number(ok[2]) - 1, Number(ok[3]), 12, 0, 0, 0);
  return Number.isNaN(t) ? null : t;
}

function mesAtualAAAAMM(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

const nfMoedaPorLocale = new Map<LocaleId, Intl.NumberFormat>();

function formatarMoeda(v: number, localeId: LocaleId): string {
  let nf = nfMoedaPorLocale.get(localeId);
  if (!nf) {
    nf = new Intl.NumberFormat(localeId === 'en' ? 'en-US' : 'pt-BR', {
      style: 'currency',
      currency: localeId === 'en' ? 'USD' : 'BRL',
      maximumFractionDigits: 2,
    });
    nfMoedaPorLocale.set(localeId, nf);
  }
  return nf.format(v);
}

/** Instâncias ECharts da página atual (dispose no unmount ou remontagem). */
let graficosFinanceiroPaginaAtual: EChartsType[] = [];

const financeiroPagina: PaginaMontavel = {
  async mount(container, sinal) {
    for (const gc of graficosFinanceiroPaginaAtual) {
      gc.dispose();
    }
    graficosFinanceiroPaginaAtual = [];

    const echarts = garantirEchartsRegistrado();
    const loc = obterLocaleAtual();
    const tLoc = obterTextosFinanceiro(loc);
    const appNome = obterTextosConfig(loc).appNomeTituloDoc;
    document.title = `${tLoc.tituloPagina} — ${appNome}`;

    const divBar = document.createElement('div');
    divBar.style.height = '260px';
    divBar.style.marginBottom = 'var(--wa-space-l, 1.5rem)';
    const divPie = document.createElement('div');
    divPie.style.height = '260px';

    let categorias: CategoriaFinanceiroRow[] = [];
    let transacoes: TransacaoRow[] = [];

    let mesRef = mesAtualAAAAMM();
    let idApagarTx: number | null = null;
    let idApagarCat: number | null = null;
    let editingTx: TransacaoRow | null = null;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const titulo = document.createElement('h1');
    titulo.className = 'shell__titulo';
    titulo.textContent = tLoc.tituloPagina;
    barra.append(titulo);

    const wrapMes = document.createElement('div');
    wrapMes.className = 'shell__campo';
    const rotMes = document.createElement('label');
    rotMes.className = 'shell__etiqueta';
    rotMes.setAttribute('for', 'fin-mes-ref');
    rotMes.textContent = tLoc.mesReferencia;
    const inputMes = document.createElement('input');
    inputMes.id = 'fin-mes-ref';
    inputMes.type = 'month';
    inputMes.className = 'shell__input-texto';
    inputMes.value = mesRef;
    wrapMes.append(rotMes, inputMes);

    const grafWrap = document.createElement('div');
    grafWrap.className = 'shell__cartao';
    const subBar = document.createElement('h2');
    subBar.className = 'shell__subtitulo';
    subBar.textContent = tLoc.graficoBarrasTitulo;
    const subPie = document.createElement('h2');
    subPie.className = 'shell__subtitulo';
    subPie.textContent = tLoc.graficoPizzaTitulo;
    grafWrap.append(subBar, divBar, subPie, divPie);

    const secCat = document.createElement('section');
    const hCat = document.createElement('h2');
    hCat.className = 'shell__titulo';
    hCat.textContent = tLoc.categoriasTitulo;
    const formCat = document.createElement('div');
    formCat.className = 'shell__form-linha';
    const nCat = document.createElement('input');
    nCat.placeholder = tLoc.campoNome;
    nCat.className = 'shell__input-texto';
    const iCat = document.createElement('input');
    iCat.placeholder = tLoc.campoIcone;
    iCat.className = 'shell__input-texto';
    const cCor = document.createElement('input');
    cCor.type = 'text';
    cCor.placeholder = tLoc.campoCor;
    cCor.className = 'shell__input-texto';
    cCor.value = '#4FC3F7';
    const lCat = document.createElement('input');
    lCat.type = 'number';
    lCat.step = 'any';
    lCat.placeholder = tLoc.campoLimite;
    lCat.className = 'shell__input-texto';
    lCat.value = '0';
    const btnCat = document.createElement('wa-button');
    btnCat.textContent = tLoc.novaCategoria;
    formCat.append(nCat, iCat, cCor, lCat, btnCat);

    const ulCat = document.createElement('ul');
    ulCat.className = 'shell__lista';
    secCat.append(hCat, formCat, ulCat);

    const secTx = document.createElement('section');
    const hTx = document.createElement('h2');
    hTx.className = 'shell__titulo';
    hTx.textContent = tLoc.transacoesTitulo;
    const formTx = document.createElement('div');
    formTx.className = 'shell__form-linha';
    const dDesc = document.createElement('input');
    dDesc.className = 'shell__input-texto';
    dDesc.placeholder = tLoc.campoDescricao;
    const dVal = document.createElement('input');
    dVal.type = 'number';
    dVal.step = 'any';
    dVal.className = 'shell__input-texto';
    dVal.placeholder = tLoc.campoValor;
    const dTipo = document.createElement('select');
    dTipo.className = 'shell__select';
    const oR = document.createElement('option');
    oR.value = '0';
    oR.textContent = tLoc.tipoReceita;
    const oD = document.createElement('option');
    oD.value = '1';
    oD.textContent = tLoc.tipoDespesa;
    dTipo.append(oR, oD);
    const dCat = document.createElement('select');
    dCat.className = 'shell__select';
    const dVenc = document.createElement('input');
    dVenc.type = 'date';
    dVenc.className = 'shell__input-texto';
    dVenc.value = formatoDataInput(Date.now());
    const dPago = document.createElement('label');
    dPago.className = 'shell__checkbox-linha';
    const ckPago = document.createElement('input');
    ckPago.type = 'checkbox';
    ckPago.checked = true;
    const textoPago = document.createTextNode(tLoc.pagoLabel);
    dPago.append(ckPago, textoPago);
    const btnTx = document.createElement('wa-button');
    btnTx.textContent = tLoc.novaTransacao;
    formTx.append(dDesc, dVal, dTipo, dCat, dVenc, dPago, btnTx);

    const ulTx = document.createElement('ul');
    ulTx.className = 'shell__lista';
    secTx.append(hTx, formTx, ulTx);

    const msgBd = document.createElement('p');
    msgBd.className = 'shell__sub';
    msgBd.hidden = true;

    let geracaoCharts = 0;

    const dialogoCat = document.createElement('wa-dialog');
    dialogoCat.setAttribute('label', tLoc.apagarCategoriaTitulo);
    const dlgCatP = document.createElement('p');
    const dlgCatF = document.createElement('div');
    dlgCatF.setAttribute('slot', 'footer');
    const dlgCatCx = document.createElement('wa-button');
    dlgCatCx.setAttribute('variant', 'neutral');
    dlgCatCx.textContent = tLoc.cancelarDialogo;
    const dlgCatOk = document.createElement('wa-button');
    dlgCatOk.setAttribute('variant', 'danger');
    dlgCatOk.textContent = tLoc.apagarConfirmar;
    dlgCatF.append(dlgCatCx, dlgCatOk);
    dialogoCat.append(dlgCatP, dlgCatF);

    const dialogoTx = document.createElement('wa-dialog');
    dialogoTx.setAttribute('label', tLoc.apagarTransacaoTitulo);
    const dlgTxP = document.createElement('p');
    const dlgTxF = document.createElement('div');
    dlgTxF.setAttribute('slot', 'footer');
    const dlgTxCx = document.createElement('wa-button');
    dlgTxCx.setAttribute('variant', 'neutral');
    dlgTxCx.textContent = tLoc.cancelarDialogo;
    const dlgTxOk = document.createElement('wa-button');
    dlgTxOk.setAttribute('variant', 'danger');
    dlgTxOk.textContent = tLoc.apagarConfirmar;
    dlgTxF.append(dlgTxCx, dlgTxOk);
    dialogoTx.append(dlgTxP, dlgTxF);

    container.replaceChildren();
    container.append(barra, wrapMes, grafWrap, secCat, secTx, msgBd, dialogoCat, dialogoTx);

    function aplicarTitulosLocales(): void {
      const lc = obterLocaleAtual();
      const tm = obterTextosFinanceiro(lc);
      const nm = obterTextosConfig(lc).appNomeTituloDoc;
      document.title = `${tm.tituloPagina} — ${nm}`;
      titulo.textContent = tm.tituloPagina;
      rotMes.textContent = tm.mesReferencia;
      subBar.textContent = tm.graficoBarrasTitulo;
      subPie.textContent = tm.graficoPizzaTitulo;
      hCat.textContent = tm.categoriasTitulo;
      hTx.textContent = tm.transacoesTitulo;
      nCat.placeholder = tm.campoNome;
      iCat.placeholder = tm.campoIcone;
      cCor.placeholder = tm.campoCor;
      lCat.placeholder = tm.campoLimite;
      btnCat.textContent = tm.novaCategoria;
      dDesc.placeholder = tm.campoDescricao;
      dVal.placeholder = tm.campoValor;
      oR.textContent = tm.tipoReceita;
      oD.textContent = tm.tipoDespesa;
      textoPago.textContent = tm.pagoLabel;
      btnTx.textContent = tm.salvarTransacao;
      dialogoCat.setAttribute('label', tm.apagarCategoriaTitulo);
      dialogoTx.setAttribute('label', tm.apagarTransacaoTitulo);
      dlgCatCx.textContent = tm.cancelarDialogo;
      dlgCatOk.textContent = tm.apagarConfirmar;
      dlgTxCx.textContent = tm.cancelarDialogo;
      dlgTxOk.textContent = tm.apagarConfirmar;
    }

    function encadearCharts(): void {
      const minhaGeracao = ++geracaoCharts;
      for (const g of graficosFinanceiroPaginaAtual) {
        g.dispose();
      }
      graficosFinanceiroPaginaAtual = [];

      void (async (): Promise<void> => {
        const cores = lerCoresGraficoDoDocumento(container);
        const localeId = obterLocaleAtual();
        const tmGraf = obterTextosFinanceiro(localeId);
        if (sinal.aborted || minhaGeracao !== geracaoCharts) return;
        let pts;
        try {
          pts = await repo.agregarReceitaDespesaUltimosMeses(8);
        } catch {
          return;
        }
        if (sinal.aborted || minhaGeracao !== geracaoCharts) return;
        if (divBar.offsetParent === null && !divBar.isConnected) return;

        const cBar = echarts.init(divBar);
        graficosFinanceiroPaginaAtual.push(cBar);
        cBar.setOption({
          title: { show: false },
          textStyle: { color: cores.textoPrincipal },
          tooltip: {},
          legend: { textStyle: { color: cores.textoPrincipal } },
          xAxis: {
            type: 'category',
            data: pts.map((p) => p.rotulo),
            axisLine: { lineStyle: { color: cores.linhaGrade } },
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: (v: number): string => formatarMoeda(v, localeId),
            },
          },
          series: [
            {
              type: 'bar',
              name: tmGraf.tipoReceita,
              data: pts.map((p) => p.receita),
              itemStyle: { color: cores.destaque },
            },
            {
              type: 'bar',
              name: tmGraf.tipoDespesa,
              data: pts.map((p) => p.despesa),
              itemStyle: { color: '#EF5350' },
            },
          ],
        });

        const limites = limitesMesReferencia(mesRef);
        let agrega: Awaited<ReturnType<typeof repo.somarDespesasPorCategoriaNoIntervalo>>;
        if (!limites) agrega = [];
        else {
          try {
            agrega = await repo.somarDespesasPorCategoriaNoIntervalo(limites.min, limites.maxEx);
          } catch {
            agrega = [];
          }
        }
        if (sinal.aborted || minhaGeracao !== geracaoCharts) {
          graficosFinanceiroPaginaAtual.forEach((x) => x.dispose());
          graficosFinanceiroPaginaAtual = [];
          return;
        }
        const cPie = echarts.init(divPie);
        graficosFinanceiroPaginaAtual.push(cPie);
        if (agrega.length === 0) {
          cPie.setOption({
            title: {
              text: tmGraf.listaVaziaGraficos,
              left: 'center',
              top: 'center',
              textStyle: { fontSize: 14, color: cores.textoSuave },
            },
          });
          return;
        }

        if (sinal.aborted || minhaGeracao !== geracaoCharts) {
          graficosFinanceiroPaginaAtual.forEach((x) => x.dispose());
          graficosFinanceiroPaginaAtual = [];
          return;
        }
        cPie.setOption({
          tooltip: {},
          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: { color: cores.textoPrincipal },
          },
          series: [
            {
              type: 'pie',
              radius: ['40%', '70%'],
              data: agrega.map((r) => ({ name: r.nome, value: r.total, itemStyle: { color: r.hex_cor } })),
            },
          ],
        });
      })();
    }

    async function garantirSeedCategoria(): Promise<void> {
      if (categorias.length > 0) return;
      await repo.inserirCategoria({
        nome: 'Geral',
        icone: 'payments',
        hex_cor: '#4FC3F7',
        limite_mensal: 0,
      });
    }

    async function refrescarListaCategorias(): Promise<void> {
      try {
        categorias = await repo.listarCategorias();
      } catch {
        msgBd.hidden = false;
        msgBd.textContent = obterTextosFinanceiro(obterLocaleAtual()).erroBd;
        return;
      }
      if (categorias.length === 0) {
        await garantirSeedCategoria();
        categorias = await repo.listarCategorias();
      }

      ulCat.replaceChildren();
      const tm = obterTextosFinanceiro(obterLocaleAtual());
      dCat.replaceChildren();
      const opEsc = document.createElement('option');
      opEsc.value = '';
      opEsc.textContent = '—';
      dCat.append(opEsc);
      for (const c of categorias) {
        const opt = document.createElement('option');
        opt.value = String(c.id);
        opt.textContent = c.nome;
        dCat.append(opt);

        const li = document.createElement('li');
        li.className = 'shell__lista-item';
        const span = document.createElement('span');
        span.textContent = `${c.nome} · ${formatarMoeda(c.limite_mensal, obterLocaleAtual())}`;
        const bAp = document.createElement('wa-button');
        bAp.setAttribute('variant', 'danger');
        bAp.textContent = tm.apagar;
        bAp.addEventListener('click', () => {
          idApagarCat = c.id;
          dlgCatP.textContent = tm.apagarCategoriaTitulo;
          (dialogoCat as unknown as { show?: () => void }).show?.();
        }, { signal: sinal });
        li.append(span, bAp);
        ulCat.append(li);
      }
      if (categorias.length === 0) {
        ulCat.append(Object.assign(document.createElement('li'), { textContent: tm.listaVaziaCategorias }));
      }
    }

    async function refrescarTransacoesMes(): Promise<void> {
      const limites = limitesMesReferencia(mesRef);
      if (!limites) return;
      try {
        transacoes = await repo.listarTransacoesNoIntervalo(limites.min, limites.maxEx);
      } catch {
        msgBd.hidden = false;
        msgBd.textContent = obterTextosFinanceiro(obterLocaleAtual()).erroBd;
        return;
      }
      ulTx.replaceChildren();
      const tm = obterTextosFinanceiro(obterLocaleAtual());
      if (transacoes.length === 0) {
        ulTx.append(
          Object.assign(document.createElement('li'), {
            textContent: tm.listaVaziaTransacoes,
          }),
        );
        return;
      }
      const mapaNome = new Map(categorias.map((c) => [c.id, c.nome] as const));
      for (const tx of transacoes) {
        const li = document.createElement('li');
        li.className = 'shell__lista-item';
        const tag = tx.tipo === 0 ? tm.tipoReceita : tm.tipoDespesa;
        const lin = document.createElement('span');
        lin.textContent = `${tag} · ${tx.descricao} · ${formatarMoeda(tx.valor, obterLocaleAtual())} · ${mapaNome.get(tx.categoria_id) ?? '—'} · ${formatarDataParaUi(tx.data_vencimento)}`;
        const bEd = document.createElement('wa-button');
        bEd.setAttribute('variant', 'neutral');
        bEd.textContent = tm.editar;
        bEd.addEventListener(
          'click',
          () => {
            editingTx = tx;
            dDesc.value = tx.descricao;
            dVal.value = String(tx.valor);
            dTipo.value = String(tx.tipo);
            dCat.value = String(tx.categoria_id);
            dVenc.value = formatoDataInput(tx.data_vencimento);
            ckPago.checked = tx.esta_pago !== 0;
            btnTx.textContent = tm.salvarTransacao;
          },
          { signal: sinal },
        );
        const bAp = document.createElement('wa-button');
        bAp.setAttribute('variant', 'danger');
        bAp.textContent = tm.apagar;
        bAp.addEventListener(
          'click',
          () => {
            idApagarTx = tx.id;
            dlgTxP.textContent = tm.apagarTransacaoTitulo;
            (dialogoTx as unknown as { show?: () => void }).show?.();
          },
          { signal: sinal },
        );
        li.append(lin, bEd, bAp);
        ulTx.append(li);
      }
    }

    function formatarDataParaUi(ms: number): string {
      return formatoDataInput(ms);
    }

    aplicarTitulosLocales();
    await refrescarListaCategorias();
    await refrescarTransacoesMes();
    encadearCharts();

    inputMes.addEventListener(
      'change',
      async () => {
        mesRef = inputMes.value;
        await refrescarTransacoesMes();
        encadearCharts();
      },
      { signal: sinal },
    );

    btnCat.addEventListener(
      'click',
      async () => {
        msgBd.hidden = true;
        const limStr = Number(lCat.value);
        try {
          await repo.inserirCategoria({
            nome: nCat.value.trim(),
            icone: iCat.value.trim() || 'payments',
            hex_cor: cCor.value.trim() || '#4FC3F7',
            limite_mensal: Number.isFinite(limStr) ? limStr : 0,
          });
          nCat.value = '';
          iCat.value = '';
          await refrescarListaCategorias();
          await refrescarTransacoesMes();
        } catch {
          msgBd.hidden = false;
          msgBd.textContent = obterTextosFinanceiro(obterLocaleAtual()).erroBd;
        }
      },
      { signal: sinal },
    );

    btnTx.addEventListener(
      'click',
      async () => {
        msgBd.hidden = true;
        const catId = Number(dCat.value);
        const val = Number(dVal.value.replace(',', '.'));
        const utc = parseDataInputParaUtc(dVenc.value);
        if (!Number.isFinite(catId) || catId <= 0 || !Number.isFinite(val) || utc === null) {
          return;
        }
        const entrada = {
          descricao: dDesc.value.trim(),
          valor: Math.abs(val),
          tipo: Number(dTipo.value) as TipoTransacao,
          categoria_id: catId,
          data_vencimento: utc,
          esta_pago: ckPago.checked ? 1 : 0,
        };
        try {
          if (editingTx) {
            await repo.atualizarTransacao(editingTx.id, entrada);
            editingTx = null;
          } else {
            await repo.inserirTransacao(entrada);
          }
          dDesc.value = '';
          dVal.value = '';
          dTipo.value = '1';
          dVenc.value = formatoDataInput(Date.now());
          ckPago.checked = true;
          editingTx = null;
          btnTx.textContent = obterTextosFinanceiro(obterLocaleAtual()).novaTransacao;
          await refrescarTransacoesMes();
          encadearCharts();
        } catch {
          msgBd.hidden = false;
          msgBd.textContent = obterTextosFinanceiro(obterLocaleAtual()).erroBd;
        }
      },
      { signal: sinal },
    );

    dlgCatCx.addEventListener('click', () => dialogoCat.removeAttribute('open'), { signal: sinal });
    dlgCatOk.addEventListener(
      'click',
      async () => {
        if (idApagarCat !== null) {
          await repo.apagarCategoria(idApagarCat);
          idApagarCat = null;
        }
        dialogoCat.removeAttribute('open');
        await refrescarListaCategorias();
        await refrescarTransacoesMes();
        encadearCharts();
      },
      { signal: sinal },
    );

    dlgTxCx.addEventListener('click', () => dialogoTx.removeAttribute('open'), { signal: sinal });
    dlgTxOk.addEventListener(
      'click',
      async () => {
        if (idApagarTx !== null) {
          await repo.apagarTransacao(idApagarTx);
          idApagarTx = null;
        }
        dialogoTx.removeAttribute('open');
        await refrescarTransacoesMes();
        encadearCharts();
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(() => {
      aplicarTitulosLocales();
      void refrescarListaCategorias();
      void refrescarTransacoesMes();
      encadearCharts();
    }, sinal);
  },

  unmount() {
    for (const gc of graficosFinanceiroPaginaAtual) {
      gc.dispose();
    }
    graficosFinanceiroPaginaAtual = [];
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default financeiroPagina;
