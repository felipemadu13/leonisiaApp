import { Routes } from '@angular/router';
import { LoginscreenComponent } from './pages/loginscreen/loginscreen.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { CadastroscreenComponent } from './pages/cadastroscreen/cadastroscreen.component';

export const routes: Routes = [
    {
        path: '', component: LoginscreenComponent
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'recuperar', component: ResetPasswordComponent
    },
    {
        path: 'registrar', component: CadastroscreenComponent
    }
];
