// servicos-realizados.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'; 
import { LOCALE_ID } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-servicos-realizados',
  standalone: true,  
  imports: [CurrencyPipe, CommonModule],  
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css'],
  providers: [
    CurrencyPipe,
    { provide: 'LOCALE_ID', useValue: 'pt-BR' },
  ]
})


export class ServicosRealizadosComponent implements OnInit {
  servicosRealizados: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/api/servicos-realizados').subscribe(data => {
      this.servicosRealizados = data;
    });
  }
}
