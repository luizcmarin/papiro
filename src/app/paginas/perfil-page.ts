import * as perfilRepo from '../../modules/perfil/dados/repositorio.js';
import type { MeuPerfilRow } from '../../modules/perfil/dados/types.js';
import { obterTextosPerfil } from '../../modules/perfil/ui/textos-perfil.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import { criarDialogoFormulario } from '../ui/dialogos.js';
import type { CampoFormulario } from '../ui/form.js';
import { criarCampoNumero, criarCampoTexto, criarFormGrid } from '../ui/form.js';
import { criarCardUi, criarGrid, criarPaginaUi, criarTituloSecao } from '../ui/layout.js';
import { criarBlocoLista, criarBotaoAcao } from '../ui/lista.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { definirTituloDocumentoApp, reporTituloDocumentoSoNomeApp } from '../ui/titulo-documento.js';

interface CamposPerfilUi {
  nome: CampoFormulario<string>;
  telefone: CampoFormulario<string>;
  email: CampoFormulario<string>;
  link: CampoFormulario<string>;
  comentario: CampoFormulario<string>;
  nomeSecretario: CampoFormulario<string>;
  telefoneSecretario: CampoFormulario<string>;
  tipoSanguineo: CampoFormulario<string>;
  alergias: CampoFormulario<string>;
  medicamentosEmUso: CampoFormulario<string>;
  observacoesMedicas: CampoFormulario<string>;
  recusaTransfusao: HTMLInputElement;
  fracoesAceitas: CampoFormulario<string>;
  uriScanDpa: CampoFormulario<string>;
  contatoEmergencia: CampoFormulario<string>;
  contatoEmergenciaTelefone: CampoFormulario<string>;
  nomeColih: CampoFormulario<string>;
  telefoneColih: CampoFormulario<string>;
  dpaCategoriaAtualizado: CampoFormulario<number>;
}

function valorOuTraco(valor: string | number): string {
  const texto = String(valor).trim();
  return texto || '-';
}

function criarCamposPerfil(tm: ReturnType<typeof obterTextosPerfil>): CamposPerfilUi {
  const recusaTransfusao = document.createElement('input');
  recusaTransfusao.type = 'checkbox';

  return {
    nome: criarCampoTexto({ rotulo: tm.campoNome }),
    telefone: criarCampoTexto({ rotulo: tm.campoTelefone }),
    email: criarCampoTexto({ rotulo: tm.campoEmail }),
    link: criarCampoTexto({ rotulo: tm.campoLink }),
    comentario: criarCampoTexto({ rotulo: tm.campoComentario, linhas: 2 }),
    nomeSecretario: criarCampoTexto({ rotulo: tm.campoNomeSecretario }),
    telefoneSecretario: criarCampoTexto({ rotulo: tm.campoTelSecretario }),
    tipoSanguineo: criarCampoTexto({ rotulo: tm.campoTipoSanguineo }),
    alergias: criarCampoTexto({ rotulo: tm.campoAlergias, linhas: 2 }),
    medicamentosEmUso: criarCampoTexto({ rotulo: tm.campoMedicamentos, linhas: 2 }),
    observacoesMedicas: criarCampoTexto({ rotulo: tm.campoObsMedicas, linhas: 4 }),
    recusaTransfusao,
    fracoesAceitas: criarCampoTexto({ rotulo: tm.campoFracoesAceitas, linhas: 2 }),
    uriScanDpa: criarCampoTexto({ rotulo: tm.campoUriDpa }),
    contatoEmergencia: criarCampoTexto({ rotulo: tm.campoContatoEmergencia }),
    contatoEmergenciaTelefone: criarCampoTexto({ rotulo: tm.campoTelEmergencia }),
    nomeColih: criarCampoTexto({ rotulo: tm.campoNomeColih }),
    telefoneColih: criarCampoTexto({ rotulo: tm.campoTelColih }),
    dpaCategoriaAtualizado: criarCampoNumero({ rotulo: tm.campoDpaCategoria, valorInicial: 0 }),
  };
}

