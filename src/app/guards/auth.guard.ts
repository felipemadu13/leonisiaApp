import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Verifica se o usuário está autenticado antes de permitir o acesso à rota.
   * Redireciona para a página de login se não autenticado.
   * @returns boolean - True se autenticado, False caso contrário.
   */
  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.log('AuthGuard: Usuário autenticado - acesso permitido.');
      return true; // Acesso permitido
    } else {
      console.warn('AuthGuard: Usuário não autenticado - redirecionando para login.');
      this.router.navigate(['/login']); // Redirecionar para login
      return false; // Acesso negado
    }
  }
}
