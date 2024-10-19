import { ChartData } from './ChartData';

export interface Dashboard {
  saldoGeral: number;
  entradaDiario: number;
  entradaMensal: number;
  saidaDiario: number;
  saidaMensal: number;
  balancoDiario: number;
  balancoMensal: number;
  chartData: ChartData;
}
