/** Totais financeiros num intervalo exclusivo máximo (`data_vencimento`). */
export interface TotaisFinanceirosIntervalo {
  receita: number;
  despesa: number;
}

export interface UltimoRelatorioMinisterioResumo {
  horas: number;
  meta_horas: number;
  mes: number;
  ano: number;
}

export interface ContagemMetas {
  abertas: number;
  concluidas: number;
}

export interface PerfilDashboardResumo {
  recusaTransfusao: number;
  uriScanDpa: string;
  contatoEmergencia: string;
  contatoEmergenciaTelefone: string;
}
