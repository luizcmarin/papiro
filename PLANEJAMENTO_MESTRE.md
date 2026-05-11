# Papiro — Plano mestre de execução (Opção 1: SPA Vanilla TS + Web Awesome)

> **Projeto novo** — sem retrocompatibilidade com stacks ou produtos anteriores. **Esquema relacional:** [`basedados.json`](./basedados.json) na raiz do repositório (**`database.version` 37**).

> **Versão do plano** **2.0** (revisão **2.3**): Web Awesome como única camada de tema; lazy selection de `conteudo`; WebP/SVG em `data:`; teardown de memória no `unmount`; busca com `LIKE` até eventual FTS5; sincronização só com **`id_remoto`** (sem **`e_nuvem`**).

**Ver também:** [ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)

---

## Índice

1. [Visão geral do produto](#1-visão-geral-do-produto)
2. [Decisões arquiteturais](#2-decisões-arquiteturais)
3. [Stack tecnológica](#3-stack-tecnológica)
4. [Estrutura do repositório](#4-estrutura-do-repositório)
5. [Fase 0 — Bootstrap](#fase-0--bootstrap-e-infraestrutura)
6. [Fase 1 — Design system](#fase-1--design-system-e-tema-papiro)
7. [Fase 2 — Dados (SQLocal)](#fase-2--camada-de-dados-sqlocal-sqlite-opfs)
8. [Fase 3 — Núcleo e navegação](#fase-3--núcleo-e-navegação)
9. [Fase 4 — Wave 1](#fase-4--wave-1-fundação-anotações-receitas-configurações)
10. [Fase 5 — Wave 2](#fase-5--wave-2-analíticos-financeiro-metas-ministério)
11. [Fase 6 — Wave 3](#fase-6--wave-3-domínio-denso-estudo-preparação-quiz)
12. [Fase 7 — Wave 4](#fase-7--wave-4-complementares-perfil-poesia-soberania)
13. [Fase 8 — Dashboard](#fase-8--dashboard-e-kpis)
14. [Fase 9 — PWA e hardening](#fase-9--pwa-segurança-e-hardening)
15. [CI/CD e deploy](#cicd-e-deploy)
16. [Definition of Done](#definition-of-done-por-fatia)
17. [Cronograma executivo](#cronograma-executivo)

---

## 1. Visão geral do produto

_(Inalterada em produto.)_  
O **Papiro** é um santuário digital para Testemunhas de Jeová: vida espiritual, ministério, finanças, prontidão — **offline-first**, **instalável** como **PWA**, **sem loja obrigatória**.

Tabela de módulos ↔ tabelas: ver [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md).

---

## 2. Decisões arquiteturais

### 2.1 Por que SPA estática em TypeScript no navegador

- Um único **`dist/`** HTTPS serve em **GitHub Pages** ou qualquer host estático.
- **SQLocal** proporciona SQLite real em **Web Worker** + **OPFS**, com comportamento próximo ao nativo offline.
- **Web Awesome** cobre comportamento/aspecto de controles como **Custom Elements**.
- **`vite-plugin-pwa`** garante segunda visita/offline estável quando configurado para cachear Wasm/JS/fonts.

### 2.2 Fatias verticais (`src/modules/<nome>/`)

Cada pasta contém **`aplicacao/`**, **`dados/`**, **`ui/`** (opcional **`dominio/`** para tipos/regras puras).

### 2.3 Nomenclatura (pt‑BR obrigatório — TypeScript)

| Padrão          | Exemplo                                             |
| :-------------- | :-------------------------------------------------- |
| Página montável | `anotacoes-page.ts`                                 |
| Caso de uso     | `salvar-anotacao.ts`                                |
| Repositório     | `repositorio.ts`                                    |
| Tipos de linhas | `types.ts`                                          |
| Rotas           | strings em **`router.ts`** documentadas lado a lado |

### 2.4 Boas práticas para Vanilla TS + Worker de BD

- **Um só portão ao SQLite:** apenas `infra/db/` fala com **SQLocal** (fábrica + migrações + helpers). **`modules/*/dados/repositorio.ts`** importam essa superfície, **não** sobem instâncias soltas a partir da UI.
- **`mount`/`unmount` obrigatórios por rota:** `AbortController` para listeners; remover intervalos/requestAnimationFrame; **fechar** `<wa-dialog>` / overlays ao sair da página; **anular referências a strings grandes** (ex.: HTML de notas **1,1M+** caracteres, buffers temporários) no `unmount` para não reter megabytes na heap entre navegações longas.
- **HTML com conteúdo do utilizador (anotações, receitas):** **`DOMPurify`** em **`infra/sanitize.ts`** deve ser **espelho fiel** do subconjunto de tags/atributos que o **TipTap** efetivamente emite (evitar sanitização “agressiva” que remova HTML que o editor precisa recarregar). Em **`<img src>`**, permitir apenas **`data:image/webp;base64,...`** ou **`data:image/svg+xml;base64,...`**. **Renderização** (`innerHTML`/equivalente) só após sanitizar; repetir sanitização antes de gravar quando houver pipelines de paste que possam introduzir lixo HTML.
- **`innerHTML`: uso mínimo** em shell estático OK; páginas com dados → preferir **`createElement` / templates clonados**.
- **`fetch` de sync GitHub:** tratar erro de rede/offline como estado explícito; jobs **idempotentes** (**INSERT OR REPLACE** / **UPSERT**) para não duplicar conteúdo remoto quando o utilizador repetir sync. **`id_remoto`** é a **única fonte de verdade** da identidade remota; **não** usar coluna `e_nuvem` — derivar “local vs sincronizado” de `id_remoto IS NULL` / `IS NOT NULL` (ver [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md)).
- **PWA atualizado:** usar estratégia do `vite-plugin-pwa` que evita servir código velho quando as **migrações** de esquema mudarem (mensagem “atualização disponível” + reload controlado antes de migrações destrutivas).

### 2.5 O que o alvo SPA **não** inclui

- **Runtime .NET / CLR no browser** — apenas **TypeScript** e APIs Web.
- **Ponte nativa tipo JSInterop** — não aplicável; integrações via APIs do browser ou SQLocal conforme documentação.
- **Estado reativo de framework server-side** — preferir re-render dirigido (**mostrar/ocultar nós**) ou estado explícito por página no `*-page.ts`.
- **CDN em caminho crítico offline** (ex.: fontes remotas em produção) — apenas **bundles** ou **`public/`**.
- **ORM ou ferramentas só servidor** — esquema em **`basedados.json`** + **ficheiros `.sql`** versionados aplicados no cliente (**SQLocal**).

---

## 3. Stack tecnológica

### 3.1 Núcleo

| Área                               | Tecnologia                                                                                                                                |
| :--------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| Linguagem                          | **TypeScript**                                                                                                                            |
| Bundler                            | **Vite**                                                                                                                                  |
| Rotas                              | **Page.js**                                                                                                                               |
| Persistência relacional no cliente | [**SQLocal**](https://sqlocal.dev/)                                                                                                       |
| Queries                            | SQL **sem ORM**                                                                                                                           |
| Editor rich (anotações)            | **[TipTap](https://tiptap.dev)** (`@tiptap/core`, `starter-kit`, `extension-image`, … apenas o necessário)                                |
| Sanitização HTML utilizador        | **[DOMPurify](https://github.com/cure53/DOMPurify)** configurado na borda (**gravar quando útil**, **renderizar sempre** listas/leituras) |
| Ícones                             | **SVG Material** self-host                                                                                                                |
| Gráficos                           | **Apache ECharts**                                                                                                                        |
| Componentes UI                     | [**Web Awesome**](https://webawesome.com)                                                                                                 |
| Tema claro / Breu                  | **Nativo Web Awesome** (variáveis e API de tema da lib; sem camada paralela de tokens)                                                    |
| PWA                                | **`vite-plugin-pwa`**                                                                                                                     |
| Testes                             | **Vitest** + **Playwright**                                                                                                               |
| Gestor / runtime local             | **Bun** (`bun install`, `bun run …`)                                                                                                        |

Dependências (registo **npm** consumidas com **Bun**): sempre **consultar versões atuais** ao editar `package.json` / lockfile (bloqueios de segurança e breaking changes mudam rápido).

### 3.2 Segurança

Cofre PIN backup: **Web Crypto** (`crypto.subtle`) encapsulado em `infra/crypto/`.  
Pânico total: remover ficheiros OPFS / reset base via API SQLocal conforme estratégia escolhida + `localStorage.clear()`.

**Nota hospedagem:** deploy final serve via **HTTPS** (GitHub Pages OK). Alguns cenários Wasm/FS exigem atenção aos **headers**/`COOP`-`COEP` conforme navegadores alvo — validar sempre com a documentação atual do SQLocal antes de declarar compatibilidade com um browser concreto.

---

## 4. Estrutura do repositório (alvo)

```text
src/
  main.ts
  app/
    router.ts         # Page.js registra todas as rotas + dynamic import opcional por módulo
    shell.ts          # Drawer / top bar WA + outlet
    outlet.ts        # montagem/desmontagem
  infra/
    db/               # cliente SQLocal + migrations *.sql aplicadas incrementalmente
    sync/             # fetch GitHub JSON
    crypto/           # cofre PIN backup
    charts/           # tema ECharts alinhado às variáveis WA (opcional)
    sanitize.ts       # DOMPurify espelhado ao output TipTap (gravar/renderizar)
  ui/                 # opcional: apenas assets compartilhados (ex. ícones), sem pacote de tokens
    icons/m3/         # SVG nomeados symbolic
  modules/
    <nome>/
      aplicacao/
      dados/
      ui/

public/
  manifest.webmanifest
  fonts/

tests/
  ...
```

---

## Fase 0 — Bootstrap e infraestrutura

**Objetivo:** `bun install`, TS strict opcional gradual, primeira rota `"Hello Papiro"`.

- [x] `vite` scaffold TypeScript SPA
- [x] ESLint / Prettier (opcional)
- [x] `README` atualizado para Opção 1

---

## Fase 1 — Design system e tema Papiro

- [x] Instalar/registrar Web Awesome segundo doc **webawesome.com**
- [x] Tema **Claro** / **Breu** só via **engine Shoelace/Web Awesome** (sem ficheiro dedicado de tokens `--papiro-*` nem “ponte” entre sistemas)
- [x] Fontes offline (Inter, Playfair) — pacotes **@fontsource-variable** resolvidos pelo Vite (woff2 no bundle; equivalente a self-host)
- [x] Ícones SVG estrutura mínima navegação lateral (`public/icons/m3/`)

---

## Fase 2 — Camada de dados (SQLocal + SQLite OPFS)

- [x] **`infra/db/cliente-sqlocal.ts`**: garantir inicialização antes do primeiro uso de dados persistidos.
- [x] Migrações: pasta `infra/db/migrations/` + aplicador cliente + `_migrations` (scripts multi-instrução por `;` + quebra de linha)
- [x] Esquema 100 % das **21** tabelas `tbl_*` + índices do contrato (`id_remoto` onde definido; sem **`e_nuvem`**): ficheiros `001_tbl_pasta.sql` + `002_esquema_v37.sql` **regeneráveis** com **`bun run db:gerar-migracoes`** (`scripts/gerar-migracao-esquema.mjs` lê `basedados.json` e grava também `src/infra/db/contrato-bd.gerado.ts` para o smoke). O bundle em runtime usa só `.sql` + TS gerado — não depende dos `.md` nem do JSON no deploy.
- [x] **Lazy selection:** padrão em `modules/anotacoes/dados/repositorio.ts` — listagem **sem** `conteudo`; detalhe **`WHERE id = ?`** com `conteudo`; smoke no arranque (`bootstrap.ts`). Outros módulos: repetir o padrão ao implementar listas (ex.: `tbl_poesias.conteudo`).
- [x] Prova smoke: `tbl_pasta` + contagem de tabelas (constante gerada) + ciclo INSERT/lista/detalhe/DELETE em `tbl_anotacao`

---

## Fase 3 — Núcleo e navegação

**Objetivo:** shell + menu + rotas SPA + tema switch.

- [x] **Page.js** (`page`): rotas com History API, `page.base` alinhado a `import.meta.env.BASE_URL` (GitHub Pages).
- [x] **`app/router.ts`** + **`app/outlet.ts`**: troca de página com `unmount`/`mount` e serialização de navegação.
- [x] **`app/menu-rotas.ts`** + **`app/shell.ts`**: menu lateral completo (ícones `public/icons/m3/`), drawer fecha ao navegar.
- [x] **Páginas stub** em `app/paginas/*-page.ts` (import dinâmico) até as waves de domínio.
- [x] **Tema Claro/Breu** (Web Awesome) mantido no arranque.

Implementação sugere **`wa-drawer` / navegação** + **`<wa-dialog>`** ICE rápido (sem PIN quando perfil permite emergência médica rápido) — **`<wa-dialog>`** na Wave 4 (perfil) quando fizer sentido.

**Menu lateral (nome + glyph SVG sugerido, ver `DESIGN_SYSTEM.md`):**

- Dashboard (`dashboard`)
- Anotações (`note_alt`)
- Estudo (`school`)
- Ministério (`groups`)
- Financeiro (`account_balance_wallet`)
- Metas (`target`)
- Receitas (`restaurant_menu`)
- Preparação (`emergency`)
- Quiz (`quiz`)
- Poesia (`auto_stories`)
- Perfil + Ficha ICE (`person`)
- QR Code (`qr_code_2`)
- Configurações (`settings`)

Nomes ilustrativos de ficheiro: `dashboard-page.ts`, `anotacoes-page.ts`.

### Editor de anotações (decisão fechada — Wave 1)

- **Motor:** **[TipTap](https://tiptap.dev)** em **Vanilla TS** (instalação [vanilla-js](https://tiptap.dev/docs/editor/getting-started/install/vanilla-javascript)): `@tiptap/core`, `@tiptap/pm`, **`@tiptap/starter-kit`**, **`@tiptap/extension-image`**, mais extensões **só** se necessário (Link, underline, etc.).
- **Persistência:** coluna **`conteudo`** de `tbl_anotacao` guarda **fragmento HTML** serializado pelo editor (semantic tags permitidas pela config TipTap).
- **Imagens — formato acordado:** inline **`data:image/webp;base64,...`** ou **`data:image/svg+xml;base64,...`** no `src` do `<img>` (converter raster para **WebP**; **SVG** como vector aceite; **não** outros `data:image/*` em Base64). Documento autocontido, ideal offline e para backup/export JSON.
- **Segurança:** **`DOMPurify`** com config **centralizada** (`infra/sanitize.ts`) **alinhada 1:1 ao output TipTap** (**incl. `img[src]`** apenas os esquemas `data:` acima, **`alt`** recomendável); banir handlers (`onclick`, etc.) e `data:` não previstos.

**Opcional UX:** definir limite mole de **KB/MB por nota** ou compressão adicional antes de base64 quando testes indicarem lentidão em listas grandes.

---

## Fase 4 — Wave 1: Fundação

### Anotações

Páginas alvo Vanilla: `lista-anotacoes-page.ts`, `editor-anotacao-page.ts`, dialogs inline ou `dialog` WA.

Componente editor sugerido: `modules/anotacoes/ui/tiptap-editor.ts` (fabrica/desmonta `Editor`, expõe `getHtml()`/`setHtml()` sanitizado aos limites combinados).

Mesmas regras funcionais de produto que antes (filtros, templates, modo apresentação scroll). Modo **apresentação**/leitura: render só HTML sanitizado (**não** reciclar `innerHTML` cru da BD).

**Checklist técnico Wave 1 — anotações**

- [x] TipTap registado + teardown no `unmount()` da página (destruir editor **e** limpar refs a HTML grande)
- [x] Inserção imagem: **WebP** ou **SVG** → `data:image/webp;base64,...` / `data:image/svg+xml;base64,...`
- [x] `DOMPurify` antes de qualquer pré-visualização fora do editor (mesma política que gravação/reload no editor) — **`infra/sanitize.ts`**, `fabricarTipTapEditor` + modo apresentação
- [x] Filtros de lista (título, etiquetas por `LIKE`, modelo/pasta, arquivadas) + meta modelo/etiquetas na linha
- [x] i18n Wave 1: `textos-anotacao` / locale + modelo com rótulos EN; shell escuta `papiro:locale-atualizado` após guardar idioma em Configurações
- [x] `registarAoLocaleAtualizado`: lista/detalhe anotações e receitas, editor de nota e formulário de receita atualizam rótulos e listas ao mudar idioma sem sair da rota

### Receitas

`receitas-lista-page.ts`, `receita-detalhe-page.ts`, diálogo form.

### Configurações

`config-page.ts` tema + idioma opcional PIN backup stub.

- [x] **Receitas:** listagem lazy (sem `ingredientes`/`instrucoes` em lista), formulário novo/editar, apagar (`wa-dialog` na lista)
- [x] **Config:** tema (Web Awesome **Claro/Breu**), idioma (`localStorage` + `document.documentElement.lang`), campo PIN **desabilitado** (stub)

**Fecho Fase 4 (Wave 1) — Definition of Done operacional**

- [x] **Vitest:** `bun run test` — `modelos-nota`, sanitize (`infra/sanitize.ts` em jsdom), textos stubs partilhados (`src/**/*.test.ts`)
- [x] **CI de referência:** `.github/workflows/ci.yml` (`lint` + `build` + `test` com Bun 1.3.13)
- [x] **Textos UI:** equivalente ao DoD `strings.ts` via `modules/*/ui/textos-*.ts` e `modules/shared/ui/textos-paginas-stub.ts` (chaves estáveis, PT + EN onde Wave 1 aplica)

---

## Fase 5 — Wave 2: Analíticos

**Gráficos:** **ECharts** com tema definido — ver [DESIGN_SYSTEM.md §8](./DESIGN_SYSTEM.md).

---

## Fase 6 — Wave 3

**Timer Pomodoro:** preferir máquina de estados em **um controller** único (`estudo/timer-controller.ts`). Em UI, atualizar apenas o display com **`requestAnimationFrame`** ou `setInterval` em **tick longo** (ex.: 250–500 ms) se suficiente — evita trabalho em excesso quando o modo **background**/aba suspensa faz `rAF` adormecer; documentar comportamento esperado no mobile.

**Cofre docs:** wrappers TypeScript chamando funções **`infra/crypto`** (apenas APIs Web; sem ponte nativa para runtime externo).

Quiz timer desafio: idem Vanilla.

---

## Fase 7 — Wave 4

**QR code:** usar lib JS pura (ex.: pacote **`qrcode`**) — bundlada pelo Vite, **offline**.  
Backup JSON: ler linhas SQLite via repos → stringify → gzip → AES → download via `blob`/`URL`.

**Pânico total:** encerrada **explicitamente**: apagar **ficheiros** OPFS + correr migrações iniciais de novo OU recriar ficheiro vazio segundo API SQLocal; **sempre** `localStorage`/`indexedDB` limpos em conjunto. Testar primeiro em **perfil novo** antes de automatizar Lighthouse.

---

## Fase 8 — Dashboard

KPI igual matriz antes; apenas substitução visual **gauge/donuts** por instâncias ECharts.

---

## Fase 9 — PWA, segurança e hardening

`manifest`: caminho agora típico `public/manifest.webmanifest`.  
**Targets Lighthouse** permanecem metas (>95 PWA, >85 Perf) — quando pipeline existir rodar Lighthouse CI ou manual.

_(Modo seguro marcado IGNORE continua postponed.)_

---

## Apêndice — Riscos e dependências da stack escolhida

- **`page` / Page.js:** confirmar estado de manutenção no momento do freeze de versões; existe caminho **B** minimalista (**History API + mapa de rotas próprio**) se o pacote ficar abandonado (**Navigo**, etc.).
- **SQLite Wasm / OPFS:** políticas de ciclo de vida variam entre browser — manter **lista de browsers suportados** testada com Playwright onde possível.

---

## CI/CD e deploy

Workflow GitHub Actions recomendável:

```yaml
# resumo conceptual (Bun no CI)
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v2
        with: { bun-version: '1.3.13' }
      - run: bun install --frozen-lockfile
      - run: bun run build
      - uses: peaceiris/actions-gh-pages@v4 # ou upload artifact Pages moderno
```

**Comandos locais (Bun)**

```bash
bun install
bun run dev
bun run build
bun run preview
```

`base:` em `vite.config.ts` igual **subpath GH Pages**.

---

## Definition of Done por fatia

1. **`tsc`/build sem erros configurados no CI**
2. **Vitest** quando há **lógica pura domínio** (sem BD); cenários CRUD marcantes quando existir **Playwright** (ou ferramenta e2e escolhida)
3. CRUD válido navegador
4. Dados reaparecem após refresh (OPFS vivo)
5. Modo rede off após warmup PWA OK
6. Layout 375 px & 1440 px sane
7. Tema Breu/claro usando **somente** o theming nativo **Web Awesome** (variáveis da lib); sem ficheiro paralelo de tokens
8. **Textos:** em `modules/<nome>/ui/textos-*.ts` / `strings.ts` (ou `modules/shared/ui/textos-paginas-stub.ts` para placeholders do menu) — chaves estáveis; evitar literals CRUD/UI soltas para facilitar a11y e i18n
9. Nenhuma cor/tamanho crú **fora** das variáveis/contratos WA (ou utilitários mínimos documentados no [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md))
10. Acessível (labels, chips DPA pulsantes `role="alert"` etc.)

---

## Cronograma executivo

**(Ordem macro semanal sugerida; ajustar esforços reais depois dos spikes das Fases 0–2.)**

| Semana | Fases   | Meta                               |
| :----- | :------ | :--------------------------------- |
| 1      | 0‑1     | Vite+PWA scaffold; WA tema nativo  |
| 2      | 2‑3     | BD vivo; shell rotas ICE           |
| 3‑4    | 4 Wave1 | Anotações Receitas Config          |
| 5‑6    | 5 Wave2 | Financeiro Metas Ministério charts |
| 7‑8    | 6 Wave3 | Estudo Prontidão Quiz              |
| 9      | 7 Wave4 | Perfil Poesia backup sync          |
| 10     | 8       | Dashboard                          |
| 11‑12  | 9       | PWA segurança performance          |

---

## Adendo 2.3 (incorporado no plano e na documentação da raiz)

As decisões abaixo estão **aplicadas** nas seções deste ficheiro e em [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md), [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md), [ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md), [AGENTS.md](./AGENTS.md):

| Tema            | Decisão                                                                                                                              |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| Design system   | Sem **`@papiro/ui`** nem ficheiro dedicado de tokens; **variáveis Web Awesome** + tema **Claro/Breu** nativo da lib                  |
| Notas grandes   | **`SELECT *` proibido** em listagens; **`conteudo`** só por **`id`** ao abrir o editor; teardown de strings grandes no **`unmount`** |
| Imagens no HTML | Base64 apenas **`data:image/webp`** ou **`data:image/svg+xml`**                                                                      |
| Sanitização     | **`infra/sanitize.ts`** espelha fielmente o **TipTap**                                                                               |
| Busca           | **`LIKE`** por omissão; **FTS5** apenas roadmap quando volume o justificar                                                           |
| Sync            | **`id_remoto`** como verdade remota; **sem `e_nuvem`**                                                                               |

---

## Documentação relacionada

[ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)

---
