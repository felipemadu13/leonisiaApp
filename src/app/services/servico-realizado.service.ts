import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServicoRealizado2 } from '../models/ServicoRealizado2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServicoRealizadoService {
  private apiUrl = 'http://localhost:8000/api/servicosrealizados/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  private getAuthHeaders() {
    return { headers: this.authService.getHeaders() };
  }

  getServicos(): Observable<ServicoRealizado2[]> {
    return this.http.get<ServicoRealizado2[]>(this.apiUrl, this.getAuthHeaders()).pipe(
      catchError((error) => {
        console.error('Erro ao buscar serviços', error);
        return throwError(() => new Error('Erro ao buscar serviços'));
      })
    );
  }

  getServicosComTransacoes(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'servicos-realizados-transacoes/', this.getAuthHeaders());
  }

  getServicoById(id: number): Observable<ServicoRealizado2> {
    return this.http.get<ServicoRealizado2>(`${this.apiUrl}${id}/`, this.getAuthHeaders());
  }

  createServico(servico: ServicoRealizado2): Observable<ServicoRealizado2> {
    return this.http.post<ServicoRealizado2>(this.apiUrl, servico, this.getAuthHeaders());
  }

  updateServico(id: number, servico: ServicoRealizado2): Observable<ServicoRealizado2> {
    return this.http.put<ServicoRealizado2>(`${this.apiUrl}${id}/`, servico, this.getAuthHeaders());
  }

  deleteServico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`, this.getAuthHeaders());
  }
}
