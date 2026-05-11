/**
 * Copia o diretório `dist` do Web Awesome para `public/webawesome/`
 * para que ícones e recursos resolvam com `setBasePath` em dev e build.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const raiz = path.resolve(__dirname, '..');
const origem = path.join(raiz, 'node_modules', '@awesome.me', 'webawesome', 'dist');
const destino = path.join(raiz, 'public', 'webawesome');

if (!fs.existsSync(origem)) {
  console.warn(
    '[copiar-ativos-webawesome] Pasta de origem inexistente (bun install pendente?):',
    origem,
  );
  process.exit(0);
}

fs.rmSync(destino, { recursive: true, force: true });
fs.cpSync(origem, destino, { recursive: true });
console.log('[copiar-ativos-webawesome] Copiado para', destino);
