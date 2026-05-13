export interface MetricaUi {
  rotulo: string;
  valor: string;
}

export function criarMetricaUi(metrica: MetricaUi): HTMLElement {
  const box = document.createElement('div');
  box.className = 'shell__metrica';

  const valor = document.createElement('strong');
  valor.textContent = metrica.valor;

  const rotulo = document.createElement('span');
  rotulo.textContent = metrica.rotulo;

  box.append(valor, rotulo);
  return box;
}

export function criarGradeMetricas(metricas: MetricaUi[] = []): HTMLElement {
  const grade = document.createElement('div');
  grade.className = 'shell__metricas-grid';
  renderizarMetricas(grade, metricas);
  return grade;
}

export function renderizarMetricas(container: HTMLElement, metricas: MetricaUi[]): void {
  container.replaceChildren(...metricas.map(criarMetricaUi));
}
