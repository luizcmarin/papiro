import * as repo from '../../modules/preparacao/dados/repositorio.js';
import type {
  EstoqueAlimentoRow,
  ItemChecklistRow,
  KitChecklistRow,
} from '../../modules/preparacao/dados/types.js';
import {
  calcularIndiceProntidao,
  calcularResumoReserva,
  DIAS_ALERTA_VENCIMENTO,
  DIAS_REFERENCIA_PRONTIDAO,
  kcalTotal,
  KCAL_MINIMAS_PESSOA_DIA,
} from '../../modules/preparacao/dominio/calculadora-preparacao.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import {
  formatarDataInputOuTraco,
  formatarDataInputUtc,
  parseDataInputUtcMs,
  separarPorVencimento,
} from '../../modules/shared/dados/datas.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { renderizarAlertasLista } from '../ui/alertas.js';
import { criarDialogoConfirmacao, criarDialogoFormulario } from '../ui/dialogos.js';
import { criarCampoData, criarCampoNumero, criarCampoTexto, criarFormGrid } from '../ui/form.js';
import { formatarPesoGramas } from '../ui/formatos.js';
import { criarCardUi, criarEmptyState, criarGrid, criarPaginaUi } from '../ui/layout.js';
import { criarBlocoLista, criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import { criarGradeMetricas, renderizarMetricas } from '../ui/metricas.js';
import { criarResumoProgresso } from '../ui/progresso.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

const preparacaoPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    let kitAtualParaItem: KitChecklistRow | null = null;
    let kitEditando: KitChecklistRow | null = null;
    let itemAtualEditando: ItemChecklistRow | null = null;
    let estoqueEditando: EstoqueAlimentoRow | null = null;
    let estoqueAtual: EstoqueAlimentoRow[] = [];
    let totalChecklistGlobal = 0;
    let totalChecklistMarcado = 0;

    const botaoNovoKit = criarBotaoAcao(t0.novoKit, { variant: 'brand' });
    const botaoNovoEstoque = criarBotaoAcao(t0.novoEstoque, { variant: 'brand' });

    const pagina = criarPaginaUi({ titulo: t0.tituloPagina, subtitulo: t0.subtituloPagina });

    const listaEstoque = criarListaCrud<EstoqueAlimentoRow>({
      vazio: t0.listaEstoqueVazia,
      renderItem: (linha) => {
        const apagar = criarBotaoAcao(tx().removerEstoqueTitulo, { variant: 'danger' });
        apagar.addEventListener(
          'click',
          () => {
            const textos = tx();
            confirmacao.abrir({
              titulo: textos.removerEstoqueTitulo,
              texto: textos.dialogoConfirmarRemover,
              aoConfirmar: async () => {
                await repo.apagarEstoque(linha.id);
                await pintarEstoque();
              },
            });
          },
          { signal: sinal },
        );
        const editar = criarBotaoAcao(tx().editarEstoqueTitulo, { variant: 'neutral' });
        editar.addEventListener(
          'click',
          () => {
            const textos = tx();
            estoqueEditando = linha;
            campoEstoqueItem.definirValor(linha.item);
            campoEstoqueQtd.definirValor(linha.quantidade);
            campoEstoquePeso.definirValor(linha.peso_unitario);
            campoEstoqueKcal.definirValor(linha.calorias_por_100g);
            campoEstoqueValidade.definirValor(formatarDataInputUtc(linha.data_vencimento));
            dialogoEstoque.definirTitulo(textos.editarEstoqueTitulo);
            dialogoEstoque.botaoConfirmar.textContent = textos.atualizarEstoque;
            dialogoEstoque.abrir();
          },
          { signal: sinal },
        );
        const validade = formatarDataInputUtc(linha.data_vencimento);
        const meta =
          `${linha.quantidade} x ${linha.peso_unitario} g · ` +
          `${Math.round(kcalTotal(linha)).toLocaleString()} kcal` +
          (validade ? ` · ${validade}` : '');
        return criarLinhaLista({ titulo: linha.item, meta, acoes: [editar, apagar] });
      },
    });

    const boxKits = document.createElement('div');
    boxKits.className = 'shell__stack';

    const calcQtd = criarCampoNumero({ rotulo: t0.qtdCampo, valorInicial: 1, min: 1 });
    const calcPeso = criarCampoNumero({ rotulo: t0.pesoCampo, valorInicial: 500, min: 0 });
    const calcKcal = criarCampoNumero({ rotulo: t0.kcalCampo, valorInicial: 250, min: 0 });
    const calcResultado = document.createElement('p');
    calcResultado.className = 'shell__empty';
    const formCalculadora = criarFormGrid(calcQtd.elemento, calcPeso.elemento, calcKcal.elemento);
    const cardCalculadora = criarCardUi({
      titulo: t0.calculadoraTitulo,
      descricao: t0.calculadoraDescricao,
      conteudo: [formCalculadora, calcResultado],
    });
    const calcPessoas = criarCampoNumero({ rotulo: t0.pessoasCampo, valorInicial: 2, min: 1 });
    const calcKcalPessoa = criarCampoNumero({
      rotulo: t0.kcalPessoaDiaCampo,
      valorInicial: KCAL_MINIMAS_PESSOA_DIA,
      min: 1,
    });
    const calcDiasReferencia = criarCampoNumero({
      rotulo: t0.diasReferenciaCampo,
      valorInicial: DIAS_REFERENCIA_PRONTIDAO,
      min: 1,
    });
    const resumoEstoque = criarGradeMetricas();
    const resumoIndiceProntidao = criarGradeMetricas();
    const alertasEstoque = document.createElement('div');
    alertasEstoque.className = 'shell__stack shell__stack--compacta';
    const cardResumoReserva = criarCardUi({
      titulo: t0.resumoReservaTitulo,
      descricao: t0.resumoReservaDescricao,
      conteudo: [
        criarFormGrid(calcPessoas.elemento, calcKcalPessoa.elemento, calcDiasReferencia.elemento),
        resumoEstoque,
        alertasEstoque,
      ],
    });
    const cardReserva = criarCardUi({
      titulo: t0.estoqueTitulo,
      acoes: [botaoNovoEstoque],
      conteudo: [listaEstoque.elemento],
    });
    const cardIndiceProntidao = criarCardUi({
      titulo: t0.indiceProntidaoTitulo,
      conteudo: [resumoIndiceProntidao],
    });
    const colunaAlimentos = document.createElement('div');
    colunaAlimentos.className = 'shell__stack';
    colunaAlimentos.append(
      cardIndiceProntidao.cartao,
      cardResumoReserva.cartao,
      cardCalculadora.cartao,
      cardReserva.cartao,
    );

    pagina.corpo.append(
      criarGrid(
        criarCardUi({ titulo: t0.kitsTitulo, acoes: [botaoNovoKit], conteudo: [boxKits] }).cartao,
        colunaAlimentos,
      ),
    );

    const campoKitNome = criarCampoTexto({ rotulo: t0.campoNomeKit });
    const campoKitIcone = criarCampoTexto({ rotulo: t0.campoIconeKit });
    const dialogoKit = criarDialogoFormulario({
      titulo: t0.novoKit,
      confirmarTexto: t0.novoKit,
      cancelarTexto: t0.cancelar,
      conteudo: [criarFormGrid(campoKitNome.elemento, campoKitIcone.elemento)],
      signal: sinal,
      aoConfirmar: async () => {
        const textos = tx();
        const dadosKit = {
          nome: campoKitNome.valor() || textos.campoNomeKit,
          icone: campoKitIcone.valor() || 'box',
          publicar: 1,
        };
        if (kitEditando) {
          await repo.atualizarKit(kitEditando.id, dadosKit);
        } else {
          await repo.inserirKit(dadosKit);
        }
        kitEditando = null;
        campoKitNome.limpar();
        campoKitIcone.limpar();
        await pintarKits();
      },
    });

    const campoItemRotulo = criarCampoTexto({ rotulo: t0.itemCampo });
    const campoItemQuantidade = criarCampoTexto({ rotulo: t0.etiquetaQuantidadePack, valorInicial: '1' });
    const campoItemObservacoes = criarCampoTexto({ rotulo: t0.observacaoItemCampo, linhas: 3 });
    const campoItemValidade = criarCampoData({ rotulo: t0.validadeItemCampo });
    const dialogoItem = criarDialogoFormulario({
      titulo: t0.adicionarItem,
      confirmarTexto: t0.adicionarItem,
      cancelarTexto: t0.cancelar,
      conteudo: [
        criarFormGrid(campoItemRotulo.elemento, campoItemQuantidade.elemento, campoItemValidade.elemento),
        campoItemObservacoes.elemento,
      ],
      signal: sinal,
      aoConfirmar: async () => {
        if (!kitAtualParaItem) return;
        const textos = tx();
        const validade = parseDataInputUtcMs(campoItemValidade.valor()) ?? 0;
        const dadosItem = {
          kit_id: kitAtualParaItem.id,
          rotulo: campoItemRotulo.valor() || textos.itemCampo,
          quantidade: campoItemQuantidade.valor() || '1',
          esta_marcado: itemAtualEditando?.esta_marcado ?? 0,
          data_vencimento: validade,
          observacoes: campoItemObservacoes.valor(),
          publicar: itemAtualEditando?.publicar ?? 1,
        };
        if (itemAtualEditando) {
          await repo.atualizarItemKit(itemAtualEditando.id, dadosItem);
        } else {
          await repo.inserirItemKit(dadosItem);
        }
        itemAtualEditando = null;
        campoItemRotulo.limpar();
        campoItemQuantidade.definirValor('1');
        campoItemValidade.limpar();
        campoItemObservacoes.limpar();
        await pintarKits();
      },
    });

    const campoEstoqueItem = criarCampoTexto({ rotulo: t0.itemCampo });
    const campoEstoqueQtd = criarCampoNumero({ rotulo: t0.qtdCampo, valorInicial: 1, min: 1 });
    const campoEstoquePeso = criarCampoNumero({ rotulo: t0.pesoCampo, valorInicial: 500, min: 0 });
    const campoEstoqueKcal = criarCampoNumero({ rotulo: t0.kcalCampo, valorInicial: 250, min: 0 });
    const campoEstoqueValidade = criarCampoData({ rotulo: t0.vencCampo });
    const dialogoEstoque = criarDialogoFormulario({
      titulo: t0.novoEstoque,
      confirmarTexto: t0.guardarLinha,
      cancelarTexto: t0.cancelar,
      conteudo: [
        criarFormGrid(
          campoEstoqueItem.elemento,
          campoEstoqueQtd.elemento,
          campoEstoquePeso.elemento,
          campoEstoqueKcal.elemento,
          campoEstoqueValidade.elemento,
        ),
      ],
      signal: sinal,
      aoConfirmar: async () => {
        const textos = tx();
        const validade = parseDataInputUtcMs(campoEstoqueValidade.valor());
        const dadosEstoque = {
          item: campoEstoqueItem.valor() || textos.itemCampo,
          quantidade: Math.max(1, campoEstoqueQtd.valor() || 1),
          peso_unitario: campoEstoquePeso.valor() || 0,
          calorias_por_100g: campoEstoqueKcal.valor() || 0,
          data_vencimento: validade ?? 0,
        };
        if (estoqueEditando) {
          await repo.atualizarEstoque(estoqueEditando.id, dadosEstoque);
        } else {
          await repo.inserirEstoque(dadosEstoque);
        }
        estoqueEditando = null;
        campoEstoqueItem.limpar();
        await pintarEstoque();
      },
    });

    const confirmacao = criarDialogoConfirmacao({
      titulo: t0.dialogoConfirmarRemover,
      texto: t0.dialogoConfirmarRemover,
      cancelar: t0.cancelar,
      confirmar: t0.dialogoConfirmarRemover,
      signal: sinal,
    });

    container.replaceChildren();
    container.append(
      pagina.raiz,
      dialogoKit.elemento,
      dialogoItem.elemento,
      dialogoEstoque.elemento,
      confirmacao.elemento,
    );

    botaoNovoKit.addEventListener(
      'click',
      () => {
        kitEditando = null;
        campoKitNome.limpar();
        campoKitIcone.limpar();
        dialogoKit.definirTitulo(tx().novoKit);
        dialogoKit.botaoConfirmar.textContent = tx().novoKit;
        dialogoKit.abrir();
      },
      { signal: sinal },
    );

    botaoNovoEstoque.addEventListener(
      'click',
      () => {
        estoqueEditando = null;
        campoEstoqueItem.limpar();
        campoEstoqueQtd.definirValor(1);
        campoEstoquePeso.definirValor(500);
        campoEstoqueKcal.definirValor(250);
        campoEstoqueValidade.limpar();
        dialogoEstoque.definirTitulo(tx().novoEstoque);
        dialogoEstoque.botaoConfirmar.textContent = tx().guardarLinha;
        dialogoEstoque.abrir();
      },
      { signal: sinal },
    );

    function aplicarTextos(): void {
      const textos = tx();
      definirTituloDocumentoApp(textos.tituloPagina);
      pagina.titulo.textContent = textos.tituloPagina;
      pagina.subtitulo.textContent = textos.subtituloPagina;
      pagina.subtitulo.hidden = false;
      listaEstoque.definirTextoVazio(textos.listaEstoqueVazia);
      botaoNovoKit.textContent = textos.novoKit;
      botaoNovoEstoque.textContent = textos.novoEstoque;
      campoKitNome.definirRotulo(textos.campoNomeKit);
      campoKitNome.definirPlaceholder(textos.campoNomeKit);
      campoKitIcone.definirRotulo(textos.campoIconeKit);
      campoKitIcone.definirPlaceholder(textos.campoIconeKit);
      campoItemRotulo.definirRotulo(textos.itemCampo);
      campoItemRotulo.definirPlaceholder(textos.itemCampo);
      campoItemQuantidade.definirRotulo(textos.etiquetaQuantidadePack);
      campoItemQuantidade.definirPlaceholder(textos.etiquetaQuantidadePack);
      campoItemObservacoes.definirRotulo(textos.observacaoItemCampo);
      campoItemObservacoes.definirPlaceholder(textos.observacaoItemCampo);
      campoItemValidade.definirRotulo(textos.validadeItemCampo);
      campoItemValidade.definirPlaceholder(textos.validadeItemCampo);
      campoEstoqueItem.definirRotulo(textos.itemCampo);
      campoEstoqueItem.definirPlaceholder(textos.itemCampo);
      campoEstoqueQtd.definirRotulo(textos.qtdCampo);
      campoEstoqueQtd.definirPlaceholder(textos.qtdCampo);
      campoEstoquePeso.definirRotulo(textos.pesoCampo);
      campoEstoquePeso.definirPlaceholder(textos.pesoCampo);
      campoEstoqueKcal.definirRotulo(textos.kcalCampo);
      campoEstoqueKcal.definirPlaceholder(textos.kcalCampo);
      campoEstoqueValidade.definirRotulo(textos.vencCampo);
      campoEstoqueValidade.definirPlaceholder(textos.vencCampo);
      calcQtd.definirRotulo(textos.qtdCampo);
      calcQtd.definirPlaceholder(textos.qtdCampo);
      calcPeso.definirRotulo(textos.pesoCampo);
      calcPeso.definirPlaceholder(textos.pesoCampo);
      calcKcal.definirRotulo(textos.kcalCampo);
      calcKcal.definirPlaceholder(textos.kcalCampo);
      calcPessoas.definirRotulo(textos.pessoasCampo);
      calcPessoas.definirPlaceholder(textos.pessoasCampo);
      calcKcalPessoa.definirRotulo(textos.kcalPessoaDiaCampo);
      calcKcalPessoa.definirPlaceholder(textos.kcalPessoaDiaCampo);
      calcDiasReferencia.definirRotulo(textos.diasReferenciaCampo);
      calcDiasReferencia.definirPlaceholder(textos.diasReferenciaCampo);
      dialogoKit.definirTitulo(textos.novoKit);
      dialogoKit.botaoConfirmar.textContent = textos.novoKit;
      dialogoKit.botaoCancelar.textContent = textos.cancelar;
      dialogoItem.definirTitulo(textos.adicionarItem);
      dialogoItem.botaoConfirmar.textContent = textos.adicionarItem;
      dialogoItem.botaoCancelar.textContent = textos.cancelar;
      dialogoEstoque.definirTitulo(textos.novoEstoque);
      dialogoEstoque.botaoConfirmar.textContent = textos.guardarLinha;
      dialogoEstoque.botaoCancelar.textContent = textos.cancelar;
      confirmacao.definirTextos({
        titulo: textos.dialogoConfirmarRemover,
        texto: textos.dialogoConfirmarRemover,
        cancelar: textos.cancelar,
        confirmar: textos.dialogoConfirmarRemover,
      });
      atualizarCalculadora();
      atualizarResumoEstoque();
    }

    function atualizarCalculadora(): void {
      const textos = tx();
      const qtd = Math.max(0, calcQtd.valor() || 0);
      const peso = Math.max(0, calcPeso.valor() || 0);
      const kcal100 = Math.max(0, calcKcal.valor() || 0);
      const pesoTotal = qtd * peso;
      const kcalTotal = (pesoTotal * kcal100) / 100;
      calcResultado.textContent = `${textos.totalPesoCalc}: ${pesoTotal.toLocaleString()} g · ${textos.totalKcalCalc}: ${Math.round(kcalTotal).toLocaleString()} kcal`;
    }

    function atualizarResumoEstoque(): void {
      const textos = tx();
      const resumo = calcularResumoReserva(estoqueAtual, {
        pessoas: calcPessoas.valor() || 1,
        kcalPessoaDia: calcKcalPessoa.valor() || KCAL_MINIMAS_PESSOA_DIA,
        diasReferencia: calcDiasReferencia.valor() || DIAS_REFERENCIA_PRONTIDAO,
      });

      renderizarMetricas(resumoEstoque, [
        { rotulo: textos.totalReservaKcal, valor: `${Math.round(resumo.kcalTotal).toLocaleString()} kcal` },
        {
          rotulo: textos.autonomiaReserva,
          valor: `${resumo.diasAutonomia.toLocaleString(undefined, { maximumFractionDigits: 1 })} ${
            textos.diasUnidade
          }`,
        },
        { rotulo: textos.aguaReserva, valor: `${resumo.litrosAgua.toLocaleString()} L` },
        { rotulo: textos.pesoReserva, valor: formatarPesoGramas(resumo.pesoTotalGramas) },
        { rotulo: textos.metaReserva, valor: `${Math.round(resumo.metaKcal).toLocaleString()} kcal` },
      ]);

      const { vencidos, aVencer } = separarPorVencimento(estoqueAtual, Date.now(), DIAS_ALERTA_VENCIMENTO);
      renderizarAlertasLista(alertasEstoque, textos.alertaVencimentoTitulo, [
        ...vencidos.map((linha) => ({
          titulo: linha.item,
          meta: `${textos.estoqueVencido}: ${formatarDataInputOuTraco(linha.data_vencimento)}`,
        })),
        ...aVencer.map((linha) => ({
          titulo: linha.item,
          meta: `${textos.estoqueVenceEm}: ${formatarDataInputOuTraco(linha.data_vencimento)}`,
        })),
      ]);
      void atualizarIndiceProntidao();
    }

    async function atualizarIndiceProntidao(): Promise<void> {
      const textos = tx();
      const resumo = calcularResumoReserva(estoqueAtual, {
        pessoas: calcPessoas.valor() || 1,
        kcalPessoaDia: calcKcalPessoa.valor() || KCAL_MINIMAS_PESSOA_DIA,
        diasReferencia: calcDiasReferencia.valor() || DIAS_REFERENCIA_PRONTIDAO,
      });
      const documentosProtegidos = await repo.contarLinhasCofre();
      const indice = calcularIndiceProntidao({
        checklistMarcados: totalChecklistMarcado,
        checklistTotal: totalChecklistGlobal,
        diasAutonomiaAlimentos: resumo.diasAutonomia,
        diasReferencia: calcDiasReferencia.valor() || DIAS_REFERENCIA_PRONTIDAO,
        documentosProtegidos,
        documentosNecessarios: 1,
        fichaSaudeCompleta: documentosProtegidos > 0,
      });

      cardIndiceProntidao.titulo.textContent = textos.indiceProntidaoTitulo;
      renderizarMetricas(resumoIndiceProntidao, [
        {
          rotulo: textos.indiceProntidaoTitulo,
          valor: textos.indiceProntidaoValor.replace('{valor}', String(indice.percentual)),
        },
        { rotulo: 'Checklist', valor: `${String(totalChecklistMarcado)}/${String(totalChecklistGlobal)}` },
        { rotulo: textos.cofreTitulo, valor: String(documentosProtegidos) },
      ]);
    }

    async function pintarKits(): Promise<void> {
      const textos = tx();
      const kits = await repo.listarKits();
      boxKits.replaceChildren();
      totalChecklistGlobal = 0;
      totalChecklistMarcado = 0;

      if (kits.length === 0) {
        boxKits.append(criarEmptyState(textos.semKits));
        await atualizarIndiceProntidao();
        return;
      }

      for (const kit of kits) {
        const itens = await repo.listarItensDoKit(kit.id);
        const totalItens = itens.length;
        const itensMarcados = itens.filter((item) => item.esta_marcado !== 0).length;
        totalChecklistGlobal += totalItens;
        totalChecklistMarcado += itensMarcados;

        const det = document.createElement('details');
        det.className = 'shell__detalhe-card';

        const summary = document.createElement('summary');
        summary.append(
          criarResumoProgresso({
            titulo: kit.nome,
            rotulo: textos.progressoKit,
            atual: itensMarcados,
            total: totalItens,
          }),
        );
        det.append(summary);

        const acoes = document.createElement('div');
        acoes.className = 'shell__acoes';

        const adicionar = criarBotaoAcao(textos.adicionarItem, { variant: 'brand' });
        adicionar.addEventListener(
          'click',
          (evento) => {
            evento.preventDefault();
            kitAtualParaItem = kit;
            itemAtualEditando = null;
            campoItemRotulo.limpar();
            campoItemQuantidade.definirValor('1');
            campoItemValidade.limpar();
            campoItemObservacoes.limpar();
            dialogoItem.definirTitulo(`${textos.adicionarItem}: ${kit.nome}`);
            dialogoItem.botaoConfirmar.textContent = textos.adicionarItem;
            dialogoItem.abrir();
          },
          { signal: sinal },
        );

        const editarKit = criarBotaoAcao(textos.editarKit, { variant: 'neutral' });
        editarKit.addEventListener(
          'click',
          (evento) => {
            evento.preventDefault();
            kitEditando = kit;
            campoKitNome.definirValor(kit.nome);
            campoKitIcone.definirValor(kit.icone);
            dialogoKit.definirTitulo(textos.editarKit);
            dialogoKit.botaoConfirmar.textContent = textos.atualizarKit;
            dialogoKit.abrir();
          },
          { signal: sinal },
        );

        const apagar = criarBotaoAcao(textos.removerKitTitulo, { variant: 'danger' });
        apagar.addEventListener(
          'click',
          (evento) => {
            evento.preventDefault();
            confirmacao.abrir({
              titulo: textos.removerKitTitulo,
              texto: textos.dialogoConfirmarRemover,
              aoConfirmar: async () => {
                await repo.apagarKit(kit.id);
                await pintarKits();
              },
            });
          },
          { signal: sinal },
        );

        acoes.append(adicionar, editarKit, apagar);
        det.append(acoes);

        const listaItens = criarListaCrud<ItemChecklistRow>({
          vazio: textos.semItensKit,
          renderItem: (item) => {
            const label = document.createElement('label');
            label.className = 'shell__checkbox-linha';

            const check = document.createElement('input');
            check.type = 'checkbox';
            check.checked = item.esta_marcado !== 0;
            check.addEventListener(
              'change',
              async () => {
                await repo.atualizarItemMarcacao(item.id, check.checked ? 1 : 0);
                await pintarKits();
              },
              { signal: sinal },
            );

            const partesDetalhe = [item.quantidade];
            if (item.data_vencimento > 0) {
              const prefixo = item.data_vencimento < Date.now() ? textos.itemVencidoEm : textos.itemVenceEm;
              partesDetalhe.push(`${prefixo}: ${formatarDataInputOuTraco(item.data_vencimento)}`);
            }
            const blocoTitulo = criarBlocoLista(item.rotulo, [
              partesDetalhe.filter(Boolean).join(' · '),
              item.observacoes,
            ]);
            label.append(check, blocoTitulo);

            const editarItem = criarBotaoAcao(textos.editarItem, { variant: 'neutral' });
            editarItem.addEventListener(
              'click',
              () => {
                kitAtualParaItem = kit;
                itemAtualEditando = item;
                campoItemRotulo.definirValor(item.rotulo);
                campoItemQuantidade.definirValor(item.quantidade);
                campoItemValidade.definirValor(formatarDataInputUtc(item.data_vencimento));
                campoItemObservacoes.definirValor(item.observacoes);
                dialogoItem.definirTitulo(`${textos.editarItem}: ${kit.nome}`);
                dialogoItem.botaoConfirmar.textContent = textos.atualizarItem;
                dialogoItem.abrir();
              },
              { signal: sinal },
            );
            const apagarItem = criarBotaoAcao(textos.removerItemTitulo, { variant: 'danger' });
            apagarItem.addEventListener(
              'click',
              () => {
                confirmacao.abrir({
                  titulo: textos.removerItemTitulo,
                  texto: textos.dialogoConfirmarRemover,
                  aoConfirmar: async () => {
                    await repo.apagarItemChecklist(item.id);
                    await pintarKits();
                  },
                });
              },
              { signal: sinal },
            );

            return criarLinhaLista({ titulo: label, acoes: [editarItem, apagarItem] });
          },
        });

        listaItens.renderizar(itens);
        det.append(listaItens.elemento);
        boxKits.append(det);
      }
      await atualizarIndiceProntidao();
    }

    async function pintarEstoque(): Promise<void> {
      estoqueAtual = await repo.listarEstoque();
      listaEstoque.renderizar(estoqueAtual);
      atualizarResumoEstoque();
    }

    async function recarregarTudo(): Promise<void> {
      aplicarTextos();
      await pintarKits();
      await pintarEstoque();
    }

    for (const campo of [calcQtd.input, calcPeso.input, calcKcal.input]) {
      campo.addEventListener('input', atualizarCalculadora, { signal: sinal });
    }
    for (const campo of [calcPessoas.input, calcKcalPessoa.input, calcDiasReferencia.input]) {
      campo.addEventListener('input', atualizarResumoEstoque, { signal: sinal });
    }

    registarAoLocaleAtualizado(() => void recarregarTudo(), sinal);
    await recarregarTudo();
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default preparacaoPagina;
