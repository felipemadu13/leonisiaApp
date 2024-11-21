
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
            this.setToken(response.token); // Armazena o token
            this.router.navigate(['/home']); // Redireciona após login bem-sucedido
            observer.next(response);
            observer.complete();
          } else {
            observer.error('Login falhou: Token não recebido.');
          }
        },
        (error) => observer.error(error)
      );
    });
  }

  /**
   * Verifica se o usuário está autenticado
   * @returns True se o token existir, False caso contrário
   */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Retorna true se o token existir
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
    if (!token) {
      this.logout(); // Se o token não existir, desloga o usuário
    }
    return new HttpHeaders({
      Authorization: `Token ${token}`,
    });
  }

  /**
   * Obtém o token do armazenamento local
   * @returns Token ou null
   */
  public getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Armazena o token no armazenamento local
   * @param token Token para armazenar
   */
  public setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
