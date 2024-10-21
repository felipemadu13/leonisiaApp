import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginscreen',
  standalone: true,
  imports: [FormsModule ],
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
    if (this.email && this.password) {
      this.router.navigate(['/home']);
    } else {
      
      alert("Por favor, preencha o e-mail e a senha.");
    }
  }
}
