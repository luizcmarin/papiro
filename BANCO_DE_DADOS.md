# Banco de Dados — SQLite + SQLocal (Papiro)

> **Projeto novo** — sem retrocompatibilidade. **Esquema:** [`basedados.json`](./basedados.json) na raiz (**`database.version` 37**). **Persistência:** **SQLocal** (SQLite em **Web Worker** + **OPFS**). **Consultas:** SQL parametrizado (`?`) + tipos em `modules/*/dados/types.ts` — **sem ORM**. **Anti‑padrão:** concatenar input da UI na string SQL.

**Ver também:** [DOCUMENTACAO.md](./DOCUMENTACAO.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)

### Acesso à base (boa prática de arquitetura)

Toda chamada **`sql`/`exec`/`transaction`** passa pela **fábrica** exportada por `infra/db/` (thin wrapper sobre SQLocal). Repositórios em `modules/*/dados/` **importam apenas** esse módulo — nunca inicializam o worker dentro da UI só para uma query avulsa.

---

## PRAGMAS e integridade SQLite (baseline)

Ao subir migrações iniciais, documentar valores fixos quando possível na **primeira** migração (ajustáveis depois segundo perfis de utilização):

```sql
PRAGMA foreign_keys = ON;
-- journal_mode WAL é suportado no ambiente Wasm? validar segundo SQLocal/engine publicado antes de declarar WAL fixo nos docs de deploy
```

Para **restore** pesado partir de cópias externas opcional mais tarde rodar **`PRAGMA integrity_check`** e **`PRAGMA foreign_key_check`** como etapa diagnostics quando `DEBUG` cliente ativo — não obrigatório produção sempre.

---

## Regras gerais

1. Nomes de **tabela** iguais aos do `basedados.json` (ex.: `tbl_anotacao`).
2. Nomes de **coluna** em **snake_case** no SQLite (ex.: `pasta_id`, `data_criacao`).
3. **Datas** no armazenamento: `INTEGER`/`BIGINT` como **epoch em milissegundos** (`number` em TS ao ler/escrever na camada de aplicação — preferir helpers `fromUnixMs` / `toUnixMs` para não misturar `Date` crua no SQL).
4. **Booleanos**: `INTEGER NOT NULL` **0/1** (em TS: `0 | 1` ou `boolean` após conversão explícita na borda do repositório).
5. **PKs manuais** (sem autoincrement): conteúdo fornecido pelo remoto (GitHub) ou pelo domínio (`MeuPerfil` id fixo = 1).
6. Todas as migrações são **aplicadas no cliente** via runner (`_migrations` + ficheiros `.sql` naming `001_xyz.sql`) — inteiro **`version`** monotonicamente **crescente** (inteiro único linha migrações tabela estado) independente cronologia calendário — facilita branching feature flags depois (ver [DOCUMENTACAO.md](./DOCUMENTACAO.md), secção **Migrações**).

7. **Busca textual:** usar **`LIKE`** parametrizado (`%termo%` onde fizer sentido) sobre colunas `TEXT` — adequado enquanto a maioria dos registros for **pequena**. **FTS5** fica apenas em **roadmap** se métricas reais (volume + latência) o exigirem; até lá **não** complicar o esquema com tabelas virtuais FTS.

---

## Listagens e colunas pesadas (“lazy selection”)

**Regra:** em **listagens** e navegação entre muitas linhas, **`SELECT *` é proibido**.

- Para **`tbl_anotacao`**, queries de lista devem projectar **apenas** colunas leves (`id`, `titulo`, `pasta_id`, datas, flags, excerto se existir, etc.) — **nunca** `conteudo` em massa.
- O campo **`conteudo`** (HTML potencialmente **1,1M+** caracteres) só entra num **`SELECT`** dedicado **`WHERE id = ?`** quando o **editor** (ou ecrã de detalhe equivalente) abrir para essa nota.
- O mesmo princípio aplica-se a outros blobs/textos grandes em outras tabelas quando existirem.

