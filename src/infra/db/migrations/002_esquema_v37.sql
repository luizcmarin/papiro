-- Gerado por scripts/gerar-migracao-esquema.mjs (não editar manualmente)
-- Contrato: database.version 37
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS `tbl_anotacao` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `pasta_id` INTEGER, `titulo` TEXT NOT NULL, `conteudo` TEXT NOT NULL, `tipo_modelo` TEXT NOT NULL, `data_criacao` INTEGER NOT NULL, `data_modificacao` INTEGER NOT NULL, `esta_fixada` INTEGER NOT NULL, `esta_arquivada` INTEGER NOT NULL, `etiquetas` TEXT NOT NULL, FOREIGN KEY(`pasta_id`) REFERENCES `tbl_pasta`(`id`) ON UPDATE NO ACTION ON DELETE SET NULL );

CREATE TABLE IF NOT EXISTS `tbl_categorias_financeiro` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `nome` TEXT NOT NULL, `icone` TEXT NOT NULL, `hex_cor` TEXT NOT NULL, `limite_mensal` REAL NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_conquistas` (`id` INTEGER NOT NULL, `nome` TEXT, `descricao` TEXT, `meta` INTEGER, `icone` TEXT, `publicar` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE TABLE IF NOT EXISTS `tbl_conquistas_estudo` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `tipo` TEXT NOT NULL, `desbloqueado_em` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_documentos_cofre` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `rotulo` TEXT NOT NULL, `tipo_mime` TEXT NOT NULL, `blob_criptografado` BLOB NOT NULL, `data_criacao` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_estoque_alimentos` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `item` TEXT NOT NULL, `quantidade` INTEGER NOT NULL DEFAULT 1, `peso_unitario` INTEGER NOT NULL, `calorias_por_100g` INTEGER NOT NULL, `data_vencimento` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_estudos_biblicos` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `nome` TEXT NOT NULL, `contato` TEXT NOT NULL, `endereco` TEXT NOT NULL, `zoom_link` TEXT NOT NULL, `publicacao_atual` TEXT NOT NULL, `licao_atual` INTEGER NOT NULL, `dia_semana` TEXT NOT NULL, `horario_minutos` INTEGER NOT NULL, `proximo_estudo_em` INTEGER NOT NULL, `notas` TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_guias` (`id` INTEGER NOT NULL, `titulo` TEXT NOT NULL, `texto` TEXT NOT NULL, `publicar` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE TABLE IF NOT EXISTS `tbl_kits_checklist` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `id_remoto` INTEGER, `nome` TEXT NOT NULL, `icone` TEXT NOT NULL, `publicar` INTEGER NOT NULL, `data_criacao` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_itens_checklist` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `id_remoto` INTEGER, `kit_id` INTEGER NOT NULL, `rotulo` TEXT NOT NULL, `quantidade` TEXT NOT NULL, `esta_marcado` INTEGER NOT NULL, `data_vencimento` INTEGER NOT NULL, `observacoes` TEXT NOT NULL, `publicar` INTEGER NOT NULL, FOREIGN KEY(`kit_id`) REFERENCES `tbl_kits_checklist`(`id`) ON UPDATE NO ACTION ON DELETE CASCADE );

