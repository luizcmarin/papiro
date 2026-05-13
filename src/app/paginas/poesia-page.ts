import { textoPlanoUsuarioParaHtmlSeguro } from '../../modules/poesia/aplicacao/texto-plano-para-html.js';
import * as repo from '../../modules/poesia/dados/repositorio.js';
import type { PoesiaListaRow } from '../../modules/poesia/dados/types.js';
import { obterTextosPoesia } from '../../modules/poesia/ui/textos-poesia.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { criarDialogoConfirmacao, criarDialogoFormulario } from '../ui/dialogos.js';
import { criarCampoTexto, criarFormGrid, limparCampos } from '../ui/form.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

const poesiaPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    let tm = obterTextosPoesia(loc);
    definirTituloDocumentoApp(tm.tituloPagina, loc);
    let linhasAtuais: PoesiaListaRow[] = [];
    let leituraAtualId: number | null = null;

    const botaoNova = criarBotaoAcao(tm.nova, { variant: 'brand' });
    const pagina = criarPaginaUi({ titulo: tm.tituloPagina, acoes: [botaoNova] });

    const campoTitulo = criarCampoTexto({ rotulo: tm.campoTitulo });
    const campoTexto = criarCampoTexto({ rotulo: tm.campoTexto, linhas: 8 });

    const prevTitulo = document.createElement('p');
    prevTitulo.className = 'shell__campo-titulo';
    const preview = document.createElement('div');
    preview.className = 'shell__corpo-html-san';
    preview.setAttribute('role', 'region');

    const erro = document.createElement('p');
    erro.className = 'shell__sub';
    erro.hidden = true;
    erro.setAttribute('role', 'alert');

    let editingId: number | null = null;

    const leituraTitulo = document.createElement('h3');
    leituraTitulo.className = 'shell__subtitulo';
    const leituraCorpo = document.createElement('div');
    leituraCorpo.className = 'shell__corpo-html-san shell__poesia-leitura';
    const botaoAnterior = criarBotaoAcao(tm.anterior, { variant: 'neutral' });
    const botaoProxima = criarBotaoAcao(tm.proxima, { variant: 'neutral' });
    const acoesLeitura = document.createElement('div');
    acoesLeitura.className = 'shell__acoes';
    acoesLeitura.append(botaoAnterior, botaoProxima);

    const confirmacao = criarDialogoConfirmacao({
      titulo: tm.dialogoApagarLabel,
      texto: tm.dialogoApagarTexto,
      cancelar: tm.dialogoCancelar,
      confirmar: tm.dialogoConfirmar,
      signal: sinal,
    });

    const listaPoesias = criarListaCrud<PoesiaListaRow>({
      vazio: tm.vazia,
      renderItem: (poesia) => {
        const t = obterTextosPoesia(obterLocaleAtual());
        const editar = criarBotaoAcao(t.editar, { variant: 'neutral' });
        editar.addEventListener(
          'click',
          async () => {
            const det = await repo.obterPoesiaComConteudo(poesia.id);
            editingId = poesia.id;
            campoTitulo.definirValor(det?.titulo ?? '');
            campoTexto.definirValor(det?.texto ?? '');
            atualizarPreview();
            dialogoPoesia.definirTitulo(t.editar);
            dialogoPoesia.botaoConfirmar.textContent = t.guardar;
            dialogoPoesia.abrir();
          },
          { signal: sinal },
        );
        const apagar = criarBotaoAcao(t.apagar, { variant: 'danger' });
        const ler = criarBotaoAcao(t.ler, { variant: 'brand' });
        ler.addEventListener('click', () => void abrirLeitura(poesia.id), { signal: sinal });
        apagar.addEventListener(
          'click',
          () => {
            confirmacao.abrir({
              titulo: t.dialogoApagarLabel,
              texto: t.dialogoApagarTexto,
              aoConfirmar: async () => {
                try {
                  await repo.apagarPoesia(poesia.id);
                } catch {
                  erro.hidden = false;
                  erro.textContent = obterTextosPoesia(obterLocaleAtual()).erroBd;
                  return;
                }
                if (editingId === poesia.id) {
                  editingId = null;
                  limparFormulario();
                }
                await redesenharLista();
              },
            });
          },
          { signal: sinal },
        );
        return criarLinhaLista({ titulo: poesia.titulo, acoes: [ler, editar, apagar] });
      },
    });

    const dialogoPoesia = criarDialogoFormulario({
      titulo: tm.nova,
      confirmarTexto: tm.guardar,
      cancelarTexto: tm.dialogoCancelar,
      conteudo: [
        criarFormGrid(campoTitulo.elemento),
        campoTexto.elemento,
        prevTitulo,
        preview,
      ],
      signal: sinal,
      aoConfirmar: async () => {
        const tloc = obterTextosPoesia(obterLocaleAtual());
        erro.hidden = true;
        const titulo = campoTitulo.valor();
        if (titulo.length === 0) return false;
        try {
          if (editingId !== null) {
            await repo.atualizarPoesiaLocal(editingId, {
              titulo,
              texto: campoTexto.valor(),
            });
          } else {
            await repo.inserirPoesiaLocal({ titulo, texto: campoTexto.valor() });
          }
          editingId = null;
          limparFormulario();
          await redesenharLista();
        } catch {
          erro.hidden = false;
          erro.textContent = tloc.erroBd;
          return false;
        }
      },
    });

    const cardLista = criarCardUi({ titulo: tm.listaTitulo, conteudo: [listaPoesias.elemento] });
    const cardLeitura = criarCardUi({
      titulo: tm.leituraTitulo,
      conteudo: [leituraTitulo, leituraCorpo, acoesLeitura],
    });
    pagina.corpo.append(erro, cardLista.cartao, cardLeitura.cartao);
    container.replaceChildren(pagina.raiz, dialogoPoesia.elemento, confirmacao.elemento);

    function atualizarPreview(): void {
      const htmlSeguro = textoPlanoUsuarioParaHtmlSeguro(campoTexto.valor());
      preview.innerHTML = htmlSeguro;
    }

    async function redesenharLista(): Promise<void> {
      const t = obterTextosPoesia(obterLocaleAtual());
      let linhas;
      try {
        linhas = await repo.listarPoesiasSemConteudo();
      } catch {
        erro.hidden = false;
        erro.textContent = t.erroBd;
        return;
      }
      erro.hidden = true;
      linhasAtuais = linhas;
      listaPoesias.definirTextoVazio(t.vazia);
      listaPoesias.renderizar(linhas);
      if (leituraAtualId === null && linhasAtuais[0]) {
        await abrirLeitura(linhasAtuais[0].id);
      } else if (leituraAtualId !== null && !linhasAtuais.some((p) => p.id === leituraAtualId)) {
        limparLeitura();
      }
    }

    async function abrirLeitura(id: number): Promise<void> {
      const det = await repo.obterPoesiaComConteudo(id);
      if (!det) {
        limparLeitura();
        return;
      }
      leituraAtualId = id;
      leituraTitulo.textContent = det.titulo;
      leituraCorpo.innerHTML = textoPlanoUsuarioParaHtmlSeguro(det.texto || det.conteudo);
      atualizarBotoesLeitura();
    }

    function limparLeitura(): void {
      leituraAtualId = null;
      leituraTitulo.textContent = obterTextosPoesia(obterLocaleAtual()).leituraVazia;
      leituraCorpo.replaceChildren();
      atualizarBotoesLeitura();
    }

    function idVizinho(direcao: 'anterior' | 'proxima'): number | null {
      if (leituraAtualId === null) return null;
      const atual = linhasAtuais.find((p) => p.id === leituraAtualId);
      if (!atual) return null;
      const explicito = direcao === 'anterior' ? atual.anteriorId : atual.proximoId;
      if (explicito !== null && linhasAtuais.some((p) => p.id === explicito)) return explicito;
      const indice = linhasAtuais.findIndex((p) => p.id === leituraAtualId);
      const vizinho = linhasAtuais[direcao === 'anterior' ? indice - 1 : indice + 1];
      return vizinho?.id ?? null;
    }

    function atualizarBotoesLeitura(): void {
      botaoAnterior.toggleAttribute('disabled', idVizinho('anterior') === null);
      botaoProxima.toggleAttribute('disabled', idVizinho('proxima') === null);
    }

    function aplicarTextos(t: typeof tm): void {
      tm = t;
      const lc = obterLocaleAtual();
      definirTituloDocumentoApp(tm.tituloPagina, lc);
      pagina.titulo.textContent = tm.tituloPagina;
      botaoNova.textContent = tm.nova;
      cardLista.titulo.textContent = tm.listaTitulo;
      cardLeitura.titulo.textContent = tm.leituraTitulo;
      botaoAnterior.textContent = tm.anterior;
      botaoProxima.textContent = tm.proxima;
      campoTitulo.definirRotulo(tm.campoTitulo);
      campoTitulo.definirPlaceholder(tm.campoTitulo);
      campoTexto.definirRotulo(tm.campoTexto);
      campoTexto.definirPlaceholder(tm.campoTexto);
      dialogoPoesia.definirTitulo(editingId === null ? tm.nova : tm.editar);
      dialogoPoesia.botaoConfirmar.textContent = tm.guardar;
      dialogoPoesia.botaoCancelar.textContent = tm.dialogoCancelar;
      confirmacao.definirTextos({
        titulo: tm.dialogoApagarLabel,
        texto: tm.dialogoApagarTexto,
        cancelar: tm.dialogoCancelar,
        confirmar: tm.dialogoConfirmar,
      });
      prevTitulo.textContent = tm.leituraTitulo;
      if (leituraAtualId === null) {
        leituraTitulo.textContent = tm.leituraVazia;
      }
      if (!erro.hidden) {
        erro.textContent = tm.erroBd;
      }
    }

    aplicarTextos(tm);
    atualizarPreview();
    limparLeitura();
    await redesenharLista();

    campoTexto.input.addEventListener('input', atualizarPreview, { signal: sinal });

    botaoNova.addEventListener(
      'click',
      () => {
        editingId = null;
        limparFormulario();
        dialogoPoesia.definirTitulo(obterTextosPoesia(obterLocaleAtual()).nova);
        dialogoPoesia.abrir();
      },
      { signal: sinal },
    );

    botaoAnterior.addEventListener(
      'click',
      () => {
        const id = idVizinho('anterior');
        if (id !== null) void abrirLeitura(id);
      },
      { signal: sinal },
    );

    botaoProxima.addEventListener(
      'click',
      () => {
        const id = idVizinho('proxima');
        if (id !== null) void abrirLeitura(id);
      },
      { signal: sinal },
    );

    function limparFormulario(): void {
      limparCampos(campoTitulo, campoTexto);
      atualizarPreview();
    }

    registarAoLocaleAtualizado(() => {
      aplicarTextos(obterTextosPoesia(obterLocaleAtual()));
      void redesenharLista();
    }, sinal);
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default poesiaPagina;