---

## Dinâmica de `id`, `id_remoto` e sincronização

### Regra ouro: usar `id_remoto` como indicador de origem

| Cenário                      | `id`                | `id_remoto`            | Origem | Como funciona                                                   |
| :--------------------------- | :------------------ | :--------------------- | :----- | :-------------------------------------------------------------- |
| Conteúdo remoto (PK manual)  | Veio do GitHub      | `NULL` ou igual a `id` | GitHub | Na sync: gravar `id` remoto estável                             |
| Dados locais (autoincrement) | Gerado no SQLite    | `NULL`                 | Local  | Criação pelo utilizador                                         |
| Híbrido (ex.: receitas)      | Autoincrement local | Preenchido após sync   | GitHub | `id_remoto IS NULL` → só local; ≠ `NULL` → rastreável ao remoto |

### Coluna `e_nuvem` (inexistente no modelo)

O soberano **`basedados.json`** **não** define **`e_nuvem`**. Não faz parte do desenho; **não** há caminho de compatibilidade com esquemas que a tivessem.

Semântica única:

- **`id_remoto IS NULL`** → registo **100% local** (ainda sem chave estável no remoto GitHub).
- **`id_remoto IS NOT NULL`** → identidade remota conhecida; **upsert** de sync usa **`id_remoto`** como chave de correspondência com o JSON GitHub (**fonte de verdade** para linhas remotas).

---

## Mapeamento — tabelas ↔ módulos (para repos e `types.ts`)

| Tabela SQLite             | Módulo / responsabilidade | Notas                                                         |
| :------------------------ | :------------------------ | :------------------------------------------------------------ |
| tbl_pasta                 | Anotações                 | —                                                             |
| tbl_anotacao              | Anotações                 | FK `pasta_id` → `SET NULL`                                    |
| tbl_perguntas             | Quiz                      | PK manual                                                     |
| tbl_poesias               | Poesia                    | PK manual; `anteriorId` / `proximoId` nullable                |
| tbl_conquistas            | Quiz                      | PK manual                                                     |
| tbl_vibes                 | Quiz                      | PK manual                                                     |
| tbl_recordes_memoria      | Quiz                      | PK texto `dificuldade`                                        |
| tbl_guias                 | Preparação                | PK manual                                                     |
| tbl_categorias_financeiro | Financeiro                | —                                                             |
| tbl_transacoes            | Financeiro                | —                                                             |
| tbl_meta                  | Metas                     | defaults no esquema                                           |
| tbl_kits_checklist        | Preparação                | `id_remoto`                                                   |
| tbl_itens_checklist       | Preparação                | FK kit `CASCADE`; `id_remoto`                                 |
| tbl_documentos_cofre      | Preparação                | `blob_criptografado` `Uint8Array` / `ArrayBuffer` na borda TS |
| tbl_estoque_alimentos     | Preparação                | —                                                             |
| tbl_sessoes_estudo        | Estudo                    | —                                                             |
| tbl_conquistas_estudo     | Estudo                    | —                                                             |
| tbl_receitas              | Receitas                  | `id_remoto`                                                   |
| tbl_relatorios_ministerio | Ministério                | —                                                             |
| tbl_estudos_biblicos      | Ministério                | —                                                             |
| tbl_meu_perfil            | Perfil + ICE              | PK fixa `id = 1`                                              |

**Índices importantes:** `tbl_anotacao(pasta_id)`, `tbl_itens_checklist(kit_id)` — criar nas migrações iniciais.

---

## Coluna `tbl_anotacao.conteudo` (HTML rich + imagens offline)

Contrato técnico alinhado ao plano mestre (**revisão 2.3**):

