import * as repo from '../../modules/preparacao/dados/repositorio.js';
import type { DocumentoCofreRow } from '../../modules/preparacao/dados/types.js';
import { criptografarDocumentoCofre } from '../../modules/preparacao/dominio/cofre-crypto.js';
import { obterTextosPreparacao } from '../../modules/preparacao/ui/textos-preparacao.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { criarDialogoConfirmacao } from '../ui/dialogos.js';
import { criarCampoTexto, criarFormGrid } from '../ui/form.js';
import { criarCardUi, criarPaginaUi } from '../ui/layout.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';
import { criarBotaoAcao, criarLinhaLista, criarListaCrud } from '../ui/lista.js';

const preparacaoCofrePagina: PaginaMontavel = {
  async mount(container, sinal) {
    const tx = (): ReturnType<typeof obterTextosPreparacao> => obterTextosPreparacao(obterLocaleAtual());
    const t0 = tx();

    const pagina = criarPaginaUi({ titulo: t0.cofreTitulo });
    const campoNome = criarCampoTexto({ rotulo: t0.cofreNomeDocumento });
    const campoSenha = criarCampoTexto({ rotulo: t0.cofreSenha });
    if (campoSenha.input instanceof HTMLInputElement) campoSenha.input.type = 'password';
    const arquivo = document.createElement('input');
    arquivo.type = 'file';
    arquivo.className = 'shell__input-texto';
    const botaoGuardar = criarBotaoAcao(t0.cofreEnviar, { variant: 'brand' });
    const estado = document.createElement('p');
    estado.className = 'shell__empty';
    estado.hidden = true;

    const confirmacao = criarDialogoConfirmacao({
      titulo: t0.dialogoConfirmarRemover,
      texto: t0.dialogoConfirmarRemover,
      cancelar: t0.cancelar,
      confirmar: t0.dialogoConfirmarRemover,
      signal: sinal,
    });

    const lista = criarListaCrud<DocumentoCofreRow>({
      vazio: t0.cofreListaVazia,
      renderItem: (doc) => {
        const apagar = criarBotaoAcao(tx().dialogoConfirmarRemover, { variant: 'danger' });
        apagar.addEventListener(
          'click',
          () => {
            confirmacao.abrir({
              titulo: tx().dialogoConfirmarRemover,
              texto: doc.rotulo,
              aoConfirmar: async () => {
                await repo.apagarDocumentoCofre(doc.id);
                await recarregar();
              },
            });
          },
          { signal: sinal },
        );
        return criarLinhaLista({
          titulo: doc.rotulo,
          meta: `${doc.tipo_mime || 'application/octet-stream'} · ${new Date(doc.data_criacao).toLocaleString()}`,
          acoes: [apagar],
        });
      },
    });

    const cardCofre = criarCardUi({
      titulo: t0.cofreTitulo,
      conteudo: [criarFormGrid(campoNome.elemento, campoSenha.elemento, arquivo, botaoGuardar), estado, lista.elemento],
    });
    pagina.corpo.append(cardCofre.cartao);
    container.replaceChildren(pagina.raiz, confirmacao.elemento);

    async function recarregar(): Promise<void> {
      const textos = tx();
      definirTituloDocumentoApp(textos.cofreTitulo);
      pagina.titulo.textContent = textos.cofreTitulo;
      campoNome.definirRotulo(textos.cofreNomeDocumento);
      campoNome.definirPlaceholder(textos.cofreNomeDocumento);
      campoSenha.definirRotulo(textos.cofreSenha);
      campoSenha.definirPlaceholder(textos.cofreSenha);
      botaoGuardar.textContent = textos.cofreEnviar;
      lista.definirTextoVazio(textos.cofreListaVazia);
      lista.renderizar(await repo.listarDocumentosCofre());
    }

    botaoGuardar.addEventListener(
      'click',
      async () => {
        const file = arquivo.files?.[0];
        if (!file) return;
        try {
          const pacote = await criptografarDocumentoCofre(await file.arrayBuffer(), campoSenha.valor());
          await repo.inserirDocumentoCofre({
            rotulo: campoNome.valor() || file.name,
            tipo_mime: file.type || 'application/octet-stream',
            blob_criptografado: pacote,
          });
          arquivo.value = '';
          campoNome.limpar();
          campoSenha.limpar();
          estado.hidden = false;
          estado.textContent = `${String(await repo.contarLinhasCofre())} — ${tx().cofreStub}`;
          await recarregar();
        } catch (erro) {
          estado.hidden = false;
          estado.textContent = erro instanceof Error ? erro.message : String(erro);
        }
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(() => void recarregar(), sinal);
    await recarregar();
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default preparacaoCofrePagina;
