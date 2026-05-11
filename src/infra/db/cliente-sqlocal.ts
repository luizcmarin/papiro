import { SQLocal } from 'sqlocal';

let instancia: SQLocal | null = null;

/**
 * Cliente SQLite único (OPFS + worker). Ver {@link https://sqlocal.dev}.
 */
export function obterClienteSqlocal(): SQLocal {
  if (!instancia) {
    instancia = new SQLocal('papiro.sqlite3');
  }
  return instancia;
}
