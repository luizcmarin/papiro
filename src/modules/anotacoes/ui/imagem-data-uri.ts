function arrayBufferParaBase64(buffer: ArrayBuffer): string {
  let binario = '';
  const bytes = new Uint8Array(buffer);
  const tamanho = bytes.byteLength;
  for (let i = 0; i < tamanho; i++) {
    binario += String.fromCharCode(bytes[i]!);
  }
  return globalThis.btoa(binario);
}

/**
 * Converte ficheiros de imagem para `src` autorizadas no Papiro (`webp`/`svg+xml` em Base64).
 */
export async function arquivoImagemParaDataUriAutorizada(arquivo: File): Promise<string> {
  const tipo = arquivo.type.toLowerCase();

  if (tipo === 'image/svg+xml') {
    const texto = await arquivo.text();
    const b64 = globalThis.btoa(unescape(encodeURIComponent(texto)));
    return `data:image/svg+xml;base64,${b64}`;
  }

  if (tipo.startsWith('image/')) {
    try {
      const bitmap = await createImageBitmap(arquivo);
      try {
        const canvas = document.createElement('canvas');
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D indisponível.');
        ctx.drawImage(bitmap, 0, 0);
        const blob: Blob | null = await new Promise((resolve) =>
          canvas.toBlob((b) => resolve(b), 'image/webp', 0.88),
        );
        if (!blob) throw new Error('Conversão WebP falhou.');
        const buf = await blob.arrayBuffer();
        const b64 = arrayBufferParaBase64(buf);
        return `data:image/webp;base64,${b64}`;
      } finally {
        bitmap.close?.();
      }
    } catch {
      throw new Error(
        'Não foi possível converter esta imagem para WebP neste navegador. Experimente PNG/JPEG mais pequeno ou SVG.',
      );
    }
  }

  throw new Error('Tipo de ficheiro não suportado. Use imagem raster (PNG/JPEG/etc.) ou SVG.');
}
