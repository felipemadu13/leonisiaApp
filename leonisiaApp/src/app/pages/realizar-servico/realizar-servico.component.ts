import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-realizar-servico',
  templateUrl: './realizar-servico.component.html',
  styleUrls: ['./realizar-servico.component.css']
})
export class RealizarServicoComponent implements OnInit {
  servicos: any[] = [];
  servicosSelecionados: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/api/servicos').subscribe(data => {
      this.servicos = data;
    });
  }

  adicionarServico(servico: any): void {
    this.servicosSelecionados.push(servico);
  }

  removerServico(id: number): void {
    this.servicosSelecionados = this.servicosSelecionados.filter(servico => servico.id !== id);
  }

  fecharPedido(): void {
    // Lógica para fechar o pedido
  }
}
