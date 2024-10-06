import { Component } from '@angular/core';
import { SiderbarMenuComponent } from "../sidebar-menu/siderbar-menu/siderbar-menu.component";
import { CommonModule } from '@angular/common';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { color, EChartsOption } from 'echarts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiderbarMenuComponent,CommonModule, NgxEchartsDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    provideEcharts(),
  ]
})
export class HomeComponent {


  options: EChartsOption = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          color: function (value?: string | number, index?: number): string {
            // Define diferentes cores para os dias
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#FF8333', '#8333FF', '#33FFF8'];
            return colors[index!]; // Aplica uma cor diferente para cada dia
          },
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
      },
    ],
  };
  





  pieChartOption: any;
chartOption: EChartsOption | null | undefined;

  constructor() { }

  ngOnInit(): void {
    this.initPieChart();
  }

  initPieChart() {
    this.pieChartOption = {

      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: 'left',
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          name: 'Serviços',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Serviço A' },
            { value: 735, name: 'Serviço B' },
            { value: 580, name: 'Serviço C' },
            { value: 484, name: 'Serviço D' },
            { value: 300, name: 'Serviço E' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
  }
}