- **`conteudo`** é **`TEXT`** (SQLite) guardando um **fragmento HTML** válido conforme política **[TipTap](https://tiptap.dev)** (parágrafos, listas, strong, headings permitidos pela config, …).
- **Imagens incorporadas:** sempre **`<img>`** com **`src`** **`data:image/webp;base64,...`** **ou** **`data:image/svg+xml;base64,...`** (raster → **WebP**; vector → **SVG**); **`alt`** recomendável — sem dependência obrigatória de URLs **`http:`/`https:`** para multimédia da própria nota (**offline‑first autocontido**).
- **Segurança:** **`DOMPurify`** em **`infra/sanitize.ts`** deve ser **espelho fiel** do HTML que o TipTap produz — mesma config na **gravação**, **pré-visualização** e **modo leitura** antes de **`innerHTML`**, para o editor **não** perder tags por sanitização mais restritiva que o motor editorial.
- **Impacto:** notas densas aumentam página SQLite — mitigar com **lazy selection** (**nunca** listar `conteudo` em massa); **FTS5** só no roadmap (**`LIKE`** até lá).

---

## Índices e FK — SQL (referência para migrações)

```sql
-- tbl_anotacao
CREATE INDEX IF NOT EXISTS ix_anotacao_pasta ON tbl_anotacao(pasta_id);
-- FKs conforme basedados.json (SET NULL na pasta quando aplicável)

-- tbl_itens_checklist
CREATE INDEX IF NOT EXISTS ix_itens_kit ON tbl_itens_checklist(kit_id);
```

O DDL versionado em **`infra/db/migrations/`** é regenerado com **`bun run db:gerar-migracoes`** (lê **`basedados.json`**); esta seção fixa invariantes já acordadas além do contrato JSON.

---

## Exemplo TypeScript — tipos de linha (mapeamento 1:1 às colunas)

Nome do **tipo TS** PascalCase (**`PastaRow`**). **Campos TS** repetem **`snake_case`** dos nomes físicos SQLite quando o mapa BD→TS é 1:1. Props `camelCase` apenas se existir **view model** explícita antes da UI — recomendação Papiro: **`snake_case` nos Row types**.

**Listagens:** tipos de linha **sem** colunas pesadas (ex.: **`AnotacaoListaRow`** sem `conteudo`). **Detalhe / editor:** tipo com **`conteudo`** (ex.: **`AnotacaoDetalheRow`**) obtido só pela query **`SELECT ... conteudo ... WHERE id = ?`**.

```ts
// modules/anotacoes/dados/types.ts — exemplos conceituais
export interface PastaRow {
  id: number;
  nome: string;
  icone: string;
  ordem: number;
}

/** Lista / grelha — nunca mapear resultado de SELECT que inclua conteudo em massa */
export interface AnotacaoListaRow {
  id: number;
  pasta_id: number | null;
  titulo: string;
  tipo_modelo: string;
  data_criacao: number;
  data_modificacao: number;
  esta_fixada: number;
  esta_arquivada: number;
  etiquetas: string;
}

/** Só após SELECT explícito por id ao abrir o editor */
export interface AnotacaoDetalheRow extends AnotacaoListaRow {
  conteudo: string;
}
```

**Enum `TipoModelo` em TS** (não coluna especial; interpretação em `tipo_modelo: string`):

```ts
export const TipoModelo = [
  'LIVRE',
  'VIDA_MINISTERIO',
  'DISCURSO_PUBLICO',
  'DESIGNACAO',
  'PASTOREIO',
  'ASSEMBLEIA',
] as const;
export type TipoModelo = (typeof TipoModelo)[number];
```

---

## Conversão temporal (uso na aplicação)

```ts
function fromUnixMs(ms: number): Date {
  return new Date(ms);
}
function nowUnixMs(): number {
  return Date.now();
}
```

Nunca gravar ISO string diretamente se o contrato físico é `INTEGER` epoch ms — normalizar sempre nos repositórios.

---

## Detalhe de colunas

Para o DDL coluna-a-coluna, **fonte única**: [`basedados.json`](./basedados.json) **v37** na raiz. Repositórios e `types.ts` devem **refletir** esse ficheiro.

---

## Documentação relacionada

[DOCUMENTACAO.md](./DOCUMENTACAO.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)
