import { Component } from '@angular/core';
import { SiderbarMenuComponent } from "../home/sidebar-menu/siderbar-menu/siderbar-menu.component";
import { FormsModule } from '@angular/forms';  // Import FormsModule aqui!
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [SiderbarMenuComponent, CommonModule,
    FormsModule], 
  providers:[],
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']  // Corrigir 'styleUrl' para 'styleUrls'
})
export class ConfigComponent {
  email: string = '';
  senha: string = '';

  editarCampo(campo: string) {
    if (campo === 'email') {
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput) emailInput.removeAttribute('disabled');
    } else if (campo === 'senha') {
      const senhaInput = document.querySelector('input[type="password"]');
      if (senhaInput) senhaInput.removeAttribute('disabled');
    }
  }
}
