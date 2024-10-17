import { Component } from '@angular/core';
import { SiderbarMenuComponent } from "../sidebar-menu/siderbar-menu/siderbar-menu.component";
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';
import { Dashboard } from '../../../models/dashboard';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiderbarMenuComponent,CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: []
})
export class HomeComponent {
  dashboard: Dashboard = {	
    saldoGeral: 0,
    entradaDiario: 0,
    entradaMensal: 0,
    saidaDiario: 0,
    saidaMensal: 0,
    balancoDiario: 0,
    balancoMensal: 0
  };
  entrada: string = 'diario';
  saida: string = 'diario';
  balanco: string = 'diario';
  
  constructor(private dashboardService: DashboardService) { }
  
  ngOnInit(): void {
    this.dashboardService.getDashboard().subscribe(data => {
      this.dashboard = data;
    });
  }
    
}

