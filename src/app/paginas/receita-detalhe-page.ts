import { navegar } from '../router.js';

import * as repo from '../../modules/receitas/dados/repositorio.js';
import type { ReceitaDetalheRow, ReceitaFormInput } from '../../modules/receitas/dados/types.js';
import { obterTextosReceitas } from '../../modules/receitas/ui/textos-receitas.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { hrefParaRota } from '../menu-rotas.js';
import { criarDialogoConfirmacao } from '../ui/dialogos.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

export interface OpcoesPaginaReceitaDetalhe {
  modo: 'novo' | 'editar';
  idExistente?: number | undefined;
}

export function criarPaginaReceitaDetalhe(opcoes: OpcoesPaginaReceitaDetalhe): PaginaMontavel {
  return {
    async mount(container, sinal) {
      sinal.addEventListener(
        'abort',
        () => {
          /* formulário apenas DOM efémero */
        },
        { once: true },
      );
      const loc = obterLocaleAtual();
      const t = obterTextosReceitas(loc);

      let idPersistente: number | null = opcoes.modo === 'editar' ? (opcoes.idExistente ?? null) : null;

      if (opcoes.modo === 'editar' && (idPersistente === null || !Number.isFinite(idPersistente))) {
        definirTituloDocumentoApp(t.tituloPaginaDoc, loc);
        container.replaceChildren();
        const e = document.createElement('p');
        e.className = 'shell__sub';
        e.textContent = t.naoEncontrada;
        const voltar = document.createElement('a');
        voltar.href = hrefParaRota('/receitas');
        voltar.className = 'shell__acao-secundaria';
        voltar.textContent = t.voltar;
        container.append(e, voltar);
        return;
      }

      let detalhe: ReceitaDetalheRow | null = null;
      if (idPersistente !== null) {
        detalhe = await repo.obterReceitaCompletaPorId(idPersistente);
        if (!detalhe) {
          definirTituloDocumentoApp(t.tituloPaginaDoc, loc);
          container.replaceChildren();
          const e = document.createElement('p');
          e.className = 'shell__sub';
          e.textContent = t.naoEncontrada;
          const voltar = document.createElement('a');
          voltar.href = hrefParaRota('/receitas');
          voltar.className = 'shell__acao-secundaria';
          voltar.textContent = t.voltar;
          container.append(e, voltar);
          return;
        }
      }

      definirTituloDocumentoApp(
        detalhe !== null ? detalhe.titulo.trim() || t.semTitulo : t.novaReceita,
        loc,
      );

      const linkVoltar = document.createElement('a');
      linkVoltar.href = hrefParaRota('/receitas');
      linkVoltar.className = 'shell__acao-secundaria';
      linkVoltar.textContent = t.voltar;

      const btnSalvar = document.createElement('button');
      btnSalvar.type = 'button';
      btnSalvar.className = 'shell__acao-primaria-botao';
      btnSalvar.textContent = t.salvar;

      const btnApagar = document.createElement('button');
      btnApagar.type = 'button';
      btnApagar.className = 'shell__botao-perigo';
      btnApagar.textContent = t.apagar;
      btnApagar.hidden = idPersistente === null;

      const pagina = criarPaginaUi({
        titulo: detalhe !== null ? detalhe.titulo.trim() || t.semTitulo : t.novaReceita,
        acoes: [linkVoltar, btnSalvar, btnApagar],
      });

      function rotuloTexto(txt: string, idEl: string): HTMLLabelElement {
        const lb = document.createElement('label');
        lb.className = 'shell__etiqueta';
        lb.textContent = txt;
        lb.setAttribute('for', idEl);
        return lb;
      }

      const inpTitulo = document.createElement('input');
      inpTitulo.type = 'text';
      inpTitulo.id = 'receita-titulo';
      inpTitulo.className = 'shell__input-texto';
      inpTitulo.placeholder = t.tituloLabel;
      inpTitulo.value = detalhe?.titulo ?? '';

      const inpCategoria = document.createElement('input');
      inpCategoria.type = 'text';
      inpCategoria.id = 'receita-categoria';
      inpCategoria.className = 'shell__input-texto';
      inpCategoria.placeholder = t.categoriaLabel;
      inpCategoria.value = detalhe?.categoria ?? '';

      const taIngredientes = document.createElement('textarea');
      taIngredientes.id = 'receita-ingredientes';
      taIngredientes.className = 'shell__textarea';
      taIngredientes.rows = 8;
      taIngredientes.value = detalhe?.ingredientes ?? '';

      const taInstrucoes = document.createElement('textarea');
      taInstrucoes.id = 'receita-instrucoes';
      taInstrucoes.className = 'shell__textarea';
      taInstrucoes.rows = 10;
      taInstrucoes.value = detalhe?.instrucoes ?? '';

      const lbTitulo = rotuloTexto(t.tituloLabel, inpTitulo.id);
      const lbCategoria = rotuloTexto(t.categoriaLabel, inpCategoria.id);
      const lbIngredientes = rotuloTexto(t.ingredientesLabel, taIngredientes.id);
      const lbInstrucoes = rotuloTexto(t.instrucoesLabel, taInstrucoes.id);

      const rotuloPub = document.createElement('label');
      rotuloPub.className = 'shell__checkbox-linha';
      const ckPublicar = document.createElement('input');
      ckPublicar.type = 'checkbox';
      ckPublicar.checked = detalhe ? detalhe.publicar === 1 : false;
      const txPub = document.createElement('span');
      txPub.textContent = t.publicarLabel;
      rotuloPub.append(ckPublicar, txPub);

      const confirmacao = criarDialogoConfirmacao({
        titulo: t.confirmarApagar,
        texto: t.confirmarApagar,
        cancelar: t.cancelarDialogo,
        confirmar: t.apagar,
        signal: sinal,
      });

      const cardFormulario = criarCardUi({
        titulo: detalhe !== null ? detalhe.titulo.trim() || t.semTitulo : t.novaReceita,
        conteudo: [
          lbTitulo,
          inpTitulo,
          lbCategoria,
          inpCategoria,
          lbIngredientes,
          taIngredientes,
          lbInstrucoes,
          taInstrucoes,
          rotuloPub,
        ],
      });
      pagina.corpo.append(cardFormulario.cartao);
      container.replaceChildren(pagina.raiz, confirmacao.elemento);

      function atualizarTituloDocumentoPorForm(): void {
        const tt = obterTextosReceitas(obterLocaleAtual());
        const nomeOuVazio = inpTitulo.value.trim();
        const tituloTela =
          nomeOuVazio !== ''
            ? nomeOuVazio
            : idPersistente === null
              ? tt.novaReceita
              : tt.semTitulo;
        pagina.titulo.textContent = tituloTela;
        cardFormulario.titulo.textContent = tituloTela;
        if (nomeOuVazio !== '') {
          definirTituloDocumentoApp(nomeOuVazio);
          return;
        }
        definirTituloDocumentoApp(idPersistente === null ? tt.novaReceita : tt.semTitulo);
      }

      function aplicarChromeReceitaDetalhe(): void {
        const tt = obterTextosReceitas(obterLocaleAtual());
        linkVoltar.textContent = tt.voltar;
        btnSalvar.textContent = tt.salvar;
        btnApagar.textContent = tt.apagar;
        pagina.titulo.textContent =
          inpTitulo.value.trim() !== ''
            ? inpTitulo.value.trim()
            : idPersistente === null
              ? tt.novaReceita
              : tt.semTitulo;
        cardFormulario.titulo.textContent = pagina.titulo.textContent;
        lbTitulo.textContent = tt.tituloLabel;
        lbCategoria.textContent = tt.categoriaLabel;
        lbIngredientes.textContent = tt.ingredientesLabel;
        lbInstrucoes.textContent = tt.instrucoesLabel;
        inpTitulo.placeholder = tt.tituloLabel;
        inpCategoria.placeholder = tt.categoriaLabel;
        txPub.textContent = tt.publicarLabel;
        confirmacao.definirTextos({
          titulo: tt.confirmarApagar,
          texto: tt.confirmarApagar,
          cancelar: tt.cancelarDialogo,
          confirmar: tt.apagar,
        });
        atualizarTituloDocumentoPorForm();
      }

      registarAoLocaleAtualizado(aplicarChromeReceitaDetalhe, sinal);

      function montarFormulario(): ReceitaFormInput {
        const tm = obterTextosReceitas(obterLocaleAtual());
        return {
          titulo: inpTitulo.value.trim() !== '' ? inpTitulo.value.trim() : tm.semTitulo,
          categoria: inpCategoria.value.trim() !== '' ? inpCategoria.value.trim() : tm.categoriaFallback,
          ingredientes: taIngredientes.value,
          instrucoes: taInstrucoes.value,
          publicar: ckPublicar.checked ? 1 : 0,
        };
      }

      inpTitulo.addEventListener('input', () => {
        atualizarTituloDocumentoPorForm();
      });

      btnSalvar.addEventListener('click', async () => {
        const dados = montarFormulario();
        if (idPersistente === null) {
          idPersistente = await repo.inserirReceita(dados);
          btnApagar.hidden = false;
        } else {
          await repo.atualizarReceita(idPersistente, dados);
        }
        detalhe =
          idPersistente !== null
            ? ((await repo.obterReceitaCompletaPorId(idPersistente)) ?? detalhe)
            : detalhe;
        definirTituloDocumentoApp(dados.titulo);
      });

      btnApagar.addEventListener('click', async () => {
        if (idPersistente === null) return;
        const tt = obterTextosReceitas(obterLocaleAtual());
        confirmacao.abrir({
          titulo: tt.confirmarApagar,
          texto: tt.confirmarApagar,
          aoConfirmar: async () => {
            if (idPersistente === null) return;
            await repo.apagarReceita(idPersistente);
            navegar('/receitas');
          },
        });
      });
    },
    unmount() {
      reporTituloDocumentoSoNomeApp();
    },
  };
}
