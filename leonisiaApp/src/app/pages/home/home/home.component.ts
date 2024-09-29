import { Component } from '@angular/core';
import { SiderbarMenuComponent } from "../sidebar-menu/siderbar-menu/siderbar-menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SiderbarMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
