# Papiro

PWA **offline-first** (em construção) — **Opção 1**: SPA em **TypeScript** com **Bun**, **Vite**, **Web Awesome**, **SQLocal**, **TipTap**, conforme o plano do repositório.

## Documentação

| Documento                                          | Conteúdo                               |
| :------------------------------------------------- | :------------------------------------- |
| [PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) | Fases, stack, decisões                 |
| [ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md) | Estrutura `src/`, fatias, shell        |
| [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md)           | SQLite, SQLocal, sync, lazy selection  |
| [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)             | Web Awesome, tema Claro/Breu          |
| [AGENTS.md](./AGENTS.md)                           | Orientação para assistentes no repo   |
| [basedados.json](./basedados.json)                 | Esquema relacional soberano (**v37**) |

## Requisitos

- **[Bun](https://bun.sh)** **1.3+** (pin em [`.bun-version`](./.bun-version) e [`package.json`](./package.json) campo `packageManager`)
- O **postinstall** corre com `bun` e copia os ficheiros estáticos do **Web Awesome** para `public/webawesome/` (pasta ignorada no Git; em clone limpo: `bun install`)

Compatibilidade: quem ainda use **npm** pode instalar dependências e correr `npm run …`, mas o fluxo **canónico** do repo é **Bun** (scripts e CI alinhados a isso).

## Comandos

```bash
bun install
bun run dev
```

Qualidade:

```bash
bun run lint
bun run format
```

Testes unitários (**Vitest**, jsdom — domínio puro + `sanitize`, sem worker SQLocal):

```bash
bun run test
```

Build de produção:

```bash
bun run build
bun run preview
```

## Estado atual

- **Fases 0–3** — Núcleo: Vite/Bun/TS; Web Awesome tema nativo; SQLocal + migrações **v37** completas + smoke no arranque; shell, rotas Page.js e menu.
- **Fase 4 (Wave 1)** — **Anotações** (lista filtros lazy, TipTap/DOMPurify, modelos apresentação, i18n EN); **Receitas** (lista lazy CRUD `wa-dialog`); **Configurações** (tema WA, idioma, PIN stub); **`bun run test`** + workflow CI exemplo em `.github/workflows/ci.yml`.
- **Fase 5 (Wave 2)** — **Financeiro**, **Metas** e **Ministério** com CRUD local e gráficos ECharts.
- **Fase 6 (Wave 3)** — **Estudo**, **Preparação** e **Quiz** com páginas reais, timer/controlador de estudo e fluxos locais básicos.
- **Fase 7 (Wave 4)** — **Perfil + ficha ICE**, **Poesia** e **QR Code** offline implementados; rota não encontrada segue como único stub genérico.
- **Fase 8** — **Dashboard** com KPIs leves e gráficos ECharts agregados a partir dos repositórios.
- **Fase 9** — PWA configurado via `vite-plugin-pwa` com manifest e service worker gerados no build.

Próximo marco macro: hardening de produto — Lighthouse/instalação offline em browser real, eventuais ícones PNG maskable e fluxos avançados de backup/PIN.
