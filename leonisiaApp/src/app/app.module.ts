// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  // Certifique-se de que esta importação está correta
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroScreenComponent } from './pages/cadastroscreen/cadastroscreen.component';
import { ServicosListagemComponent } from './pages/servicos-listagem/servicos-listagem.component';
import { ServicosRealizadosComponent } from './pages/servicos-realizados/servicos-realizados.component';
import { routes } from './app.routes';  // Certifique-se de que as rotas estão sendo importadas corretamente

@NgModule({
  declarations: [
    AppComponent,
    CadastroScreenComponent,
    ServicosListagemComponent,
    ServicosRealizadosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),  // Certifique-se de que o `forRoot` está correto
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
