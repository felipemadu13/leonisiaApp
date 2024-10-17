import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-realizar-servico',
  templateUrl: './realizar-servico.component.html',
  styleUrls: ['./realizar-servico.component.css']
})
export class RealizarServicoComponent implements OnInit {

  servicos: any[] = [];  // Lista de serviços disponíveis
  servicosSelecionados: any[] = [];  // Lista dos serviços selecionados

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Obtém a lista de serviços disponíveis (ajuste a URL conforme sua API)
    this.http.get<any[]>('http://localhost:8000/api/servicos')
      .subscribe(data => {
        this.servicos = data;
      });
  }

  adicionarServico(servico: any): void {
    // Adiciona o serviço selecionado à lista de serviços escolhidos
    this.servicosSelecionados.push(servico);
  }

  removerServico(id: number): void {
    // Remove o serviço da lista de serviços escolhidos
    this.servicosSelecionados = this.servicosSelecionados.filter(servico => servico.id !== id);
  }

  fecharPedido(): void {
    // Lógica para fechar o pedido com os serviços selecionados
    console.log('Serviços Selecionados:', this.servicosSelecionados);
    // Aqui você pode adicionar a lógica para enviar os dados ao backend ou processar o pedido
  }
}
