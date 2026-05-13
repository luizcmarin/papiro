---
name: papiro-spa-agent
description: 'Papiro: SPA TS offline-first (Bun, Vite, router SPA, Web Awesome, SQLocal, TipTap); basedados.json v37; docs na raiz'
visibility: workspace
priority: critical
autoLoad: true
---

# Agente — Papiro (orientação de trabalho)

Este ficheiro existe para **alinhar o assistente** ao que o repositório **é hoje** e a **como colaborar** com o marin: mudanças pequenas e rastreáveis, decisões explícitas, execução real (comandos, leitura de ficheiros), sem inventar caminhos.

**Projeto novo (zero):** **não** há retrocompatibilidade com outras apps, bases SQLite antigas ou stacks anteriores. Não planeies migrações “desde legado”; o único contrato é a documentação na raiz e o **`basedados.json`** (**v37**).

---

## O que é o Papiro

PWA **offline-first** para Testemunhas de Jeová (vida espiritual, ministério, finanças, prontidão, etc.). Implementação-alvo: **SPA em TypeScript** — **Vite**, rotas (**History API** + `app/router.ts` / `app/navegacao/router-spa.ts`), **Web Awesome** (UI + tema), **SQLocal** (SQLite em worker + OPFS), editor **TipTap**, **DOMPurify** centralizado, gráficos **ECharts** onde aplicável.

---

## Fontes de verdade (ler antes de assumir)

| O quê                                    | Onde                                                                                                              |
| :--------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| Visão técnica, stack, fatias, estado     | [`DOCUMENTACAO.md`](./DOCUMENTACAO.md)                                                                            |
| Esquema SQL (JSON de contrato)           | [`basedados.json`](./basedados.json) na **raiz** — `database.version` **37** e `identityHash` no próprio ficheiro |
| Dados, sync, lazy selection, `id_remoto` | [`BANCO_DE_DADOS.md`](./BANCO_DE_DADOS.md)                                                                        |
| Tema e marca (Web Awesome nativo)        | [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)                                                                          |
| Fluxos de produto (UX por módulo)        | [`GUIA_USUARIO.md`](./GUIA_USUARIO.md) — visão geral em [`README.md`](./README.md#sobre-o-produto)               |

Se o código ainda não existir para um ponto descrito na documentação, **não** tratar como já implementado: proponha ou implemente em harmonia com estes documentos.

---

## Como quero que trabalhes comigo

1. **Idioma:** pt-BR em documentação que criares, mensagens de commit quando pedidas, nomes públicos de APIs e UI.
2. **Execução:** preferir **fazer** (ferramentas **Bun**, testes) a listar só instruções para o marin executar.
3. **Âmbito:** alterar só o necessário ao pedido; evitar refactors laterais e ficheiros não pedidos.
4. **Honestidade:** se algo for incerto tecnicamente, diz **explicitamente** e indica como verificar (doc oficial, teste mínimo, leitura de código).
5. **Conflito doc vs código:** em desacordo, **pergunta** ou segue o que o marin acabou de pedir; não silenciosamente sobrescrever decisões.
6. **UI:** sem emojis na interface do produto; ícones **SVG** self-host ou componentes WA, conforme [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

---

## Regras técnicas que não podes ignorar

### Dados e SQLite

- **`id_remoto`:** única identidade de linha vinda do remoto (GitHub JSON). A coluna **`e_nuvem`** **não existe** no modelo — o soberano `basedados.json` v37 não a define.
- **Listagens:** **proibido** `SELECT *` para ecrãs de lista; colunas pesadas (ex.: **`conteudo`** em `tbl_anotacao`) **só** em query por **`id`** ao abrir o editor — ver [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md).
- **Busca:** `LIKE` por omissão; FTS5 só se o plano evoluir para isso.
- **Datas no SQL:** epoch em **milissegundos** (`INTEGER`); na borda TS, conversão explícita, sem gravar ISO string como contrato principal.

### Rich text e segurança

- **`infra/sanitize.ts`:** configuração **espelhada** ao HTML que o **TipTap** produz, para não “partir” o documento entre guardar e reabrir.
- **Imagens inline:** apenas **`data:image/webp`** ou **`data:image/svg+xml`** em Base64, conforme plano.

### UI e tema

- **Web Awesome** para componentes e **tema Claro/Breu nativo** da biblioteca — **sem** camada `@papiro/ui` nem ficheiro global duplicado de tokens (ver [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)).

### Ciclo de vida (SPA)

- Cada rota/página: **`unmount`** com `AbortController`, libertar editores (TipTap), **`dispose()`** de ECharts, e **anular referências** a strings HTML muito grandes.

### Qualidade

- Código entregue **completo** no bloco relevante (não usar comentários do tipo “resto omitido” como substituto de implementação).
- Ao tocar em TypeScript: **`tsc` / build** sem erros; testes (`vitest`, `playwright`) quando existirem no `package.json`.
- Ao adicionar dependências (**`bun add`**, registo npm): **confirmar versão** adequada (documentação ou registry), evitando APIs obsoletas sem migração.

---

## Estrutura-alvo (lembrete)

```
src/
  main.ts
  app/           # router, shell, outlet (mount/unmount)
  infra/         # db (SQLocal), sync, crypto, sanitize.ts, charts
  modules/<nome>/
    aplicacao/
    dados/       # repositorio.ts, types.ts — SQL parametrizado
    ui/
```

Fatias de produto (nomes de pasta): `anotacoes`, `estudo`, `financeiro`, `quiz`, `metas`, `ministerio`, `perfil`, `poesia`, `preparacao`, `receitas`, `soberania` (e outras que o plano listar).

---

## Comandos úteis (ajustar se `package.json` diferir)

```bash
bun install
bun run db:gerar-migracoes   # regenera migrations/*.sql + contrato-bd.gerado.ts a partir de basedados.json
bun run dev
bun run build
bun run test
```

---

## Formato de resposta (quando fizer sentido)

Para alterações não triviais, podes fechar com três blocos curtos: **O que mudou**, **Validação** (como verificaste ou o que falta verificar), **Pendências** (próximo passo humano ou decisão em aberto). Não é obrigatório para perguntas de uma linha.

---

## Documentação do produto (mesmo pacote)

[`DOCUMENTACAO.md`](./DOCUMENTACAO.md) · [`BANCO_DE_DADOS.md`](./BANCO_DE_DADOS.md) · [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) · [`GUIA_USUARIO.md`](./GUIA_USUARIO.md) · [`basedados.json`](./basedados.json)
