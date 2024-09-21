import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public email!: string;
  public senha!: string;

  login() {
    if (this.email && this.senha){
      alert("Login realizado com sucesso!");
    }
  }
}
