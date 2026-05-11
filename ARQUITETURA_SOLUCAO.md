# Arquitetura da Solução — Papiro (Opção 1)

> **Projeto novo** — sem retrocompatibilidade. **Referência técnica** para navegar no código: **SPA Vanilla TypeScript**, **Web Awesome**, **SQLocal**. **Esquema:** [`basedados.json`](./basedados.json) na raiz (**v37**).

**Ver também:** [PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)

---

## Diagrama de dependências (mental)

```
                    ┌─────────────────────────┐
                    │   Vite SPA (entrada)     │  ← index.html, main.ts, router
                    └────────────┬────────────┘
                                 │ monta shell + outlet
           ┌─────────────────────┼─────────────────────┐
           ▼                     ▼                     ▼
  ┌─────────────────┐  ┌──────────────────┐  ┌──────────────────┐
  │ infra/db         │  │ infra/sync        │  │ Web Awesome      │
  │ SQLocal OPFS      │  │ fetch GitHub JSON │  │ (UI + tema nativo)│
  └────────┬─────────┘  └────────┬─────────┘  └──────────────────┘
           │                      │
           └──────────┬───────────┘
                      │ consome contratos /
                      │ chama repos em
                      ▼
           ┌─────────────────────┐
           │ modules/<nome>/      │  ← fatias verticais
           │  aplicacao/          │   casos de uso (funções/coordenação)
           │  dados/               │   SQL + repos (SQLite via SQLocal)
           │  ui/                  │   mount/unmount página, bindings WA
           │  dominio/ (opcional)  │   tipos puros, enums, invariantes
           └─────────────────────┘
```

**Regra de ouro:** regras de negócio puras **sem I/O** em `dominio/` (opcional); orquestração e I/O ficam em `aplicacao/` e `dados/`. Tipos SQLite e scripts SQL **espelham** **`basedados.json`** na raiz (**v37**).

---

## Stack (Opção 1)

