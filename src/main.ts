import { inicializarAplicacao } from './app/bootstrap.js';

void inicializarAplicacao().catch((erro: unknown) => {
  console.error(erro);
  const raiz = document.querySelector('#app');
  if (raiz) {
    raiz.textContent = erro instanceof Error ? erro.message : String(erro);
  }
});
