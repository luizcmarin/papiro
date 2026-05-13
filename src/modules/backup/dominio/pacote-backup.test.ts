import { describe, expect, it } from 'vitest';

import {
  BACKUP_PAPIRO_FORMATO,
  criarMetadadosBackup,
  nomeArquivoBackup,
  validarMetadadosBackup,
} from './pacote-backup.js';

describe('pacote-backup', () => {
  it('cria metadados versionados e saneia contagem de linhas', () => {
    const meta = criarMetadadosBackup({
      databaseVersion: 37,
      tabelas: [{ nome: 'tbl_anotacao', linhas: 2.8 }],
      criadoEm: Date.UTC(2026, 4, 12),
    });

    expect(meta.formato).toBe(BACKUP_PAPIRO_FORMATO);
    expect(meta.tabelas[0]?.linhas).toBe(2);
    expect(validarMetadadosBackup(meta, 37)).toBe(true);
    expect(validarMetadadosBackup(meta, 36)).toBe(false);
  });

  it('gera nome .papiro determinístico', () => {
    expect(nomeArquivoBackup(Date.UTC(2026, 4, 12, 10, 30))).toBe('papiro-2026-05-12T10-30-00-000Z.papiro');
  });
});

