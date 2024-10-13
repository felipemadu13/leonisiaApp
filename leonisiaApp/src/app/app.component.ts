import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home/home.component";
import { SiderbarMenuComponent } from "./pages/home/sidebar-menu/siderbar-menu/siderbar-menu.component";
import { ResetPasswordComponent } from "./pages/reset-password/reset-password/reset-password.component";
import { LoginscreenComponent } from './pages/loginscreen/loginscreen.component';
import { CadastroscreenComponent } from './pages/cadastroscreen/cadastroscreen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SiderbarMenuComponent, ResetPasswordComponent, LoginscreenComponent, CadastroscreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leonisiaApp';
}
