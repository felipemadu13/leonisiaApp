import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartTypeRegistry } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { SiderbarMenuComponent } from "../sidebar-menu/siderbar-menu/siderbar-menu.component";
import { CommonModule, CurrencyPipe } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';
import { Dashboard } from '../../../models/Dashboard';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localePt); 

Chart.register(DataLabelsPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiderbarMenuComponent, CommonModule, FormsModule, BaseChartDirective, MatButton, CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class HomeComponent {
  // Gráficos
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: { min: 10 },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  

  public barChartType: keyof ChartTypeRegistry = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '' },
    ],
  };

  dashboard: Dashboard = {
    saldoGeral: 0,
    entradaDiario: 0,
    entradaMensal: 0,
    saidaDiario: 0,
    saidaMensal: 0,
    balancoDiario: 0,
    balancoMensal: 0,
    chartData: {
      labels: [],
      datasets: [{ data: [], label: '' }],
    }
  };

  entrada: string = 'diario';
  saida: string = 'diario';
  balanco: string = 'diario';

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe(data => {
      this.dashboard = data;
      
      // Atualizar os dados do gráfico
      this.barChartData.labels = data.chartData.labels;
      this.barChartData.datasets = data.chartData.datasets;
      
      // Atualizar o gráfico
      this.chart?.update();
    });
  }
}
