import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Servico } from '../models/Servico';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  private apiUrl = 'http://localhost:8000/api/servicos/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getServicos(): Observable<Servico[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<Servico[]>(this.apiUrl, { headers });
  }

  getServicoById(id: number): Observable<Servico> {
    const headers = this.authService.getHeaders();
    return this.http.get<Servico>(`${this.apiUrl}/${id}`, { headers });
  }

  createServico(servico: Servico): Observable<Servico> {
    const headers = this.authService.getHeaders(); // Obter cabeçalhos com autenticação
    return this.http.post<Servico>(this.apiUrl, servico, { headers });
  }

  updateServico(id: number, servico: Servico): Observable<Servico> {
    const headers = this.authService.getHeaders();
    return this.http.put<Servico>(`${this.apiUrl}/${id}`, servico, { headers });
  }

  deleteServico(id: number): Observable<void> {
    const headers = this.authService.getHeaders(); // Garantir que o cabeçalho é incluído
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
