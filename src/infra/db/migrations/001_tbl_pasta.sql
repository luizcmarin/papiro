-- Gerado por scripts/gerar-migracao-esquema.mjs (não editar manualmente)
-- Contrato: database.version 37
CREATE TABLE IF NOT EXISTS `tbl_pasta` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `nome` TEXT NOT NULL, `icone` TEXT NOT NULL, `ordem` INTEGER NOT NULL);
