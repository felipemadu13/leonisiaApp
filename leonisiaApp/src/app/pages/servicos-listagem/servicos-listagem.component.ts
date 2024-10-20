import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { LOCALE_ID } from '@angular/core';
import { NgFor } from '@angular/common';

registerLocaleData(localePt); 

@Component({
  selector: 'app-servicos-listagem',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './servicos-listagem.component.html',
  styleUrls: ['./servicos-listagem.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})

export class ServicosListagemComponent implements OnInit {
  servicos: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/api/servicos').subscribe(data => {
      this.servicos = data;
    });
  }

  deletarServico(id: number): void {
    this.http.delete(`http://localhost:8000/api/servicos/${id}`).subscribe(() => {
      this.servicos = this.servicos.filter(servico => servico.id !== id);
    });
  }

  editarServico(id: number): void {
    this.router.navigate(['/editar-servico', id]);
  }
}
