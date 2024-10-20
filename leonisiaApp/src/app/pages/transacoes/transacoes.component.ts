import { Component, OnInit } from '@angular/core';
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { Transacoes } from '../../models/Transacoes';
import { TransacoesService } from '../../services/transacoes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [SiderbarMenuComponent, CommonModule, FormsModule],
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css'],
  providers: [DatePipe]
})
export class TransacoesComponent implements OnInit {
  transacoes: Transacoes[] = [];
  transacoesFiltradas: Transacoes[] = [];
  paginatedTransacoes: Transacoes[] = [];

  selectedTab: string = 'tudo';
  showModal: boolean = false;  // Controla a exibição do modal

  // Dados para a nova transação
  novaTransacao: Transacoes = {
    tipo: 'entrada',
    data: new Date(),  // Data como objeto Date
    metodoPagamento: '',
    valor: 0
  };

  // Variáveis para a paginação
  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private transacoesService: TransacoesService) {}

  // ngOnInit(): void {
  //   this.transacoesService.getTransactions().subscribe((data) => {
  //     this.transacoes = data;
  //     this.filterTransactions();
  //   });
  // }

  ngOnInit(): void {
  this.transacoesService.getTransactions().subscribe((data) => {
    // Ordena as transações da mais nova para a mais velha
    this.transacoes = data.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
    
    // Aplica o filtro nas transações
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

  // Função para abrir o modal
  openModal(): void {
    this.showModal = true;
  }

  // Função para fechar o modal
  closeModal(): void {
    this.showModal = false;
  }

  // Função para adicionar uma nova transação
  addTransacao(): void {
    this.transacoes.push(this.novaTransacao); // Adiciona a nova transação
    this.filterTransactions();  // Atualiza a lista
    this.novaTransacao = { tipo: 'entrada', data: new Date(), metodoPagamento: '', valor: 0 };  // Reseta o formulário
    this.closeModal();  // Fecha o modal
  }
}
