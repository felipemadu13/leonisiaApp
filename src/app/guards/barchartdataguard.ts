import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BarChartDataGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Custom logic for guarding BarChartData
    if (this.authService.isAuthenticated()) {
      console.log('BarChartDataGuard: Usuário autenticado - acesso permitido.');
      return true;
    } else {
      console.warn('BarChartDataGuard: Usuário não autenticado - redirecionando para login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
