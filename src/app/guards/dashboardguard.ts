import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Custom logic for guarding Dashboard
    if (this.authService.isAuthenticated()) {
      console.log('DashboardGuard: Usuário autenticado - acesso permitido.');
      return true;
    } else {
      console.warn('DashboardGuard: Usuário não autenticado - redirecionando para login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
