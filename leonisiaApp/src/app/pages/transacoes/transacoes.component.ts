import { Component, OnInit } from '@angular/core';
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { Transacoes } from '../../models/Transacoes';
import { TransacoesService } from '../../services/transacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [SiderbarMenuComponent, CommonModule],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css',
  providers: [DatePipe]
})
export class TransacoesComponent implements OnInit {
  transacoes: Transacoes[] = [];
  transacoesFiltradas: Transacoes[] = [];
  selectedTab: string = 'tudo';

  constructor(private transacoesService: TransacoesService) {}
  
  ngOnInit(): void {
    this.transacoesService.getTransactions().subscribe((data) => {
      this.transacoes = data;
      this.filterTransactions();
    });
  }

  filterTransactions(): void {
    if (this.selectedTab === 'tudo') {
      this.transacoesFiltradas = this.transacoes;
    } else if (this.selectedTab === 'entrada') {
      this.transacoesFiltradas = this.transacoes.filter(t => t.tipo === 'entrada');
    } else if (this.selectedTab === 'saida') {
      this.transacoesFiltradas = this.transacoes.filter(t => t.tipo === 'saida');
    }
  }

    selectTab(tab: string): void {
    this.selectedTab = tab;
    this.filterTransactions();
  }


}
