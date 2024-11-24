import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TransacoesGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Custom logic for guarding Transacoes
    if (this.authService.isAuthenticated()) {
      console.log('TransacoesGuard: Usuário autenticado - acesso permitido.');
      return true;
    } else {
      console.warn('TransacoesGuard: Usuário não autenticado - redirecionando para login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
