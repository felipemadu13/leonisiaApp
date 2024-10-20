// transacoes.component.ts

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
  styleUrls: ['./transacoes.component.css'],  // Corrigi 'styleUrl' para 'styleUrls'
  providers: [DatePipe]
})
export class TransacoesComponent implements OnInit {
  transacoes: Transacoes[] = [];
  transacoesFiltradas: Transacoes[] = [];
  paginatedTransacoes: Transacoes[] = [];

  selectedTab: string = 'tudo';

  // Variáveis para a paginação
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private transacoesService: TransacoesService) {}

  ngOnInit(): void {
  this.transacoesService.getTransactions().subscribe((data) => {
    this.transacoes = data.map(t => ({
      ...t,
      data: new Date(t.data) 
    }));
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
    this.totalPages = Math.ceil(this.transacoesFiltradas.length / this.pageSize);
    this.updatePaginatedTransacoes();
  }

  updatePaginatedTransacoes(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedTransacoes = this.transacoesFiltradas.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedTransacoes();
    }
  }

  selectTab(tab: string): void {
    this.selectedTab = tab;
    this.currentPage = 1;  // Reseta para a primeira página ao mudar de aba
    this.filterTransactions();
  }
}
