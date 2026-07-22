// Service worker do PWA Papiro.
// Estratégias:
// - Navegação + JS/CSS do shell (nomes fixos, mudam a cada build): NETWORK-FIRST
//   — sempre pega a versão nova quando online; cai no cache só offline. (Sem isso,
//   o cache-first serviria o bundle antigo para sempre, "congelando" o app.)
// - Fontes/ícones/imagens (raramente mudam): CACHE-FIRST.
// - dados/*.json (conteúdo curado): NETWORK-FIRST.
// Incremente CACHE_VERSAO ao publicar mudanças no shell.

const CACHE_VERSAO = 'papiro-v144';
// Nomes estáveis (sem hash) emitidos pelo build a partir de index.html.
const SHELL = [
    './',
    './index.html',
    './guia-do-usuario.html',
    './politica-privacidade.html',
    './termos-de-uso.html',
    './direitos-de-terceiros.html',
    './licenca.html',
    './manifest.webmanifest',
    './icons/icon.svg',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './assets/index.js',
    './assets/index.css',
];
// O worker do SQLite (assets/sqlite-worker-*.js) e o wasm (assets/sqlite3-*.wasm)
// têm nome com hash — não dá para precachear por nome fixo. São baixados no boot
// (1º acesso online) e ficam em cache pelas estratégias abaixo (js=network-first,
// wasm=cache-first), garantindo o armazenamento offline a partir do 2º acesso.

self.addEventListener('install', (event) => {
    // `cache: 'reload'` obriga a buscar da rede, ignorando o cache HTTP do navegador.
    // Sem isso o shell novo pode ser precacheado com um index.js ANTIGO ainda válido
    // para o browser — e aí o index.html novo roda contra o bundle velho, que é como
    // "classeItem is not defined" aparece no console.
    const doZero = SHELL.map((u) => new Request(u, { cache: 'reload' }));
    event.waitUntil(
        caches.open(CACHE_VERSAO)
            .then((cache) => cache.addAll(doZero))
            .catch(() => { /* assets podem ainda não existir no 1º deploy */ })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((chaves) => Promise.all(
                chaves.filter((c) => c !== CACHE_VERSAO).map((c) => caches.delete(c))
            ))
            .then(() => self.clients.claim())
    );
});

// Guarda no cache SEM derrubar a resposta. Três cuidados:
// - `cache.put` REJEITA para resposta parcial (206, típica de range request), opaca
//   (cross-origin) ou esquema não-http; sem o catch isso vira "Uncaught (in promise)"
//   no console, ruído que esconde erro de verdade;
// - guardar um 404/500 seria pior que não guardar: o offline passaria a servir o erro;
// - a gravação é em segundo plano de propósito — a resposta volta na hora.
function guardarNoCache(req, resp) {
    if (!resp || resp.status !== 200 || resp.type === 'opaque') return;
    const copia = resp.clone();
    caches.open(CACHE_VERSAO)
        .then((cache) => cache.put(req, copia))
        .catch(() => { /* 206/opaca/quota — seguir sem cachear */ });
}

// Busca na rede e atualiza o cache; cai no cache em caso de falha (offline).
function networkFirst(req) {
    return fetch(req)
        .then((resp) => {
            guardarNoCache(req, resp);
            return resp;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match('./index.html')));
}

// Serve do cache (rápido) e atualiza em segundo plano; busca na rede se faltar.
function cacheFirst(req) {
    return caches.match(req).then((c) => c || fetch(req).then((resp) => {
        guardarNoCache(req, resp);
        return resp;
    }));
}

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // Navegação (SPA): network-first → cai no index.html cacheado offline.
    if (req.mode === 'navigate') {
        event.respondWith(networkFirst(req));
        return;
    }

    // JS/CSS do shell e conteúdo curado: network-first (sempre fresco online).
    if (/\.(?:js|css)$/.test(url.pathname) || url.pathname.includes('/dados/')) {
        event.respondWith(networkFirst(req));
        return;
    }

    // Fontes, ícones, imagens, manifest: cache-first (raramente mudam).
    event.respondWith(cacheFirst(req));
});
