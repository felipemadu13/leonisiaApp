// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { ServicoRealizado2 } from '../models/ServicoRealizado2';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServicoRealizadoService {
//   private apiUrl = 'http://localhost:8000/api/servicosrealizados';
  
//   constructor(private http: HttpClient) {}

//   getServicos(): Observable<ServicoRealizado2[]> {
//     return this.http.get<ServicoRealizado2[]>(this.apiUrl);
//   }

//   getServicoById(id: number): Observable<ServicoRealizado2> {
//     return this.http.get<ServicoRealizado2>(`${this.apiUrl}/${id}`);
//   }

//   createServico(servico: ServicoRealizado2): Observable<ServicoRealizado2> {
//     return this.http.post<ServicoRealizado2>(this.apiUrl, servico);
//   }

//   updateServico(id: number, servico: ServicoRealizado2): Observable<ServicoRealizado2> {
//     return this.http.put<ServicoRealizado2>(`${this.apiUrl}/${id}`, servico);
//   }

//   deleteServico(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }
// }





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServicoRealizado2 } from '../models/ServicoRealizado2';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServicoRealizadoService {
  private apiUrl = 'http://localhost:8000/api/servicosrealizados/';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getServicos(): Observable<ServicoRealizado2[]> {
    const headers = this.authService.getHeaders();
    return this.http.get<ServicoRealizado2[]>(this.apiUrl, { headers });
  }

  getServicoById(id: number): Observable<ServicoRealizado2> {
    const headers = this.authService.getHeaders();
    return this.http.get<ServicoRealizado2>(`${this.apiUrl}/${id}`, { headers });
  }

  createServico(servico: ServicoRealizado2): Observable<ServicoRealizado2> {
    const headers = this.authService.getHeaders();
    return this.http.post<ServicoRealizado2>(this.apiUrl, servico, { headers });
  }

  updateServico(id: number, servico: ServicoRealizado2): Observable<ServicoRealizado2> {
    const headers = this.authService.getHeaders();
    return this.http.put<ServicoRealizado2>(`${this.apiUrl}/${id}`, servico, { headers });
  }

  deleteServico(id: number): Observable<void> {
    const headers = this.authService.getHeaders();
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers });
  }
}
