import { setBasePath, discover } from '@awesome.me/webawesome';
import '@awesome.me/webawesome/dist/styles/webawesome.css';
import '@fontsource-variable/inter/wght.css';

import '../style.css';
import { aplicarMigracoesPendentes } from '../infra/db/aplicar-migracoes-cliente.js';
import { obterCodigoIdiomaPreferidoArmazenado } from '../modules/configuracao/ui/preferencias-ui.js';
import { NOMES_TABELAS_DOMINIO_ESPERADAS } from '../infra/db/contrato-bd.gerado.js';
import { obterClienteSqlocal } from '../infra/db/cliente-sqlocal.js';
import {
  listarAnotacoesParaLista,
  obterAnotacaoComConteudo,
} from '../modules/anotacoes/dados/repositorio.js';
import { iniciarRouter } from './router.js';
import { montarShell } from './shell.js';

async function provaEsquemaV37(): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const linhas = (await sql`
    SELECT name
    FROM sqlite_master
    WHERE type = 'table' AND name GLOB 'tbl_*'
  `) as Array<{ name: string }>;
  const existentes = new Set(linhas.map((r) => r.name));
  const faltantes = NOMES_TABELAS_DOMINIO_ESPERADAS.filter((nome) => !existentes.has(nome));
  if (faltantes.length > 0) {
    throw new Error(
      `Smoke esquema: tabelas do contrato em falta: ${faltantes.join(', ')}.`,
    );
  }
}

async function provaFumoLazyAnotacao(): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const agora = Date.now();
  const inseridas = (await sql`
    INSERT INTO tbl_anotacao (
      pasta_id, titulo, conteudo, tipo_modelo,
      data_criacao, data_modificacao, esta_fixada, esta_arquivada, etiquetas
    ) VALUES (
      NULL, ${'Smoke lazy selection'}, ${'<p>ok</p>'}, ${'livre'},
      ${agora}, ${agora}, ${0}, ${0}, ${''}
    )
    RETURNING id
  `) as Array<{ id: number }>;
  const id = inseridas[0]?.id;
  if (id === undefined) {
    throw new Error('Smoke lazy: INSERT não devolveu id.');
  }
  const lista = await listarAnotacoesParaLista();
  const linhaLista = lista.find((r) => r.id === id);
  if (!linhaLista) {
    throw new Error('Smoke lazy: linha não aparece na listagem.');
  }
  const detalhe = await obterAnotacaoComConteudo(id);
  if (!detalhe || detalhe.conteudo !== '<p>ok</p>') {
    throw new Error('Smoke lazy: detalhe sem conteúdo esperado.');
  }
  await sql`DELETE FROM tbl_anotacao WHERE id = ${id}`;
}

async function provaFumoTblPasta(): Promise<void> {
  const { sql } = obterClienteSqlocal();
  const existentes = await sql`SELECT id FROM tbl_pasta`;
  if (existentes.length > 0) {
    return;
  }
  await sql`INSERT INTO tbl_pasta (nome, icone, ordem) VALUES (${'Geral'}, ${'pasta'}, ${0})`;
  const linhas = await sql`SELECT id, nome, icone, ordem FROM tbl_pasta WHERE id > 0`;
  if (linhas.length !== 1) {
    throw new Error('Smoke tbl_pasta: inserção não devolveu uma linha.');
  }
  await sql`DELETE FROM tbl_pasta WHERE id = ${linhas[0].id}`;
  const vazio = await sql`SELECT id FROM tbl_pasta`;
  if (vazio.length !== 0) {
    throw new Error('Smoke tbl_pasta: apagar não limpou a tabela.');
  }
}

/**
 * Arranque da aplicação: Web Awesome, OPFS/SQLocal, migrações, shell.
 */
export async function inicializarAplicacao(): Promise<void> {
  setBasePath(`${import.meta.env.BASE_URL}webawesome/`);

  const codigoLang = obterCodigoIdiomaPreferidoArmazenado().toLowerCase();
  document.documentElement.lang = codigoLang.startsWith('en') ? 'en' : 'pt-BR';

  const raiz = document.querySelector<HTMLDivElement>('#app');
  if (!raiz) {
    throw new Error('Elemento #app não encontrado.');
  }

  await aplicarMigracoesPendentes();
  await provaEsquemaV37();
  await provaFumoTblPasta();
  await provaFumoLazyAnotacao();

  await montarShell(raiz);
  iniciarRouter(raiz);
  await discover(document);
}
