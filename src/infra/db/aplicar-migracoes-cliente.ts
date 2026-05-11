import { obterClienteSqlocal } from './cliente-sqlocal.js';

const ficheirosSql = import.meta.glob('./migrations/*.sql', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function extrairVersao(caminhoRelativo: string): number {
  const nomeFicheiro = caminhoRelativo.split(/[/\\]/).pop() ?? '';
  const m = nomeFicheiro.match(/^(\d+)/);
  return m ? Number.parseInt(m[1], 10) : 0;
}

/**
 * Parte um script `.sql` em instruções (delimitador `;` seguido de quebra de linha).
 * Linhas só com comentário `--` são ignoradas.
 */
export function partirInstrucoesSql(conteudo: string): string[] {
  const linhas = conteudo.split(/\r?\n/);
  const filtrado = linhas
    .filter((linha) => !linha.trim().startsWith('--'))
    .join('\n');
  return filtrado
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

/**
 * Garante `_migrations` e aplica ficheiros `.sql` em `migrations/` por ordem de versão.
 */
export async function aplicarMigracoesPendentes(): Promise<void> {
  const { sql } = obterClienteSqlocal();

  await sql`
    CREATE TABLE IF NOT EXISTS _migrations (
      version INTEGER PRIMARY KEY NOT NULL,
      applied_at INTEGER NOT NULL
    )
  `;

  const aplicadas = (await sql`SELECT version FROM _migrations`) as Array<{ version: number }>;
  const versoesFeitas = new Set<number>(aplicadas.map((linha) => linha.version));

  const ordenados = Object.entries(ficheirosSql).sort(([a], [b]) => {
    return extrairVersao(a) - extrairVersao(b);
  });

  for (const [caminho, conteudo] of ordenados) {
    const versao = extrairVersao(caminho);
    if (versao === 0 || versoesFeitas.has(versao)) {
      continue;
    }
    const ddl = conteudo.trim();
    if (ddl.length > 0) {
      for (const instrucao of partirInstrucoesSql(ddl)) {
        await sql(instrucao);
      }
    }
    await sql`INSERT INTO _migrations (version, applied_at) VALUES (${versao}, ${Date.now()})`;
    versoesFeitas.add(versao);
  }
}
