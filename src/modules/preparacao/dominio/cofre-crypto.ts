const TAM_SALT = 16;
const TAM_IV = 12;
const ITERACOES = 210_000;

function comoArrayBuffer(bytes: Uint8Array): ArrayBuffer {
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength) as ArrayBuffer;
}

async function chavePorSenha(senha: string, salt: Uint8Array): Promise<CryptoKey> {
  const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(senha), 'PBKDF2', false, [
    'deriveKey',
  ]);
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: comoArrayBuffer(salt), iterations: ITERACOES, hash: 'SHA-256' },
    material,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt'],
  );
}

export async function criptografarDocumentoCofre(dados: ArrayBuffer, senha: string): Promise<Uint8Array> {
  if (senha.trim().length < 8) {
    throw new Error('A senha do cofre precisa ter pelo menos 8 caracteres.');
  }
  const salt = crypto.getRandomValues(new Uint8Array(TAM_SALT));
  const iv = crypto.getRandomValues(new Uint8Array(TAM_IV));
  const chave = await chavePorSenha(senha, salt);
  const cifrado = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: comoArrayBuffer(iv) }, chave, dados));
  const pacote = new Uint8Array(TAM_SALT + TAM_IV + cifrado.length);
  pacote.set(salt, 0);
  pacote.set(iv, TAM_SALT);
  pacote.set(cifrado, TAM_SALT + TAM_IV);
  return pacote;
}

