/** `throwIfAborted()` ou operações canceladas (fetch, etc.). */
export function eAbortoDom(erro: unknown): boolean {
  return erro instanceof DOMException && erro.name === 'AbortError';
}
