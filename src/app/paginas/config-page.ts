import type { TemaVisual } from '../tema.js';
import { alternarTemaBreu, obterTemaPreferido } from '../tema.js';
import {
  CHAVE_IDIOMA_UI,
  obterCodigoIdiomaPreferidoArmazenado,
} from '../../modules/configuracao/ui/preferencias-ui.js';
import { obterTextosConfig } from '../../modules/configuracao/ui/textos-config.js';
import type { PaginaMontavel } from '../pagina-montavel.js';
import { EVENTO_LOCALE_ATUALIZADO, obterLocaleAtual } from '../../modules/shared/ui/locale.js';

export function obterCodigoIdiomaGravado(): string {
  return obterCodigoIdiomaPreferidoArmazenado();
}

const ID_SELECT_IDIOMA_CONFIG = 'papiro-config-select-idioma';

function montarPainelConfiguracao(container: HTMLElement, sinal: AbortSignal): void {
  if (sinal.aborted) return;

  const loc = obterLocaleAtual();
  const s = obterTextosConfig(loc);
  document.title = `${s.titulo} — ${s.appNomeTituloDoc}`;
  container.replaceChildren();

  const h1 = document.createElement('h1');
  h1.className = 'shell__titulo';
  h1.textContent = s.titulo;

  const secTema = document.createElement('section');
  secTema.className = 'shell__secao-config';
  const h2Tema = document.createElement('h2');
  h2Tema.className = 'shell__subtitulo';
  h2Tema.textContent = s.temaSecao;
  const textoTema = document.createElement('p');
  textoTema.className = 'shell__sub';
  function textoTemaAtual(): void {
    const tv: TemaVisual = obterTemaPreferido();
    const textoVal = tv === 'breu' ? s.temaValorBreu : s.temaValorClaro;
    textoTema.textContent = `${s.temaAtual}: ${textoVal}.`;
  }
  textoTemaAtual();
  const btnTema = document.createElement('button');
  btnTema.type = 'button';
  btnTema.className = 'shell__acao-primaria-botao';
  btnTema.textContent = s.temaBotao;
  btnTema.addEventListener('click', () => {
    alternarTemaBreu();
    textoTemaAtual();
  });
  secTema.append(h2Tema, textoTema, btnTema);

  const secIdioma = document.createElement('section');
  secIdioma.className = 'shell__secao-config';
  const h2Id = document.createElement('h2');
  h2Id.className = 'shell__subtitulo';
  h2Id.textContent = s.idiomaSecao;
  const pId = document.createElement('p');
  pId.className = 'shell__sub';
  pId.textContent = s.idiomaDescricao;
  const sel = document.createElement('select');
  sel.id = ID_SELECT_IDIOMA_CONFIG;
  sel.className = 'shell__select';
  const opPt = document.createElement('option');
  opPt.value = 'pt-BR';
  opPt.textContent = s.idiomaPt;
  const opEn = document.createElement('option');
  opEn.value = 'en';
  opEn.textContent = s.idiomaEn;
  sel.append(opPt, opEn);
  sel.value =
    obterCodigoIdiomaPreferidoArmazenado().toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
  const btnId = document.createElement('button');
  btnId.type = 'button';
  btnId.className = 'shell__acao-secundaria-botao';
  btnId.textContent = s.guardarIdioma;
  btnId.addEventListener('click', () => {
    if (sinal.aborted) return;
    const sx = window.scrollX;
    const sy = window.scrollY;
    const codigo = sel.value;
    localStorage.setItem(CHAVE_IDIOMA_UI, codigo);
    document.documentElement.lang = codigo.startsWith('en') ? 'en' : 'pt-BR';
    window.dispatchEvent(new CustomEvent(EVENTO_LOCALE_ATUALIZADO));
    montarPainelConfiguracao(container, sinal);
    requestAnimationFrame(() => {
      if (sinal.aborted) return;
      window.scrollTo(sx, sy);
      document.getElementById(ID_SELECT_IDIOMA_CONFIG)?.focus({ preventScroll: true });
    });
  });
  secIdioma.append(h2Id, pId, sel, btnId);

  const secPin = document.createElement('section');
  secPin.className = 'shell__secao-config';
  const h2Pin = document.createElement('h2');
  h2Pin.className = 'shell__subtitulo';
  h2Pin.textContent = s.pinSecao;
  const pPin = document.createElement('p');
  pPin.className = 'shell__sub';
  pPin.textContent = s.pinDescricao;
  const inpPin = document.createElement('input');
  inpPin.type = 'password';
  inpPin.disabled = true;
  inpPin.className = 'shell__input-texto';
  inpPin.setAttribute('aria-label', s.pinCampoEtiqueta);
  inpPin.placeholder = s.pinCampoPlaceholder;
  secPin.append(h2Pin, pPin, inpPin);

  container.append(h1, secTema, secIdioma, secPin);
}

const configPagina: PaginaMontavel = {
  mount(container, sinal) {
    sinal.addEventListener(
      'abort',
      () => {
        /* nada a libertar nesta página */
      },
      { once: true },
    );
    montarPainelConfiguracao(container, sinal);
  },
  unmount() {
    document.title = obterTextosConfig(obterLocaleAtual()).appNomeTituloDoc;
  },
};

export default configPagina;
