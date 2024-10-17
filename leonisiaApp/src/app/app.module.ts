import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

// Importando os componentes do projeto
import { AppComponent } from './app.component';
import { ServicoCadastroComponent } from './pages/servico-cadastro/servico-cadastro.component';
import { ServicosListagemComponent } from './pages/servicos-listagem/servicos-listagem.component';
import { RealizarServicoComponent } from './pages/realizar-servico/realizar-servico.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';  // Importando o SidebarComponent

import { routes } from './app.routes';  // Importando as rotas do projeto

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // Importar CUSTOM_ELEMENTS_SCHEMA

@NgModule({
  declarations: [
    AppComponent,
    ServicoCadastroComponent,
    ServicosListagemComponent,
    RealizarServicoComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Adicionando CUSTOM_ELEMENTS_SCHEMA
})
export class AppModule { }
