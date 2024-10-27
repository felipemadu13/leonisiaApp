import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginscreen',
  standalone: true,
  imports: [],
  templateUrl: './loginscreen.component.html',
  styleUrl: './loginscreen.component.css'
})


export class LoginscreenComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }
  alerta() {
    this.alerta = () => {
      alert("clicou")
    }
  }
  goToHome() {
    this.goToHome = () => {
      this.router.navigate(['/home'])
    }
  }
}
