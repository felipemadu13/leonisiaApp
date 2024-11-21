import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL base da API
  private tokenKey = 'token'; // Chave para armazenar o token no armazenamento local

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Realiza o login do usuário e armazena o token recebido
   * @param username Nome de usuário
   * @param password Senha
   * @returns Observable com a resposta do servidor
   */
  login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
    return new Observable((observer) => {
      this.http.post(`${this.apiUrl}/login/`, loginData).subscribe(
        (response: any) => {
          if (response.token) {
            this.setToken(response.token);
            observer.next(response);
          } else {
            observer.error('Token não recebido');
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  /**
   * Armazena o token no armazenamento local
   * @param token Token JWT ou de autenticação
   */
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Obtém o token armazenado
   * @returns Token ou null se não estiver armazenado
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Verifica se o usuário está autenticado
   * @returns True se o token existir, False caso contrário
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  /**
   * Remove o token e redireciona para a página de login
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  /**
   * Retorna os cabeçalhos com o token para requisições autenticadas
   * @returns HttpHeaders com Authorization
   */
  getHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: `Token ${token}`,
    });
  }
}
