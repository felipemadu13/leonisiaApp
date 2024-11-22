// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Transacoes } from '../models/Transacoes';

// @Injectable({
//   providedIn: 'root'
// })
// export class TransacoesService {
//   private apiUrl = 'http://localhost:8000/api/transacoes';
  
//   constructor(private http: HttpClient) {}

//   getTransactions(): Observable<Transacoes[]> {
//     return this.http.get<Transacoes[]>(this.apiUrl);
//   }

//   addTransaction(transacao: Transacoes): Observable<Transacoes> {
//     return this.http.post<Transacoes>(this.apiUrl, transacao);
//   }
// }














import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transacoes } from '../models/Transacoes';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TransacoesService {
  private apiUrl = 'http://localhost:8000/api/transacoes/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTransactions(): Observable<Transacoes[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<Transacoes[]>(this.apiUrl, { headers });
  }

  addTransaction(transacao: Transacoes): Observable<Transacoes> {
    const headers = this.authService.getHeaders();
    return this.http.post<Transacoes>(this.apiUrl, transacao, { headers });
  }
}
