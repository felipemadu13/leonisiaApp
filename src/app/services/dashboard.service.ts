import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/Dashboard';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8000/dashboard/'; // URL do endpoint do backend

  constructor(private http: HttpClient, private authService: AuthService) {}

  /**
   * Obtém os dados do Dashboard.
   * @returns Um Observable contendo os dados do Dashboard.
   */
  getDashboard(): Observable<Dashboard> {
    const headers = new HttpHeaders({
      Authorization: `Token ${this.authService.getToken()}` // Insere o token no cabeçalho
    });
    return this.http.get<Dashboard>(this.apiUrl, { headers }); // Requisição GET ao backend
  }
}
