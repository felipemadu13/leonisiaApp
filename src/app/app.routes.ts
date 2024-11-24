import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';  // Ajuste conforme necessário para o local correto
import { LoginscreenComponent } from './pages/loginscreen/loginscreen.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CadastroScreenComponent } from './pages/cadastroscreen/cadastroscreen.component';
import { ServicosListagemComponent } from './pages/servicos-listagem/servicos-listagem.component';
import { ServicosRealizadosComponent } from './pages/servicos-realizados/servicos-realizados.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';
import { ServicosCadastroComponent } from './pages/servicos-cadastro/servicos-cadastro.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { ConfigComponent } from './pages/config/config.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirecionamento padrão para login
  { path: 'login', component: LoginscreenComponent },  // Rota para login
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },  // Proteção com guard
  { path: 'registrar', component: CadastroScreenComponent },
  { path: 'recuperar', component: ResetPasswordComponent },
  { path: 'servicos', component: ServicosListagemComponent, canActivate: [AuthGuard] },
  { path: 'servicos/cadastro', component: ServicosCadastroComponent, canActivate: [AuthGuard] },
  { path: 'servicos/editar/:id', component: ServicosCadastroComponent, canActivate: [AuthGuard] },
  { path: 'servicos-realizados', component: ServicosRealizadosComponent, canActivate: [AuthGuard] },
  { path: 'transacoes', component: TransacoesComponent, canActivate: [AuthGuard] },
  { path: 'configurações', component: ConfigComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }  // Redirecionamento para páginas não encontradas
];