CREATE TABLE IF NOT EXISTS `tbl_meta` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `titulo` TEXT NOT NULL, `item` TEXT NOT NULL, `ativo_id` INTEGER NOT NULL DEFAULT 0, `ativo_nome` TEXT NOT NULL DEFAULT '', `data_meta` INTEGER NOT NULL, `prazo_final` INTEGER NOT NULL, `progresso_atual` REAL NOT NULL, `progresso_alvo` REAL NOT NULL, `esta_concluida` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_meu_perfil` (`id` INTEGER NOT NULL, `nome` TEXT NOT NULL, `telefone` TEXT NOT NULL, `email` TEXT NOT NULL, `link` TEXT NOT NULL, `comentario` TEXT NOT NULL, `nomeSecretario` TEXT NOT NULL, `telefoneSecretario` TEXT NOT NULL, `tipoSanguineo` TEXT NOT NULL, `alergias` TEXT NOT NULL, `medicamentosEmUso` TEXT NOT NULL, `observacoesMedicas` TEXT NOT NULL, `recusaTransfusao` INTEGER NOT NULL, `fracoesAceitas` TEXT NOT NULL, `uriScanDpa` TEXT NOT NULL, `contatoEmergencia` TEXT NOT NULL, `contatoEmergenciaTelefone` TEXT NOT NULL, `nomeColih` TEXT NOT NULL, `telefoneColih` TEXT NOT NULL, `dpaCategoriaAtualizado` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE TABLE IF NOT EXISTS `tbl_perguntas` (`id` INTEGER NOT NULL, `pergunta` TEXT NOT NULL, `referencia` TEXT NOT NULL, `dificuldade` INTEGER NOT NULL, `resposta1` TEXT NOT NULL, `resposta2` TEXT NOT NULL, `resposta3` TEXT NOT NULL, `resposta4` TEXT NOT NULL, `correta` INTEGER NOT NULL, `publicar` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE TABLE IF NOT EXISTS `tbl_poesias` (`id` INTEGER NOT NULL, `titulo` TEXT NOT NULL, `texto` TEXT NOT NULL, `conteudo` TEXT NOT NULL, `anteriorId` INTEGER, `proximoId` INTEGER, `publicar` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE TABLE IF NOT EXISTS `tbl_receitas` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `id_remoto` INTEGER, `titulo` TEXT NOT NULL, `categoria` TEXT NOT NULL, `ingredientes` TEXT NOT NULL, `instrucoes` TEXT NOT NULL, `publicar` INTEGER NOT NULL, `data_criacao` INTEGER NOT NULL, `data_atualizacao` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_recordes_memoria` (`dificuldade` TEXT NOT NULL, `melhorTempoMs` INTEGER NOT NULL, `melhorMovimentos` INTEGER NOT NULL, `partidasConcluidas` INTEGER NOT NULL, `atualizadoEm` INTEGER NOT NULL, PRIMARY KEY(`dificuldade`));

CREATE TABLE IF NOT EXISTS `tbl_relatorios_ministerio` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `mes` INTEGER NOT NULL, `ano` INTEGER NOT NULL, `ano_servico` INTEGER NOT NULL, `horas` REAL NOT NULL, `estudos` INTEGER NOT NULL, `participacao` INTEGER NOT NULL, `tipo_publicador` TEXT NOT NULL, `meta_horas` REAL NOT NULL, `notas_publicacoes` TEXT NOT NULL, `telefone_dirigente` TEXT NOT NULL, `nome_dirigente` TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_sessoes_estudo` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `assunto` TEXT NOT NULL, `tipo_ciclo` TEXT NOT NULL, `duracao_minutos` INTEGER NOT NULL, `concluido_em` INTEGER NOT NULL, `nota_meditacao` TEXT NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_transacoes` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `descricao` TEXT NOT NULL, `valor` REAL NOT NULL, `tipo` INTEGER NOT NULL, `categoria_id` INTEGER NOT NULL, `data_vencimento` INTEGER NOT NULL, `esta_pago` INTEGER NOT NULL, `data_criacao` INTEGER NOT NULL);

CREATE TABLE IF NOT EXISTS `tbl_vibes` (`id` INTEGER NOT NULL, `texto` TEXT, `animacao` TEXT, `publicar` INTEGER NOT NULL, PRIMARY KEY(`id`));

CREATE INDEX IF NOT EXISTS `index_tbl_anotacao_pasta_id` ON `tbl_anotacao` (`pasta_id`);

CREATE INDEX IF NOT EXISTS `index_tbl_itens_checklist_kit_id` ON `tbl_itens_checklist` (`kit_id`);
