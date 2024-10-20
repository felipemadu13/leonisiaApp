import { Routes } from '@angular/router';
import { LoginscreenComponent } from './pages/loginscreen/loginscreen.component';
import { HomeComponent } from './pages/home/home/home.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password/reset-password.component';
import { CadastroscreenComponent } from './pages/cadastroscreen/cadastroscreen.component';
import { ServicosListagemComponent } from './pages/servicos-listagem/servicos-listagem.component';
import { RealizarServicoComponent } from './pages/realizar-servico/realizar-servico.component';
import { TransacoesComponent } from './pages/transacoes/transacoes.component';

export const routes: Routes = [
  { path: '', component: LoginscreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'recuperar', component: ResetPasswordComponent },
  { path: 'registrar', component: CadastroscreenComponent },
  { path: 'servicos', component: ServicosListagemComponent },
  { path: 'realizar-servico', component: RealizarServicoComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: '', redirectTo: '/servicos', pathMatch: 'full' }  // Redireciona para a listagem de serviços como padrão
];