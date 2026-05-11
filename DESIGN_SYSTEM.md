# Design System Papiro — Vanilla TS + Web Awesome

> **Projeto novo** — sem retrocompatibilidade. **Componentes e tema:** [Web Awesome](https://webawesome.com) (`<wa-*>`) — variáveis CSS e modo Claro/Breu consumidos **diretamente** da lib (**Shoelace/Web Awesome**), **sem** ficheiro dedicado de tokens paralelos nem pacote tipo `@papiro/ui`.

**Ver também:** [PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) · [ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)

Guia de identidade visual e composição de UI (**Opção 1**). Stack: **Vite**, **TypeScript**, ícones **SVG** (Material Symbols / M3) **self-host**.

---

## Filosofia Visual

O Papiro é um **Santuário Digital** — não um app utilitário comum. A linguagem visual transmite:

- **Paz:** espaçamentos generosos, animações suaves.
- **Ordem:** grade consistente, hierarquia tipográfica clara.
- **Foco:** minimalismo com propósito.
- **Elegância:** assimetria orgânica nos raios de cartões, mantendo uma voz tipográfica única com **Inter**.
- **Profundidade:** modo **Breu** (azul‑marinho profundo, não preto puro), hoje expresso **só** via **tema / color scheme** suportado pelo Web Awesome (sem “ponte” para outro sistema de tokens).

---

## 1. Integração Web Awesome (única camada de tokens)

| Camada              | Responsabilidade                                                                                                                                                                                                                                      |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Web Awesome**     | Comportamento, slots, acessibilidade dos `wa-*`; **variáveis CSS** oficiais da lib; **alternância Claro / Breu** via API e theming **nativos** documentados em [webawesome.com](https://webawesome.com)                                               |
| **Modules + shell** | Compõem markup com `<wa-*>`; **não** introduzem paleta paralela (`--papiro-*` em ficheiro global); qualquer CSS **mínimo** de aplicação (ex.: fontes, `.ProseMirror`) limita-se a **herdar** variáveis WA ou tipografia, sem duplicar escala de cores |

Registrar Web Awesome conforme a documentação oficial (ex.: `setBasePath` para assets servidos pelo Vite/PWA).

**Regra:** cores e superfícies vêm das **custom properties** expostas pelo Web Awesome na versão em uso; consultar sempre a doc da versão pinada no `package.json`.

---

## 2. Paleta de marca (referência — aplicar no tema WA)

Os valores abaixo são **guia de produto** para configurar **uma vez** o design token / color scheme do Web Awesome (ou equivalente suportado pela lib). **Em runtime** o código lê **só** as variáveis WA resultantes — não mantém folha própria de tokens duplicada.

### Breu (escuro — principal)

| Uso                           | Hex referência |
| :---------------------------- | :------------- |
| Fundo da aplicação            | `#0B0F15`      |
| Superfície de cards / sidebar | `#131820`      |
| Elevado (dropdowns, tooltips) | `#1C2330`      |
| Bordas / divisores            | `#252E3E`      |
| Hover de cartões              | `#2E3A4F`      |

### Accent (Neon Papiro)

| Uso                                   | Hex referência |
| :------------------------------------ | :------------- |
| Accent                                | `#4FC3F7`      |
| Accent suave                          | `#1E3A5F`      |
| Texto sobre accent (quando aplicável) | `#000000`      |

### Semânticas

| Uso                               | Hex referência        |
| :-------------------------------- | :-------------------- |
| Positivo / suave                  | `#66BB6A` / `#1A3D1E` |
| Aviso / suave                     | `#FFA726` / `#3D2800` |
| Perigo / suave (DPA / destrutivo) | `#EF5350` / `#3D1010` |
| Destaque / suave                  | `#AB47BC` / `#2A1035` |

### Claro (diurno)

| Uso            | Hex referência |
| :------------- | :------------- |
| Fundo          | `#F5F7FA`      |
| Superfície     | `#FFFFFF`      |
| Primário ações | `#1565C0`      |
| Texto          | `#1A2332`      |

---

## 3. Tipografia

```css
/* Exemplo: faces globais num CSS mínimo do shell (sem pacote de tokens paralelo) */
:root {
  --fonte-sans: 'Inter', system-ui, sans-serif;
}
```

**Offline:** self-host de **Inter** em `public/fonts/` com `@font-face` no **CSS do shell** (ou entrada Vite) — **não** depender de Google Fonts em produção offline.

---

## 4. Espaçamento e ritmo

Preferir **raios, espaçamentos e tipografia** documentados pelo **Web Awesome** para consistência com `<wa-*>`.

Manter **48px mínimo** em toques críticos (alvo de produto; implementar com unidades relativas / tokens WA quando existirem).

---

## 5. Formas (raios assimétricos — identidade Papiro)

Quando um componente WA não expuser raio assimétrico, é aceitável um **CSS mínimo de marca** co-localizado (ex.: `app/shell.css`) com **poucas** classes utilitárias — **sem** criar segunda hierarquia de cores.

| Classe / token local mínimo | `border-radius`                                       | Uso             |
| :-------------------------- | :---------------------------------------------------- | :-------------- |
| `.papiro-surface` (exemplo) | `24px 8px 24px 8px`                                   | cards dashboard |
| Raios de botão FAB          | conforme WA `button` + override pontual se necessário | CTA / FAB       |

Wrapper típico sobre cartões WA:

```css
/* Exemplo: fundo = variável WA da vossa versão pinada (consultar doc Web Awesome). */
.papiro-surface {
  background: var(--token-superficie-wa-aqui);
  border-radius: 24px 8px 24px 8px;
}
```

---

## 6. Elevação e animação

### Sombras e movimento

- Preferir **tokens de elevação / motion** do Web Awesome quando disponíveis.
- Animações de produto (**`papiro-fade-in`**, **`papiro-pulso-perigo`** chip DPA, **`papiro-glow`**, **`papiro-scroll-auto`** modo apresentação) podem viver num **único** ficheiro opcional `app/animations.css` importado pelo shell — **sem** duplicar escala de cores.

Sempre cascatear **`@media (prefers-reduced-motion: reduce)`** reduzindo durações a ~`0.01ms` efetivo ou removendo animações decorativas.

---

## 7. Ícones — **SVG Material / M3 (self-host)**

**Não usar CDN** de font-variable em modo offline de referência. Estratégia:

- Guardar **SVG** por nome (`search.svg`, `note_alt.svg`) em `assets/icons/m3/` ou `public/`.
- Em TS, importar URL via Vite **`import svgUrl from '../../icons/note_alt.svg?url'`** ou inline `<svg>...</svg>` se tree-shaken.

```html
<span class="papiro-icon" aria-hidden="true">
  <!-- svg importado ou sprite -->
</span>
```

**Catálogo de nomes:** **nome do ficheiro = nome do símbolo** (`note_alt.svg`).

Ícones com significado só visual: **`aria-hidden="true"`** se houver texto adjacente; caso contrário **`aria-label`**.

---

## 8. Gráficos — **Apache ECharts** (alinhado ao tema WA)

**ECharts** em Vanilla TS (**import dinâmico** `echarts/core` + só os charts necessários).

### Cores nos gráficos

Ler **cores efetivas** das **custom properties** do Web Awesome no `document.documentElement` (ou contêiner temático) no momento da criação do chart, para **não** hardcodar hex em TS.

### Tipos por módulo (espelho funcional Apex/Mud Charts)

| Módulo                   | Tipo ECharts sugerido                 |
| :----------------------- | :------------------------------------ |
| Dashboard KPI metas      | `gauge` / `pie` (donut progress)      |
| Conhecimento (quiz)      | `pie` donut                           |
| Estudo espark            | `line` área compacta                  |
| Ministério horas vs meta | `gauge` ou `pie` progress             |
| Financeiro mensal        | `bar` agrupadas receita/despesa       |
| Financeiro categorias    | `pie`                                 |
| Histórico saldo          | `line` área                           |
| Ministério anual barras  | `bar`                                 |
| Progresso ano            | `line`                                |
| Metas                    | donut/gauge por meta ou barra stacked |
| Estudo histórico         | `heatmap` (matrix dias)               |

Encapsular criação em `infra/charts/` ou `modules/<x>/ui/echarts-theme.ts`.

**Gestão memória SPA:** sempre **`chart.dispose()`** no `unmount()` da página que criou a instância — evita leak WebGL/canvas frequente em apps Vanilla com Page.js.

**Bundle:** importar **só** gráficos necessários (`echarts/core` + componentes register).

---

## 9. Padrões compostos (Vanilla + WA — sem pacote UI próprio)

Padrões de produto implementam-se como **factories TS** + markup **`<wa-*>`** + classes mínimas locais:

| Papiro                 | Contrato Vanilla (exemplo)                                                        |
| :--------------------- | :-------------------------------------------------------------------------------- |
| **Cartão**             | `mountPapiroCard(opts)` envolvendo `wa-card` ou elemento semântico WA equivalente |
| **KPI circular**       | ECharts donut/gauge dentro de contêiner WA                                        |
| **Barra progresso**    | `<wa-progress-bar>` (ou equivalente WA)                                           |
| **Campo busca**        | `<wa-input>` + debounce TS `300ms` + ícone svg                                    |
| **Dialog confirmação** | `<wa-dialog>` slots + foco inicial no cancelar quando destrutivo                  |
| **Empty state**        | layout centrado com tipografia WA                                                 |
| **Chip filtro**        | `<wa-button>` pill / variante WA documentada                                      |
| **FAB**                | botão WA fixo + ícone svg                                                         |
| **Badge**              | `<wa-badge>`                                                                      |

Nomes de padrões de UX mais antigos no projeto podem servir só como **referência de comportamento**, não como tecnologia obrigatória.

---

## 10. Layout responsivo

Breakpoints e grid do dashboard: xs/sm/md/lg + comportamento do drawer conforme [PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) (Fase 3).

Implementação: shell em `shell.ts` com componentes WA + estado drawer em TS (`matchMedia` opcional).

---

## 11. Acessibilidade

Requisitos inalterados: contraste WCAG AA, ícones com `aria-label` quando sem texto visível, `role="alert"` no chip **NÃO APLIQUE SANGUE**, foco visível, área min toque ~44 px mobile, **`prefers-reduced-motion`** global.

Delegar comportamentos de foco em **dialogs / drawers WA** sempre que a própria lib documentar traps — complementar apenas onde faltar cobertura.

---

## 12. Conteúdo rich de anotações (TipTap + imagens incorporadas)

- **Àrea editável:** estilos em **`.ProseMirror`** (ou classe raiz TipTap) num **CSS mínimo** do módulo ou shell; herdar **`--fonte-sans`** também nos headings.
- **Imagens no texto:** `max-width: 100%; height: auto`; formatos em `src`: apenas **`data:image/webp;base64,...`** ou **`data:image/svg+xml;base64,...`** (política alinhada ao plano mestre).
- **Modo apresentação / só leitura:** HTML sempre via **`DOMPurify`** com a mesma política que **`infra/sanitize.ts`** (**espelho do TipTap**) antes de pintar o DOM — evita que o utilizador “perca” markup entre sanitizar e reabrir o editor.

---

## Documentação relacionada

[PLANEJAMENTO_MESTRE.md](./PLANEJAMENTO_MESTRE.md) · [ARQUITETURA_SOLUCAO.md](./ARQUITETURA_SOLUCAO.md) · [BANCO_DE_DADOS.md](./BANCO_DE_DADOS.md) · [AGENTS.md](./AGENTS.md) · [`basedados.json`](./basedados.json)
