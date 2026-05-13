/**
 * Evita `setOption` / `init` em gráficos obsoletos após nova navegação ou refresh concorrente.
 */
export function criarControleGeracaoGraficos(sinal: AbortSignal): {
  novaGeracao(): number;
  obsoleto(marcador: number): boolean;
} {
  let contador = 0;
  return {
    novaGeracao(): number {
      return ++contador;
    },
    obsoleto(marcador: number): boolean {
      return sinal.aborted || marcador !== contador;
    },
  };
}
