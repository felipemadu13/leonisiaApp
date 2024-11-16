import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { ServicoRealizadoService } from '@services/servico-realizado.service';

registerLocaleData(localePt); 

@Component({
  selector: 'app-servicos-realizados',
  standalone: true,  
  imports: [CurrencyPipe, DatePipe, CommonModule, SiderbarMenuComponent],
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css'],
  providers: [
    CurrencyPipe,
    DatePipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class ServicosRealizadosComponent implements OnInit {
  servicosRealizados: any[] = [];

  constructor(private servicosRealizadosService: ServicoRealizadoService, private datePipe: DatePipe) { }

   ngOnInit(): void {
    this.servicosRealizadosService.getServicos().subscribe(data => {
      this.servicosRealizados = data;
    });
    
  }
}
