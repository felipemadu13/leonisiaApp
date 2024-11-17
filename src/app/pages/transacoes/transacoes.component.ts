import { Component, OnInit } from '@angular/core';
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { Transacoes } from '../../models/Transacoes';
import { TransacoesService } from '../../services/transacoes.service';
import { Servico } from '../../models/Servico';
import { ServicoService } from '@services/servico.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServicoRealizado2 } from '../../models/ServicoRealizado2';

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
  servicos: Servico[] = [];

  selectedTab: string = 'tudo';
  showModal: boolean = false;  

  novaTransacao: Transacoes = {
    tipo: 'entrada',
    data: new Date(),
    metodoPagamento: '',
    valor: 0,
    servicosRealizados: []
  };

    novoServico: Servico = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
  };

  pageSize: number = 5;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(private transacoesService: TransacoesService, private servicoService: ServicoService) {}

  ngOnInit(): void {
    this.transacoesService.getTransactions().subscribe((data) => {
      this.transacoes = data.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
      this.filterTransactions();
    });

    this.servicoService.getServicos().subscribe((data) => {
      this.servicos = data;
    })
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
    this.currentPage = 1;  
    this.filterTransactions();
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

addTransacao(): void {
  this.transacoesService.addTransaction(this.novaTransacao).subscribe(() => {
    this.transacoes.push(this.novaTransacao); 
    this.filterTransactions(); 
    this.novaTransacao = { tipo: 'entrada', data: new Date(), metodoPagamento: '', valor: 0, servicosRealizados: [] };
    this.showModal = false;
  });
}

addServico(): void {
  if (this.novaTransacao.servicosRealizados) {
    const novoServicoRealizado: ServicoRealizado2 = {
      id: Date.now(),
      data: new Date(),
      servico: {
        ...this.novoServico
      } 
    };
    this.novaTransacao.servicosRealizados.push(novoServicoRealizado);
  }
  this.novoServico = { id: 0, nome: '', descricao: '', preco: 0 }; // Resetando o formulário
  this.updateValorTotal(); // Atualiza o valor total
}


  updateValorTotal(): void {
    const total = this.novaTransacao.servicosRealizados
      ?.reduce((acc, servicoRealizado) => acc + servicoRealizado.servico.preco, 0) ?? 0;
    this.novaTransacao.valor = total;
  }


}
