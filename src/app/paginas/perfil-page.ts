import * as perfilRepo from '../../modules/perfil/dados/repositorio.js';
import type { MeuPerfilRow } from '../../modules/perfil/dados/types.js';
import { obterTextosPerfil } from '../../modules/perfil/ui/textos-perfil.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import { obterLocaleAtual, registarAoLocaleAtualizado } from '../../modules/shared/ui/locale.js';
import type { PaginaMontavel } from '../pagina-montavel.js';

interface CamposPerfilUi {
  nome: HTMLInputElement;
  telefone: HTMLInputElement;
  email: HTMLInputElement;
  link: HTMLInputElement;
  comentario: HTMLTextAreaElement;
  nomeSecretario: HTMLInputElement;
  telefoneSecretario: HTMLInputElement;
  tipoSanguineo: HTMLInputElement;
  alergias: HTMLTextAreaElement;
  medicamentosEmUso: HTMLTextAreaElement;
  observacoesMedicas: HTMLTextAreaElement;
  recusaTransfusao: HTMLInputElement;
  fracoesAceitas: HTMLTextAreaElement;
  uriScanDpa: HTMLInputElement;
  contatoEmergencia: HTMLInputElement;
  contatoEmergenciaTelefone: HTMLInputElement;
  nomeColih: HTMLInputElement;
  telefoneColih: HTMLInputElement;
  dpaCategoriaAtualizado: HTMLInputElement;
}

function mkLinhaCampo(
  rotuloTexto: string,
  entrada: HTMLInputElement | HTMLTextAreaElement,
): HTMLElement {
  const lbl = document.createElement('label');
  lbl.className = 'shell__campo';
  const sp = document.createElement('span');
  sp.className = 'shell__etiqueta';
  sp.textContent = rotuloTexto;
  lbl.append(sp, entrada);
  return lbl;
}

function mkInput(kind: 'text' | 'number', valor: string): HTMLInputElement {
  const inp = document.createElement('input');
  inp.type = kind;
  inp.className = 'shell__input-texto';
  inp.value = valor;
  return inp;
}

function mkTextArea(valor: string, linhas: number): HTMLTextAreaElement {
  const ta = document.createElement('textarea');
  ta.rows = linhas;
  ta.className = 'shell__textarea';
  ta.value = valor;
  return ta;
}

function rowParaCampos(
  row: MeuPerfilRow,
  tm: ReturnType<typeof obterTextosPerfil>,
): { refs: CamposPerfilUi } {
  const nome = mkInput('text', row.nome);
  const telefone = mkInput('text', row.telefone);
  const email = mkInput('text', row.email);
  const link = mkInput('text', row.link);
  const comentario = mkTextArea(row.comentario, 2);
  const nomeSecretario = mkInput('text', row.nomeSecretario);
  const telefoneSecretario = mkInput('text', row.telefoneSecretario);
  const tipoSanguineo = mkInput('text', row.tipoSanguineo);
  const alergias = mkTextArea(row.alergias, 2);
  const medicamentosEmUso = mkTextArea(row.medicamentosEmUso, 2);
  const observacoesMedicas = mkTextArea(row.observacoesMedicas, 4);
  const recusaTransfusao = document.createElement('input');
  recusaTransfusao.type = 'checkbox';
  recusaTransfusao.checked = row.recusaTransfusao !== 0;
  const fracoesAceitas = mkTextArea(row.fracoesAceitas, 2);
  const uriScanDpa = mkInput('text', row.uriScanDpa);
  const contatoEmergencia = mkInput('text', row.contatoEmergencia);
  const contatoEmergenciaTelefone = mkInput('text', row.contatoEmergenciaTelefone);
  const nomeColih = mkInput('text', row.nomeColih);
  const telefoneColih = mkInput('text', row.telefoneColih);
  const dpaCategoriaAtualizado = mkInput('number', String(row.dpaCategoriaAtualizado ?? 0));
  dpaCategoriaAtualizado.title = tm.hintDpaCategoria;

  return {
    refs: {
      nome,
      telefone,
      email,
      link,
      comentario,
      nomeSecretario,
      telefoneSecretario,
      tipoSanguineo,
      alergias,
      medicamentosEmUso,
      observacoesMedicas,
      recusaTransfusao,
      fracoesAceitas,
      uriScanDpa,
      contatoEmergencia,
      contatoEmergenciaTelefone,
      nomeColih,
      telefoneColih,
      dpaCategoriaAtualizado,
    },
  };
}

function coletarInput(r: CamposPerfilUi): Omit<MeuPerfilRow, 'id'> {
  return {
    nome: r.nome.value.trim(),
    telefone: r.telefone.value.trim(),
    email: r.email.value.trim(),
    link: r.link.value.trim(),
    comentario: r.comentario.value.trim(),
    nomeSecretario: r.nomeSecretario.value.trim(),
    telefoneSecretario: r.telefoneSecretario.value.trim(),
    tipoSanguineo: r.tipoSanguineo.value.trim(),
    alergias: r.alergias.value.trim(),
    medicamentosEmUso: r.medicamentosEmUso.value.trim(),
    observacoesMedicas: r.observacoesMedicas.value.trim(),
    recusaTransfusao: r.recusaTransfusao.checked ? 1 : 0,
    fracoesAceitas: r.fracoesAceitas.value.trim(),
    uriScanDpa: r.uriScanDpa.value.trim(),
    contatoEmergencia: r.contatoEmergencia.value.trim(),
    contatoEmergenciaTelefone: r.contatoEmergenciaTelefone.value.trim(),
    nomeColih: r.nomeColih.value.trim(),
    telefoneColih: r.telefoneColih.value.trim(),
    dpaCategoriaAtualizado: Number.parseInt(String(r.dpaCategoriaAtualizado.value), 10) || 0,
  };
}