function preencherCampos(row: MeuPerfilRow, campos: CamposPerfilUi): void {
  campos.nome.definirValor(row.nome);
  campos.telefone.definirValor(row.telefone);
  campos.email.definirValor(row.email);
  campos.link.definirValor(row.link);
  campos.comentario.definirValor(row.comentario);
  campos.nomeSecretario.definirValor(row.nomeSecretario);
  campos.telefoneSecretario.definirValor(row.telefoneSecretario);
  campos.tipoSanguineo.definirValor(row.tipoSanguineo);
  campos.alergias.definirValor(row.alergias);
  campos.medicamentosEmUso.definirValor(row.medicamentosEmUso);
  campos.observacoesMedicas.definirValor(row.observacoesMedicas);
  campos.recusaTransfusao.checked = row.recusaTransfusao !== 0;
  campos.fracoesAceitas.definirValor(row.fracoesAceitas);
  campos.uriScanDpa.definirValor(row.uriScanDpa);
  campos.contatoEmergencia.definirValor(row.contatoEmergencia);
  campos.contatoEmergenciaTelefone.definirValor(row.contatoEmergenciaTelefone);
  campos.nomeColih.definirValor(row.nomeColih);
  campos.telefoneColih.definirValor(row.telefoneColih);
  campos.dpaCategoriaAtualizado.definirValor(row.dpaCategoriaAtualizado ?? 0);
}

function coletarInput(r: CamposPerfilUi): Omit<MeuPerfilRow, 'id'> {
  return {
    nome: r.nome.valor(),
    telefone: r.telefone.valor(),
    email: r.email.valor(),
    link: r.link.valor(),
    comentario: r.comentario.valor(),
    nomeSecretario: r.nomeSecretario.valor(),
    telefoneSecretario: r.telefoneSecretario.valor(),
    tipoSanguineo: r.tipoSanguineo.valor(),
    alergias: r.alergias.valor(),
    medicamentosEmUso: r.medicamentosEmUso.valor(),
    observacoesMedicas: r.observacoesMedicas.valor(),
    recusaTransfusao: r.recusaTransfusao.checked ? 1 : 0,
    fracoesAceitas: r.fracoesAceitas.valor(),
    uriScanDpa: r.uriScanDpa.valor(),
    contatoEmergencia: r.contatoEmergencia.valor(),
    contatoEmergenciaTelefone: r.contatoEmergenciaTelefone.valor(),
    nomeColih: r.nomeColih.valor(),
    telefoneColih: r.telefoneColih.valor(),
    dpaCategoriaAtualizado: r.dpaCategoriaAtualizado.valor() || 0,
  };
}

const perfilPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    let tm = obterTextosPerfil(loc);
    definirTituloDocumentoApp(tm.tituloPagina, loc);

    let perfilAtual = await perfilRepo.obterPerfil();

    const botaoEditar = criarBotaoAcao(tm.editar, { variant: 'brand' });
    const pagina = criarPaginaUi({ titulo: tm.tituloPagina, subtitulo: tm.subtituloIce, acoes: [botaoEditar] });
    const campos = criarCamposPerfil(tm);

    const recusaWrap = document.createElement('label');
    recusaWrap.className = 'shell__checkbox-linha';
    const recusaTexto = document.createTextNode(tm.campoRecusaTransfusao);
    recusaWrap.append(campos.recusaTransfusao, recusaTexto);

    const estado = document.createElement('p');
    estado.className = 'shell__hint';
    estado.hidden = true;
    estado.setAttribute('role', 'status');

    const corpoDialogo = [
      criarTituloSecao(tm.secDados),
      criarFormGrid(campos.nome.elemento, campos.telefone.elemento, campos.email.elemento, campos.link.elemento),
      campos.comentario.elemento,
      criarTituloSecao(tm.secSecretario),
      criarFormGrid(campos.nomeSecretario.elemento, campos.telefoneSecretario.elemento),
      criarTituloSecao(tm.secMedico),
      criarFormGrid(campos.tipoSanguineo.elemento, campos.uriScanDpa.elemento, campos.dpaCategoriaAtualizado.elemento),
      criarFormGrid(campos.alergias.elemento, campos.medicamentosEmUso.elemento),
      campos.observacoesMedicas.elemento,
      recusaWrap,
      campos.fracoesAceitas.elemento,
      criarTituloSecao(tm.secEmergencia),
      criarFormGrid(campos.contatoEmergencia.elemento, campos.contatoEmergenciaTelefone.elemento),
      criarTituloSecao(tm.secColih),
      criarFormGrid(campos.nomeColih.elemento, campos.telefoneColih.elemento),
    ];

    const dialogoPerfil = criarDialogoFormulario({
      titulo: tm.editar,
      confirmarTexto: tm.guardar,
      cancelarTexto: obterLocaleAtual() === 'en' ? 'Cancel' : 'Cancelar',
      conteudo: corpoDialogo,
      signal: sinal,
      aoConfirmar: async () => {
        estado.hidden = true;
        try {
          await perfilRepo.gravarPerfil(coletarInput(campos));
          perfilAtual = await perfilRepo.obterPerfil();
          renderizarResumo();
          estado.hidden = false;
          estado.textContent = obterTextosPerfil(obterLocaleAtual()).gravadoOk;
        } catch {
          estado.hidden = false;
          estado.textContent = obterTextosPerfil(obterLocaleAtual()).erroBd;
          return false;
        }
      },
    });

    pagina.corpo.append(estado);
    container.replaceChildren(pagina.raiz, dialogoPerfil.elemento);

    function renderizarResumo(): void {
      const t = obterTextosPerfil(obterLocaleAtual());
      const cardDados = criarCardUi({
        titulo: t.secDados,
        conteudo: [
          criarBlocoLista(perfilAtual.nome || t.campoNome, [
            `${t.campoTelefone}: ${valorOuTraco(perfilAtual.telefone)}`,
            `${t.campoEmail}: ${valorOuTraco(perfilAtual.email)}`,
            `${t.campoLink}: ${valorOuTraco(perfilAtual.link)}`,
            valorOuTraco(perfilAtual.comentario),
          ]),
        ],
      });
      const cardMedico = criarCardUi({
        titulo: t.secMedico,
        conteudo: [
          criarBlocoLista(valorOuTraco(perfilAtual.tipoSanguineo), [
            `${t.campoAlergias}: ${valorOuTraco(perfilAtual.alergias)}`,
            `${t.campoMedicamentos}: ${valorOuTraco(perfilAtual.medicamentosEmUso)}`,
            `${t.campoRecusaTransfusao}: ${perfilAtual.recusaTransfusao !== 0 ? 'sim' : 'não'}`,
          ]),
        ],
      });
      const cardEmergencia = criarCardUi({
        titulo: t.secEmergencia,
        conteudo: [
          criarBlocoLista(valorOuTraco(perfilAtual.contatoEmergencia), [
            `${t.campoTelEmergencia}: ${valorOuTraco(perfilAtual.contatoEmergenciaTelefone)}`,
          ]),
        ],
      });
      const cardApoio = criarCardUi({
        titulo: t.secSecretario,
        conteudo: [
          criarBlocoLista(valorOuTraco(perfilAtual.nomeSecretario), [
            `${t.campoTelSecretario}: ${valorOuTraco(perfilAtual.telefoneSecretario)}`,
            `${t.secColih}: ${valorOuTraco(perfilAtual.nomeColih)} · ${valorOuTraco(perfilAtual.telefoneColih)}`,
          ]),
        ],
      });

      pagina.corpo.replaceChildren(
        estado,
        criarGrid(cardDados.cartao, cardMedico.cartao, cardEmergencia.cartao, cardApoio.cartao),
      );
    }

    function aplicarTextos(t: typeof tm): void {
      tm = t;
      definirTituloDocumentoApp(tm.tituloPagina);
      pagina.titulo.textContent = tm.tituloPagina;
      pagina.subtitulo.textContent = tm.subtituloIce;
      botaoEditar.textContent = tm.editar;
      dialogoPerfil.definirTitulo(tm.editar);
      dialogoPerfil.botaoConfirmar.textContent = tm.guardar;
      dialogoPerfil.botaoCancelar.textContent = obterLocaleAtual() === 'en' ? 'Cancel' : 'Cancelar';
      recusaTexto.textContent = tm.campoRecusaTransfusao;
      campos.nome.definirRotulo(tm.campoNome);
      campos.nome.definirPlaceholder(tm.campoNome);
      campos.telefone.definirRotulo(tm.campoTelefone);
      campos.telefone.definirPlaceholder(tm.campoTelefone);
      campos.email.definirRotulo(tm.campoEmail);
      campos.email.definirPlaceholder(tm.campoEmail);
      campos.link.definirRotulo(tm.campoLink);
      campos.link.definirPlaceholder(tm.campoLink);
      campos.comentario.definirRotulo(tm.campoComentario);
      campos.comentario.definirPlaceholder(tm.campoComentario);
      campos.nomeSecretario.definirRotulo(tm.campoNomeSecretario);
      campos.nomeSecretario.definirPlaceholder(tm.campoNomeSecretario);
      campos.telefoneSecretario.definirRotulo(tm.campoTelSecretario);
      campos.telefoneSecretario.definirPlaceholder(tm.campoTelSecretario);
      campos.tipoSanguineo.definirRotulo(tm.campoTipoSanguineo);
      campos.tipoSanguineo.definirPlaceholder(tm.campoTipoSanguineo);
      campos.alergias.definirRotulo(tm.campoAlergias);
      campos.alergias.definirPlaceholder(tm.campoAlergias);
      campos.medicamentosEmUso.definirRotulo(tm.campoMedicamentos);
      campos.medicamentosEmUso.definirPlaceholder(tm.campoMedicamentos);
      campos.observacoesMedicas.definirRotulo(tm.campoObsMedicas);
      campos.observacoesMedicas.definirPlaceholder(tm.campoObsMedicas);
      campos.fracoesAceitas.definirRotulo(tm.campoFracoesAceitas);
      campos.fracoesAceitas.definirPlaceholder(tm.campoFracoesAceitas);
      campos.uriScanDpa.definirRotulo(tm.campoUriDpa);
      campos.uriScanDpa.definirPlaceholder(tm.campoUriDpa);
      campos.contatoEmergencia.definirRotulo(tm.campoContatoEmergencia);
      campos.contatoEmergencia.definirPlaceholder(tm.campoContatoEmergencia);
      campos.contatoEmergenciaTelefone.definirRotulo(tm.campoTelEmergencia);
      campos.contatoEmergenciaTelefone.definirPlaceholder(tm.campoTelEmergencia);
      campos.nomeColih.definirRotulo(tm.campoNomeColih);
      campos.nomeColih.definirPlaceholder(tm.campoNomeColih);
      campos.telefoneColih.definirRotulo(tm.campoTelColih);
      campos.telefoneColih.definirPlaceholder(tm.campoTelColih);
      campos.dpaCategoriaAtualizado.definirRotulo(tm.campoDpaCategoria);
      renderizarResumo();
    }

    botaoEditar.addEventListener(
      'click',
      async () => {
        perfilAtual = await perfilRepo.obterPerfil();
        preencherCampos(perfilAtual, campos);
        dialogoPerfil.abrir();
      },
      { signal: sinal },
    );

    aplicarTextos(tm);

    registarAoLocaleAtualizado(async () => {
      perfilAtual = await perfilRepo.obterPerfil();
      aplicarTextos(obterTextosPerfil(obterLocaleAtual()));
    }, sinal);
  },

  unmount() {
    reporTituloDocumentoSoNomeApp();
  },
};

export default perfilPagina;
