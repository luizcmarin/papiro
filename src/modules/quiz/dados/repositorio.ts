import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type { PerguntaQuizInputManual, PerguntaQuizRow, RecordeMemoriaRow } from './types.js';

export async function contarPerguntasLocales(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`SELECT COUNT(*) AS c FROM tbl_perguntas`;
  const r = linhas[0] as { c: number } | undefined;
  return r?.c ?? 0;
}

export async function obterPerguntaAleatoria(): Promise<PerguntaQuizRow | null> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, pergunta, referencia, dificuldade, resposta1, resposta2, resposta3, resposta4, correta, publicar
    FROM tbl_perguntas
    ORDER BY RANDOM()
    LIMIT 1
  `;
  const primeira = linhas[0];
  return primeira ? (primeira as PerguntaQuizRow) : null;
}

export async function inserirOuSubstituirPerguntaManual(d: PerguntaQuizInputManual): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    INSERT OR REPLACE INTO tbl_perguntas (
      id, pergunta, referencia, dificuldade, resposta1, resposta2, resposta3, resposta4, correta, publicar
    ) VALUES (
      ${d.id}, ${d.pergunta}, ${d.referencia}, ${d.dificuldade}, ${d.resposta1}, ${d.resposta2}, ${d.resposta3}, ${d.resposta4}, ${d.correta}, ${d.publicar}
    )
  `;
}

export async function proximoIdLivrePergunta(): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`SELECT COALESCE(MAX(id), 0) + 1 AS n FROM tbl_perguntas`;
  const r = linhas[0] as { n: number } | undefined;
  return r?.n ?? 1;
}

export async function listarRecordesMemoria(): Promise<RecordeMemoriaRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT dificuldade, melhorTempoMs, melhorMovimentos, partidasConcluidas, atualizadoEm
    FROM tbl_recordes_memoria
    ORDER BY dificuldade
  `;
  return linhas as RecordeMemoriaRow[];
}
