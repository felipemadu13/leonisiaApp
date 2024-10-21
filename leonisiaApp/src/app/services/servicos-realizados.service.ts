import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicosRealizadosService {
  private apiUrl = 'http://localhost:8000/api/servicos-realizados';

  constructor(private http: HttpClient) {}

  getServicosRealizados(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getServicoRealizadoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createServicoRealizado(servico: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, servico);
  }

  updateServicoRealizado(id: number, servico: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, servico);
  }

  deleteServicoRealizado(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
