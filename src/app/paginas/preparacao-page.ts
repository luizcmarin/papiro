import * as repo from '../../modules/preparacao/dados/repositorio.js';
import type {
  EstoqueAlimentoRow,
  ItemChecklistRow,
  KitChecklistRow,
} from '../../modules/preparacao/dados/types.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { criarDialogoConfirmacao, criarDialogoFormulario } from '../ui/dialogos.js';
import { criarCampoData, criarCampoNumero, criarCampoTexto, criarFormGrid } from '../ui/form.js';
import { criarCardUi, criarEmptyState, criarGrid, criarPaginaUi } from '../ui/layout.js';
import { criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

function msData(s: string): number | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s.trim());
  if (!m) return null;
  const t = Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3]), 12, 0, 0, 0);
  return Number.isNaN(t) ? null : t;
}

function dataInput(ms: number): string {
  const d = new Date(ms);
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

const preparacaoPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    let kitAtualParaItem: KitChecklistRow | null = null;

    const botaoNovoKit = criarBotaoAcao(t0.novoKit, { variant: 'brand' });
    const botaoNovoEstoque = criarBotaoAcao(t0.novoEstoque, { variant: 'brand' });

    const pagina = criarPaginaUi({ titulo: t0.tituloPagina });

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
        const meta = `${linha.quantidade} · ${dataInput(linha.data_vencimento)}`;
        return criarLinhaLista({ titulo: linha.item, meta, acoes: [apagar] });
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
    const cardReserva = criarCardUi({
      titulo: t0.estoqueTitulo,
      acoes: [botaoNovoEstoque],
      conteudo: [listaEstoque.elemento],
    });
    const colunaAlimentos = document.createElement('div');
    colunaAlimentos.className = 'shell__stack';
    colunaAlimentos.append(cardCalculadora, cardReserva);

    pagina.corpo.append(
      criarGrid(
        criarCardUi({ titulo: t0.kitsTitulo, acoes: [botaoNovoKit], conteudo: [boxKits] }),
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
        await repo.inserirKit({
          nome: campoKitNome.valor() || textos.campoNomeKit,
          icone: campoKitIcone.valor() || 'box',
          publicar: 1,
        });
        campoKitNome.limpar();
        campoKitIcone.limpar();
        await pintarKits();
      },
    });

    const campoItemRotulo = criarCampoTexto({ rotulo: t0.itemCampo });
    const campoItemQuantidade = criarCampoTexto({ rotulo: t0.etiquetaQuantidadePack, valorInicial: '1' });
    const campoItemObservacoes = criarCampoTexto({ rotulo: t0.observacaoItemCampo });
    const dialogoItem = criarDialogoFormulario({
      titulo: t0.adicionarItem,
      confirmarTexto: t0.adicionarItem,
      cancelarTexto: t0.cancelar,
      conteudo: [
        criarFormGrid(campoItemRotulo.elemento, campoItemQuantidade.elemento),
        campoItemObservacoes.elemento,
      ],
      signal: sinal,
      aoConfirmar: async () => {
        if (!kitAtualParaItem) return;
        const textos = tx();
        await repo.inserirItemKit({
          kit_id: kitAtualParaItem.id,
          rotulo: campoItemRotulo.valor() || textos.itemCampo,
          quantidade: campoItemQuantidade.valor() || '1',
          esta_marcado: 0,
          data_vencimento: Date.now(),
          observacoes: campoItemObservacoes.valor(),
          publicar: 1,
        });
        campoItemRotulo.limpar();
        campoItemQuantidade.definirValor('1');
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
        const validade = msData(campoEstoqueValidade.valor());
        await repo.inserirEstoque({
          item: campoEstoqueItem.valor() || textos.itemCampo,
          quantidade: Math.max(1, campoEstoqueQtd.valor() || 1),
          peso_unitario: campoEstoquePeso.valor() || 0,
          calorias_por_100g: campoEstoqueKcal.valor() || 0,
          data_vencimento: validade ?? Date.now(),
        });
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
        campoKitNome.limpar();
        campoKitIcone.limpar();
        dialogoKit.abrir();
      },
      { signal: sinal },
    );

    botaoNovoEstoque.addEventListener(
      'click',
      () => {
        campoEstoqueItem.limpar();
        campoEstoqueQtd.definirValor(1);
        campoEstoquePeso.definirValor(500);
        campoEstoqueKcal.definirValor(250);
        campoEstoqueValidade.limpar();
        dialogoEstoque.abrir();
      },
      { signal: sinal },
    );

    function aplicarTextos(): void {
      const textos = tx();
      document.title = `${textos.tituloPagina} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      pagina.titulo.textContent = textos.tituloPagina;
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

    async function pintarKits(): Promise<void> {
      const textos = tx();
      const kits = await repo.listarKits();
      boxKits.replaceChildren();

      if (kits.length === 0) {
        boxKits.append(criarEmptyState(textos.semKits));
        return;
      }

      for (const kit of kits) {
        const det = document.createElement('details');
        det.className = 'shell__detalhe-card';

        const summary = document.createElement('summary');
        summary.textContent = kit.nome;
        det.append(summary);

        const acoes = document.createElement('div');
        acoes.className = 'shell__acoes';

        const adicionar = criarBotaoAcao(textos.adicionarItem, { variant: 'brand' });
        adicionar.addEventListener(
          'click',
          (evento) => {
            evento.preventDefault();
            kitAtualParaItem = kit;
            campoItemRotulo.limpar();
            campoItemQuantidade.definirValor('1');
            campoItemObservacoes.limpar();
            dialogoItem.definirTitulo(`${textos.adicionarItem}: ${kit.nome}`);
            dialogoItem.abrir();
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

        acoes.append(adicionar, apagar);
        det.append(acoes);

        const listaItens = criarListaCrud<ItemChecklistRow>({
          vazio: textos.semKits,
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
              },
              { signal: sinal },
            );

            label.append(check, document.createTextNode(`${item.rotulo} (${item.quantidade})`));

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

            return criarLinhaLista({ titulo: label, acoes: [apagarItem] });
          },
        });

        listaItens.renderizar(await repo.listarItensDoKit(kit.id));
        det.append(listaItens.elemento);
        boxKits.append(det);
      }
    }

    async function pintarEstoque(): Promise<void> {
      listaEstoque.renderizar(await repo.listarEstoque());
    }

    async function recarregarTudo(): Promise<void> {
      aplicarTextos();
      await pintarKits();
      await pintarEstoque();
    }

    for (const campo of [calcQtd.input, calcPeso.input, calcKcal.input]) {
      campo.addEventListener('input', atualizarCalculadora, { signal: sinal });
    }

    registarAoLocaleAtualizado(() => void recarregarTudo(), sinal);
    await recarregarTudo();
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default preparacaoPagina;
