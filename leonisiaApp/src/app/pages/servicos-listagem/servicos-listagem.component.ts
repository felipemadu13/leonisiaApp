import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos-listagem',
  templateUrl: './servicos-listagem.component.html',
  styleUrls: ['./servicos-listagem.component.css']
})
export class ServicosListagemComponent implements OnInit {

  servicos: any[] = [];  // Lista de serviços

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Obtém a lista de serviços da API (ajuste a URL conforme sua API)
    this.http.get<any[]>('http://localhost:8000/api/servicos')
      .subscribe(data => {
        this.servicos = data;
      });
  }

  deletarServico(id: number): void {
    // Deleta um serviço pela API
    this.http.delete(`http://localhost:8000/api/servicos/${id}`).subscribe(() => {
      this.servicos = this.servicos.filter(servico => servico.id !== id);
    });
  }

  editarServico(id: number): void {
    // Redireciona para a página de cadastro para editar o serviço
    this.router.navigate(['/servico-cadastro', { id }]);
  }
}