function secaoTitulo(txt: string): HTMLElement {
  const h = document.createElement('h2');
  h.className = 'shell__subtitulo';
  h.textContent = txt;
  return h;
}

const perfilPagina: PaginaMontavel = {
  async mount(container, sinal) {
    const loc = obterLocaleAtual();
    let tm = obterTextosPerfil(loc);
    const appNome = obterTextosConfig(loc).appNomeTituloDoc;
    document.title = `${tm.tituloPagina} — ${appNome}`;

    const barra = document.createElement('div');
    barra.className = 'shell__barra-ficha';
    const h1 = document.createElement('h1');
    h1.className = 'shell__titulo';

    const sub = document.createElement('p');
    sub.className = 'shell__sub';

    const form = document.createElement('div');
    form.className = 'shell__secao-config';

    const estado = document.createElement('p');
    estado.className = 'shell__hint';
    estado.hidden = true;
    estado.setAttribute('role', 'status');

    const btnGuardar = document.createElement('button');
    btnGuardar.type = 'button';
    btnGuardar.className = 'shell__acao-primaria-botao';

    container.replaceChildren();
    barra.append(h1);
    container.append(barra, sub, form, estado, btnGuardar);

    let campoRefs = rowParaCampos(
      await perfilRepo.obterPerfil(),
      tm,
    ).refs;

    function montarFormulario(tmAtual: typeof tm): void {
      tm = tmAtual;
      document.title = `${tm.tituloPagina} — ${obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc}`;
      h1.textContent = tm.tituloPagina;
      sub.textContent = tm.subtituloIce;
      btnGuardar.textContent = tm.guardar;
      form.replaceChildren();

      const chkWrap = document.createElement('label');
      chkWrap.className = 'shell__checkbox-linha';
      const lblRec = document.createTextNode(tm.campoRecusaTransfusao);
      chkWrap.append(campoRefs.recusaTransfusao, lblRec);

      form.append(
        secaoTitulo(tm.secDados),
        mkLinhaCampo(tm.campoNome, campoRefs.nome),
        mkLinhaCampo(tm.campoTelefone, campoRefs.telefone),
        mkLinhaCampo(tm.campoEmail, campoRefs.email),
        mkLinhaCampo(tm.campoLink, campoRefs.link),
        mkLinhaCampo(tm.campoComentario, campoRefs.comentario),

        secaoTitulo(tm.secSecretario),
        mkLinhaCampo(tm.campoNomeSecretario, campoRefs.nomeSecretario),
        mkLinhaCampo(tm.campoTelSecretario, campoRefs.telefoneSecretario),

        secaoTitulo(tm.secMedico),
        mkLinhaCampo(tm.campoTipoSanguineo, campoRefs.tipoSanguineo),
        mkLinhaCampo(tm.campoAlergias, campoRefs.alergias),
        mkLinhaCampo(tm.campoMedicamentos, campoRefs.medicamentosEmUso),
        mkLinhaCampo(tm.campoObsMedicas, campoRefs.observacoesMedicas),
        chkWrap,
        mkLinhaCampo(tm.campoFracoesAceitas, campoRefs.fracoesAceitas),
        mkLinhaCampo(tm.campoUriDpa, campoRefs.uriScanDpa),

        secaoTitulo(tm.secEmergencia),
        mkLinhaCampo(tm.campoContatoEmergencia, campoRefs.contatoEmergencia),
        mkLinhaCampo(tm.campoTelEmergencia, campoRefs.contatoEmergenciaTelefone),

        secaoTitulo(tm.secColih),
        mkLinhaCampo(tm.campoNomeColih, campoRefs.nomeColih),
        mkLinhaCampo(tm.campoTelColih, campoRefs.telefoneColih),
        mkLinhaCampo(tm.campoDpaCategoria, campoRefs.dpaCategoriaAtualizado),
      );
    }

    montarFormulario(tm);

    btnGuardar.addEventListener(
      'click',
      async () => {
        estado.hidden = true;
        try {
          await perfilRepo.gravarPerfil(coletarInput(campoRefs));
          estado.hidden = false;
          estado.textContent = obterTextosPerfil(obterLocaleAtual()).gravadoOk;
        } catch {
          estado.hidden = false;
          estado.textContent = obterTextosPerfil(obterLocaleAtual()).erroBd;
        }
      },
      { signal: sinal },
    );

    registarAoLocaleAtualizado(async () => {
      const atual = await perfilRepo.obterPerfil();
      const { refs } = rowParaCampos(atual, obterTextosPerfil(obterLocaleAtual()));
      campoRefs = refs;
      montarFormulario(obterTextosPerfil(obterLocaleAtual()));
    }, sinal);
  },

  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default perfilPagina;
