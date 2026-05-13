export const BACKUP_PAPIRO_FORMATO = 'papiro.backup';
export const BACKUP_PAPIRO_VERSAO = 1;

export interface TabelaBackupResumo {
  nome: string;
  linhas: number;
}

export interface MetadadosBackup {
  formato: typeof BACKUP_PAPIRO_FORMATO;
  versao: number;
  databaseVersion: number;
  criadoEm: number;
  tabelas: TabelaBackupResumo[];
  criptografado: boolean;
}

export function criarMetadadosBackup(opcoes: {
  databaseVersion: number;
  tabelas: TabelaBackupResumo[];
  criadoEm?: number;
  criptografado?: boolean;
}): MetadadosBackup {
  return {
    formato: BACKUP_PAPIRO_FORMATO,
    versao: BACKUP_PAPIRO_VERSAO,
    databaseVersion: opcoes.databaseVersion,
    criadoEm: opcoes.criadoEm ?? Date.now(),
    tabelas: opcoes.tabelas.map((t) => ({ nome: t.nome, linhas: Math.max(0, Math.floor(t.linhas)) })),
    criptografado: opcoes.criptografado ?? true,
  };
}

export function validarMetadadosBackup(valor: unknown, databaseVersionEsperada: number): valor is MetadadosBackup {
  if (typeof valor !== 'object' || valor === null) return false;
  const v = valor as Partial<MetadadosBackup>;
  return (
    v.formato === BACKUP_PAPIRO_FORMATO &&
    v.versao === BACKUP_PAPIRO_VERSAO &&
    v.databaseVersion === databaseVersionEsperada &&
    typeof v.criadoEm === 'number' &&
    Array.isArray(v.tabelas)
  );
}

export function nomeArquivoBackup(criadoEm: number): string {
  const iso = new Date(criadoEm).toISOString().replace(/[:.]/g, '-');
  return `papiro-${iso}.papiro`;
}

