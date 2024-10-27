import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { SiderbarMenuComponent } from '../home/sidebar-menu/siderbar-menu/siderbar-menu.component';
import { TransacoesService } from '../../services/transacoes.service';

registerLocaleData(localePt); 

@Component({
  selector: 'app-servicos-realizados',
  standalone: true,  
  imports: [CurrencyPipe, CommonModule, SiderbarMenuComponent],
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})
export class ServicosRealizadosComponent implements OnInit {
  servicosRealizados: any[] = [];

  constructor(private transacoesService: TransacoesService) { }

  ngOnInit(): void {
    this.transacoesService.getTransactions().subscribe((data: any[]) => {
      // Filtrar as transações que possuem 'ServicosRealizados'
      const servicos = data
        .filter(transacao => transacao.ServicosRealizados)  // Filtra as transações com 'ServicosRealizados'
        .map(transacao => transacao.ServicosRealizados)     // Extrai o array 'ServicosRealizados'
        .flat();                                            // Achata os arrays em um único nível

      this.servicosRealizados = servicos;
    });
  }
}
