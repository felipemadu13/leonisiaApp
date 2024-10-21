// servico.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Servico } from '@models/servico'; (Deixar assim não deixa o projeto funcionar no Angular)
import { Servico } from '../models/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {
  // private apiUrl = 'http://localhost:8000/api/servicos';
  private apiUrl = 'http://localhost:8000/servicos';

  constructor(private http: HttpClient) {}

  // Retornando a lista de todos os serviços.
  getServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  // Retornando um serviço específico pelo ID.
  getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }

  // Criando um novo serviço.
  createServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }

  // Atualizando um serviço existente.
  updateServico(id: number, servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${id}`, servico);
  }

  // Deletando um serviço pelo ID.
  deleteServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
