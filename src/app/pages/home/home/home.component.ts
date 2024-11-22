import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartOptions, ChartType, ChartTypeRegistry } from 'chart.js';
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
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { TransacoesService } from '../../../services/transacoes.service';
import { Transacoes } from '../../../models/Transacoes';
import { ServicoRealizadoService } from '@services/servico-realizado.service';
// import { ServicoRealizado2 } from '@models/ServicoRealizado2';
import { ServicoRealizado2 } from '../../../models/ServicoRealizado2';

registerLocaleData(localePt);

Chart.register(DataLabelsPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiderbarMenuComponent, CommonModule, FormsModule, BaseChartDirective, CurrencyPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class HomeComponent {
   currentDate: Date = new Date();

  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  public barChartType: keyof ChartTypeRegistry = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {},
      y: { display: false }
    },
    plugins: {
      legend: { display: false},
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: (value: any) => {
          const currencyPipe = new CurrencyPipe('pt-BR');
          return currencyPipe.transform(value, 'BRL', 'symbol', '1.2-2');
        }
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const currencyPipe = new CurrencyPipe('pt-BR');
            const transformedValue = currencyPipe.transform(context.parsed.y, 'BRL', 'symbol', '1.2-2');
            return transformedValue !== null ? transformedValue : '';
          }
        }
      }
    },
  };

  public pieChartType: ChartType = 'pie';

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };
  
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
      datalabels: {
      },
    },
  };

  dashboard: Dashboard = {
    saldoGeral: 0,
    entradaDiario: 0,
    entradaMensal: 0,
    saidaDiario: 0,
    saidaMensal: 0,
    balancoDiario: 0,
    balancoMensal: 0,
    BarChartData: {
      labels: [],
      datasets: [{ data: [], label: '' }],
    },
    PieChartData: {
      labels: [],
      datasets: [{ data: [], label: '' }],
    },
  };

  entrada: string = 'diario';
  saida: string = 'diario';
  balanco: string = 'diario';

  transacoes: Transacoes[] = [];
  
  servicosRealizados: ServicoRealizado2[] = [];




  constructor(private dashboardService: DashboardService, private transacoesService: TransacoesService, private servicosRealizadosService: ServicoRealizadoService) { }

  ngOnInit(): void {

    this.transacoesService.getTransactions().subscribe((data) => {
      this.transacoes = data.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    });

    this.carregarServicosRealizados();

  }

  carregarServicosRealizados(): void {
    this.servicosRealizadosService.getServicos().subscribe((data) => {
  
      this.pieChartData.labels = data.map(servico => servico.servico?.nome);
      this.pieChartData.datasets[0].data = data.map(servico => servico.servico?.preco);

      this.chart?.update();
    });
  }



  getTotalTransacoes(): number {

    return this.transacoes.reduce((total, transacao) => {
      // Converte o valor para número, considerando vírgulas
      const valor = parseFloat(transacao.valor.toString().replace(',', '.'));
  
      // Se a transação for do tipo "saida", torna o valor negativo
      const valorAjustado = transacao.tipo === 'saida' ? -valor : valor;
  
      // Retorna o total acumulado, considerando se o valor é válido
      return total + (isNaN(valorAjustado) ? 0 : valorAjustado);
    }, 0);
  }
  
  getEntradaDiarias(): number {
    const hoje = new Date();
    const dataHoje = hoje.toISOString().split('T')[0]; // Pega a data de hoje no formato "AAAA-MM-DD"
  
    // Filtra as transações do tipo 'saida' e do dia, e soma os valores
    return this.transacoes
      .filter(transacao => {
        const dataTransacao = new Date(transacao.data).toISOString().split('T')[0];
        return dataTransacao === dataHoje && transacao.tipo === 'entrada';
      })
      .reduce((total, transacao) => {
        const valor = parseFloat(transacao.valor.toString().replace(',', '.'));
        return total + (isNaN(valor) ? 0 : valor);
      }, 0);
  }
  
  getEntradaMensais(): number {
    const hoje = new Date();
    const mesHoje = hoje.getMonth();  // Pega o mês atual (0-11)
    const anoHoje = hoje.getFullYear();  // Pega o ano atual
  
    // Filtra as transações do tipo 'saida' e do mês atual, e soma os valores
    return this.transacoes
      .filter(transacao => {
        const dataTransacao = new Date(transacao.data);
        const mesTransacao = dataTransacao.getMonth();  // Mês da transação
        const anoTransacao = dataTransacao.getFullYear();  // Ano da transação
        return mesTransacao === mesHoje && anoTransacao === anoHoje && transacao.tipo === 'entrada';
      })
      .reduce((total, transacao) => {
        const valor = parseFloat(transacao.valor.toString().replace(',', '.'));
        return total + (isNaN(valor) ? 0 : valor);
      }, 0);
  }
  
  getSaidasDiarias(): number {
    const hoje = new Date();
    const dataHoje = hoje.toISOString().split('T')[0]; // Pega a data de hoje no formato "AAAA-MM-DD"
  
    // Filtra as transações do tipo 'saida' e do dia, e soma os valores
    return this.transacoes
      .filter(transacao => {
        const dataTransacao = new Date(transacao.data).toISOString().split('T')[0];
        return dataTransacao === dataHoje && transacao.tipo === 'saida';
      })
      .reduce((total, transacao) => {
        const valor = parseFloat(transacao.valor.toString().replace(',', '.'));
        return total + (isNaN(valor) ? 0 : valor);
      }, 0);
  }
  
  getSaidasMensais(): number {
    const hoje = new Date();
    const mesHoje = hoje.getMonth();  // Pega o mês atual (0-11)
    const anoHoje = hoje.getFullYear();  // Pega o ano atual
  
    // Filtra as transações do tipo 'saida' e do mês atual, e soma os valores
    return this.transacoes
      .filter(transacao => {
        const dataTransacao = new Date(transacao.data);
        const mesTransacao = dataTransacao.getMonth();  // Mês da transação
        const anoTransacao = dataTransacao.getFullYear();  // Ano da transação
        return mesTransacao === mesHoje && anoTransacao === anoHoje && transacao.tipo === 'saida';
      })
      .reduce((total, transacao) => {
        const valor = parseFloat(transacao.valor.toString().replace(',', '.'));
        return total + (isNaN(valor) ? 0 : valor);
      }, 0);
  }
  
  getBalancoDiario(): number {
    const entradasDiarias = this.getEntradaDiarias();
    const saidasDiarias = this.getSaidasDiarias();
    return entradasDiarias - saidasDiarias; // Subtrai as saídas das entradas do dia
  }
  
  getBalancoMensal(): number {
    const entradasMensais = this.getEntradaMensais();
    const saidasMensais = this.getSaidasMensais();
    return entradasMensais - saidasMensais; // Subtrai as saídas das entradas do mês
  }
  


}
