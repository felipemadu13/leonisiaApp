import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicos-realizados',
  templateUrl: './servicos-realizados.component.html',
  styleUrls: ['./servicos-realizados.component.css']
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
