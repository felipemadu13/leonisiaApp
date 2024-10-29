import { Routes } from '@angular/router';
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
  { path: '', component: LoginscreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registrar', component: CadastroScreenComponent },
  { path: 'recuperar', component: ResetPasswordComponent},
  { path: 'servicos', component: ServicosListagemComponent },
  { path: 'servicos/cadastro', component: ServicosCadastroComponent },
  { path: 'servicos/editar/:id', component: ServicosCadastroComponent },
  { path: 'servicos-realizados', component: ServicosRealizadosComponent },
  { path: 'transacoes', component: TransacoesComponent },
  { path: 'configurações', component: ConfigComponent },
  { path: '**', redirectTo: '/servicos', pathMatch: 'full' }
];
