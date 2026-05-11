import { obterClienteSqlocal } from '../../../infra/db/cliente-sqlocal.js';
import type {
  EstudoBiblicoInput,
  EstudoBiblicoRow,
  RelatorioMinisterioInput,
  RelatorioMinisterioRow,
} from './types.js';

export async function listarRelatorios(): Promise<RelatorioMinisterioRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, mes, ano, ano_servico, horas, estudos, participacao, tipo_publicador,
           meta_horas, notas_publicacoes, telefone_dirigente, nome_dirigente
    FROM tbl_relatorios_ministerio
    ORDER BY ano DESC, mes DESC
  `;
  return linhas as RelatorioMinisterioRow[];
}

export async function inserirRelatorio(d: RelatorioMinisterioInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_relatorios_ministerio (
      mes, ano, ano_servico, horas, estudos, participacao, tipo_publicador,
      meta_horas, notas_publicacoes, telefone_dirigente, nome_dirigente
    ) VALUES (
      ${d.mes}, ${d.ano}, ${d.ano_servico}, ${d.horas}, ${d.estudos}, ${d.participacao}, ${d.tipo_publicador},
      ${d.meta_horas}, ${d.notas_publicacoes}, ${d.telefone_dirigente}, ${d.nome_dirigente}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT relatório falhou.');
  return primeira.id;
}

export async function atualizarRelatorio(id: number, d: RelatorioMinisterioInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_relatorios_ministerio SET
      mes = ${d.mes}, ano = ${d.ano}, ano_servico = ${d.ano_servico}, horas = ${d.horas},
      estudos = ${d.estudos}, participacao = ${d.participacao}, tipo_publicador = ${d.tipo_publicador},
      meta_horas = ${d.meta_horas}, notas_publicacoes = ${d.notas_publicacoes},
      telefone_dirigente = ${d.telefone_dirigente}, nome_dirigente = ${d.nome_dirigente}
    WHERE id = ${id}
  `;
}

export async function apagarRelatorio(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_relatorios_ministerio WHERE id = ${id}`;
}

export async function listarEstudosBiblicos(): Promise<EstudoBiblicoRow[]> {
  const { sql } = obterClienteSqlocal();
  const linhas = await sql`
    SELECT id, nome, contato, endereco, zoom_link, publicacao_atual, licao_atual,
           dia_semana, horario_minutos, proximo_estudo_em, notas
    FROM tbl_estudos_biblicos
    ORDER BY proximo_estudo_em ASC, nome COLLATE NOCASE
  `;
  return linhas as EstudoBiblicoRow[];
}

export async function inserirEstudoBiblico(d: EstudoBiblicoInput): Promise<number> {
  const { sql } = obterClienteSqlocal();
  const res = await sql`
    INSERT INTO tbl_estudos_biblicos (
      nome, contato, endereco, zoom_link, publicacao_atual, licao_atual,
      dia_semana, horario_minutos, proximo_estudo_em, notas
    ) VALUES (
      ${d.nome}, ${d.contato}, ${d.endereco}, ${d.zoom_link}, ${d.publicacao_atual}, ${d.licao_atual},
      ${d.dia_semana}, ${d.horario_minutos}, ${d.proximo_estudo_em}, ${d.notas}
    )
    RETURNING id
  `;
  const primeira = res[0] as { id: number } | undefined;
  if (primeira === undefined) throw new Error('INSERT estudo falhou.');
  return primeira.id;
}

export async function atualizarEstudoBiblico(id: number, d: EstudoBiblicoInput): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`
    UPDATE tbl_estudos_biblicos SET
      nome = ${d.nome}, contato = ${d.contato}, endereco = ${d.endereco}, zoom_link = ${d.zoom_link},
      publicacao_atual = ${d.publicacao_atual}, licao_atual = ${d.licao_atual}, dia_semana = ${d.dia_semana},
      horario_minutos = ${d.horario_minutos}, proximo_estudo_em = ${d.proximo_estudo_em}, notas = ${d.notas}
    WHERE id = ${id}
  `;
}

export async function apagarEstudoBiblico(id: number): Promise<void> {
  const { sql } = obterClienteSqlocal();
  await sql`DELETE FROM tbl_estudos_biblicos WHERE id = ${id}`;
}
