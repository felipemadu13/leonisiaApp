import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dashboard } from '../models/Dashboard';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8000/dashboard/';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getDashboard(): Observable<Dashboard> {
    const headers = this.authService.getHeaders();
    return this.http.get<Dashboard>(this.apiUrl, { headers });
  }
}
