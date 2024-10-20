import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transacoes } from '../models/Transacoes';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {
  constructor() {}

  getTransactions(): Observable<Transacoes[]> {
    const transactions: Transacoes[] = [
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Cartão de Crédito', valor: 100.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Cartão de Crédito', valor: 100.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Cartão de Crédito', valor: 100.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Cartão de Crédito', valor: 100.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Cartão de Crédito', valor: 100.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Boleto', valor: 50.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Transferência', valor: 200.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Transferência', valor: 200.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Transferência', valor: 200.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Transferência', valor: 200.0 },
      { tipo: 'entrada', data: new Date(), metodoPagamento: 'Transferência', valor: 200.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Pix', valor: 30.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Pix', valor: 30.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Pix', valor: 30.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Pix', valor: 30.0 },
      { tipo: 'saida', data: new Date(), metodoPagamento: 'Pix', valor: 30.0 },
    ];
    return of(transactions);
  }
}
