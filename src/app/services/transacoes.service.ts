import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacoes } from '../models/Transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  private apiUrl = 'http://localhost:3000/transacoes';

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transacoes[]> {
    return this.http.get<Transacoes[]>(this.apiUrl);
  }

    // Método para adicionar uma nova transação
  addTransaction(transacao: Transacoes): Observable<Transacoes> {
    return this.http.post<Transacoes>(this.apiUrl, transacao);
  }
}