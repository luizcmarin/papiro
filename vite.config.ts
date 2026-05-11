import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import sqlocal from 'sqlocal/vite';

const headersIsolamentoOrigem = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
};

// Para GitHub Pages com subcaminho, definir também `base: '/NomeDoRepo/'`.
export default defineConfig({
  server: {
    headers: headersIsolamentoOrigem,
  },
  preview: {
    headers: headersIsolamentoOrigem,
  },
  plugins: [
    sqlocal(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/papiro.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2,wasm}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
      },
      manifest: {
        id: 'papiro',
        name: 'Papiro',
        short_name: 'Papiro',
        description: 'PWA offline-first para vida espiritual, ministério e organização.',
        lang: 'pt-BR',
        theme_color: '#1a1a2e',
        background_color: '#faf8f5',
        display: 'standalone',
        start_url: './',
        scope: './',
        icons: [{ src: 'icons/papiro.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }],
      },
    }),
  ],
});
