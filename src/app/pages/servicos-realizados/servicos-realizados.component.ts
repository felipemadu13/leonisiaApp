import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';  // Importando DatePipe
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { TransacoesService } from '../../services/transacoes.service';

registerLocaleData(localePt); 

@Component({
  selector: 'app-servicos-realizados',
  standalone: true,  
  imports: [CurrencyPipe, DatePipe, CommonModule, SiderbarMenuComponent],  // Adicionando DatePipe aos imports
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css'],
  providers: [
    CurrencyPipe,
    DatePipe,  // Adicionando DatePipe aos providers
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class ServicosRealizadosComponent implements OnInit {
  servicosRealizados: any[] = [];

  constructor(private transacoesService: TransacoesService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.transacoesService.getTransactions().subscribe((data: any[]) => {
      // Filtrar as transações que possuem 'ServicosRealizados'
      this.servicosRealizados = data.map(item => {
        // Formatando a data usando o DatePipe
        item.data_pagamento = this.datePipe.transform(item.data_pagamento, 'dd/MM/yyyy');
        return item;
      });
    });
  }
}