| Camada                   | Escolha                                                                                                                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Linguagem                | **TypeScript**                                                                                                                                                                                       |
| Bundler                  | **Vite** (SPA estática)                                                                                                                                                                              |
| Rotas                    | **Page.js**                                                                                                                                                                                          |
| UI base                  | **[Web Awesome](https://github.com/shoelace-style/webawesome)** (Web Components)                                                                                                                     |
| Identidade visual / tema | **Variáveis e theming nativos Web Awesome** (Claro / Breu); **sem** pacote paralelo de tokens                                                                                                        |
| Persistência             | **SQLocal** (SQLite em **Web Worker** + **OPFS**)                                                                                                                                                    |
| ORM                      | **Nenhum** — SQL parametrizado + tipos `.ts` por query/linha                                                                                                                                         |
| Gráficos                 | **Apache ECharts** (import dinâmico onde fizer sentido)                                                                                                                                              |
| Editor anotações         | **TipTap** (Vanilla) + **`@tiptap/extension-image`**                                                                                                                                                 |
| HTML utilizador          | **DOMPurify** centralizado **`infra/sanitize.ts`** — config **espelhada ao output TipTap**; `src` de `<img>` só **`data:image/webp`** ou **`data:image/svg+xml`** em Base64, conforme política única |
| Ícones                   | **SVG Material 3**, self-host sob `public/` ou `assets/icons/`                                                                                                                                       |
| PWA                      | **`vite-plugin-pwa`**                                                                                                                                                                                |
| Testes                   | **Vitest** (lógica) + **Playwright** (fluxos críticos)                                                                                                                                               |
| Scripts / PM (opcional)  | **Bun** só para lifecycle local; bundle continua Vite                                                                                                                                                |

Documentação oficial Web Awesome: [webawesome.com](https://webawesome.com) · Repo: [shoelace-style/webawesome](https://github.com/shoelace-style/webawesome).

---

## Fatias verticais (`src/modules/<nome>/`)

Cada módulo do produto vive em uma pasta autocontida:

```
modules/<nome>/
  aplicacao/        ← listarSalvar… chama dados; sem elemento DOM direto onde possível
  dados/
    repositorio.ts  ← SQL + SQLocal (`?` placeholders; nunca concat SQL com input cru)
    types.ts       ← interfaces de linha (Row) alinhadas às colunas tbl_*
  ui/
    <nome>-page.ts  ← exports mount(container: HTMLElement): void; unmount(): void;
    ...             ← uso de `<wa-*>` + CSS mínimo local quando WA não cobrir (sem camada de tokens global)
```

`infra/sync`, `infra/db/cliente-sqlocal.ts`, shell e router ficam fora das fatias.

### Fachada `infra/db` (recomendado)

Exportar funções **async** de alto nível (`runQuery`, `runTransaction`, `applyMigrations`) que encapsulam SQLocal. **Repositórios** importam isto; **UI** nunca chama SQLocal diretamente — simplifica testes futuros (mock da fachada) e evita espalhar detalhes do worker.

---

## Padrão de página (SPA + Page.js)

Cada feature exporta ciclo de vida explícito para evitar leaks no Vanilla TS:

```ts
// exemplo conceitual
export function mount(container: HTMLElement): void {
  container.innerHTML = `...`; // ou createElement incremental
  // registrar listeners num AbortController por rota
}
export function unmount(): void {
  // abort + limpar refs; anular strings grandes (ex.: HTML de nota) e destruir editores TipTap
}
```

O router central (`src/app/router.ts`) chama `mount`/`unmount` nos handlers Page.js ao trocar de rota.

---

## Padrão de caso de uso (função pura onde couber)

Orquestração típica: validar entrada → chamar repo → disparar evento/UI refresh.

```ts
// exemplo: modules/anotacoes/aplicacao/salvar-anotacao.ts
import type { AnotacaoInput } from '../dados/types';
import * as repo from '../dados/repositorio';

export async function salvarAnotacao(input: AnotacaoInput): Promise<void> {
  // validações
  await repo.insertOrUpdate(input);
}
```

---

## Shell da aplicação

- **`src/app/shell.ts`**: drawer / barra superior (**`<wa-*>`** + tema **Claro/Breu** via API Web Awesome), área de conteúdo **`#outlet-papiro`**.
- **`src/app/menu-rotas.ts`**: itens do menu lateral + caminhos + imports dinâmicos das páginas (fonte única com o router).
- **`src/main.ts`**: inicializar Web Awesome (`setBasePath`/registro conforme doc), inicializar SQLocal antes da primeira navegação com dados.

---

## Sincronização remota (`src/infra/sync/`)

- `fetch` GET para JSON público no **GitHub** (ou hospedagem estática equivalente).
- Upsert via transações SQLite (manual no runner SQLocal quando necessário).
- **`id_remoto`** = **única** chave de identidade para linhas vindas do remoto; **sem** coluna `e_nuvem`; regras completas em **[BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md)**.

---

## Migrações de esquema (cliente)

- **Versão única incrementada pelo app**; tabela interna `_migrations` ou equivalente.
- Ficheiros **`.sql`** versionados sob `infra/db/migrations/` (ou por módulo, consolidados no bootstrap).
- **`bun run db:gerar-migracoes`** (`scripts/gerar-migracao-esquema.mjs`): lê `basedados.json` e reescreve `001_tbl_pasta.sql`, `002_esquema_v37.sql` e `src/infra/db/contrato-bd.gerado.ts` (constantes do smoke). O runtime da app usa os artefactos versionados; o JSON serve de entrada ao regenerar o esquema.
- Não há `drizzle-kit` obrigatório: o pipeline é SQL explícito + execução no worker via SQLocal.

---

## Segurança sensível ao produto

- **Cofre / backup / PIN:** **Web Crypto** no cliente (`crypto.subtle`); wrappers em `infra/crypto/` ou `shared/crypto/`.
- **XSS:** **anotações** — TipTap emite HTML; **`infra/sanitize.ts`** deve **permitir exatamente** o mesmo subconjunto que o editor usa, para ciclos load/editar não “corromperem” o documento. **Imagens:** só **`data:image/webp`** ou **`data:image/svg+xml`** em Base64 (ver [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) § `conteudo` e [PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md)).

### Repositórios e performance (notas grandes)

- **Proibido `SELECT *`** em listagens; colunas pesadas (ex.: `conteudo`) **só** em query por **`id`** ao abrir o editor — ver [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) § lazy selection.

---

## Comandos essenciais

```bash
# desenvolvimento (Bun)
bun install
bun run dev

# produção estática (GitHub Pages)
bun run build
bun run preview

# testes
bun run test          # Vitest (quando existir no package.json)
bun run test:e2e      # Playwright (definir no projeto)
```

Ajustar `base` em `vite.config` para path do GitHub Pages se o app não estiver na raiz do domínio.

---

## Decisões técnicas (Opção 1)

| Decisão         | Alternativa não usada aqui           | Justificativa breve                                                                                |
| :-------------- | :----------------------------------- | :------------------------------------------------------------------------------------------------- |
| **Web Awesome** | outras bibliotecas de Web Components | WA ativo em [webawesome](https://github.com/shoelace-style/webawesome); integra bem com Vanilla TS |
| **SQLocal**     | sql.js só em RAM                     | OPFS + worker alinhados a offline-first relacional forte                                           |
| **Sem ORM**     | ORMs ou query builders pesados       | menos cola; modelo único em [`basedados.json`](./basedados.json)                                   |
| **Vite SPA**    | frameworks com SSR obrigatório       | deploy estático único + PWA simples                                                                |

---

## Ficheiros de configuração críticos (alvo)

| Ficheiro                                             | Função                                        |
| :--------------------------------------------------- | :-------------------------------------------- |
| `vite.config.ts`                                     | aliases, plugins PWA/WASM conforme precisares |
| `src/main.ts`                                        | bootstrap BD + tema + router                  |
| `manifest.webmanifest` / ícones                      | PWA                                           |
| `infra/db/cliente-sqlocal.ts`                        | fábrica da conexão / worker                   |
| [`basedados.json`](./basedados.json)                 | esquema SQLite soberano (**v37**)             |
| [`PLANEJAMENTO_MESTRE.md`](./PLANEJAMENTO_MESTRE.md) | fases e decisões de produto                   |
| [`BANCO_DE_DADOS.md`](./BANCO_DE_DADOS.md)           | regras SQL, sync, lazy selection              |
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)             | marca visual + variáveis Web Awesome          |
| [`AGENTS.md`](./AGENTS.md)                           | orientação para assistentes no repositório    |

---

## Documentação relacionada

[PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)
