import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ServicoRealizado2Guard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Custom logic for guarding ServicoRealizado2
    if (this.authService.isAuthenticated()) {
      console.log('ServicoRealizado2Guard: Usuário autenticado - acesso permitido.');
      return true;
    } else {
      console.warn('ServicoRealizado2Guard: Usuário não autenticado - redirecionando para login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
