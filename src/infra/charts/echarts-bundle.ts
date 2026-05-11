import * as echarts from 'echarts/core';
import { BarChart, GaugeChart, LineChart, PieChart } from 'echarts/charts';
import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

let registado = false;

/** Registo único dos gráficos usados pela app (SPA). */
export function garantirEchartsRegistrado(): typeof echarts {
  if (!registado) {
    echarts.use([
      BarChart,
      LineChart,
      PieChart,
      GaugeChart,
      GridComponent,
      TooltipComponent,
      LegendComponent,
      TitleComponent,
      DatasetComponent,
      CanvasRenderer,
    ]);
    registado = true;
  }
  return echarts;
}

export type { EChartsType } from 'echarts/core';
