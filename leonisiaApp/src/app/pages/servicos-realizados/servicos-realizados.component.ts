// servicos-realizados.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { ServicosRealizadosService } from '@services/servicos-realizados.service';
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component'; // Importação do componente da Sidebar

registerLocaleData(localePt); 

@Component({
  selector: 'app-servicos-realizados',
  standalone: true,  
  imports: [CurrencyPipe, CommonModule, SiderbarMenuComponent], // Adição da Sidebar nos imports  
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class ServicosRealizadosComponent implements OnInit {
  servicosRealizados: any[] = [];

  constructor(private servicosRealizadosService: ServicosRealizadosService) { }

  ngOnInit(): void {
    this.servicosRealizadosService.getServicosRealizados().subscribe(data => {
      this.servicosRealizados = data;
    });
  }
}
