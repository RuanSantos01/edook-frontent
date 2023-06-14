import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tela-login-final',
  templateUrl: './tela-login-final.component.html',
  styleUrls: ['./tela-login-final.component.css']
})
export class TelaLoginFinalComponent {

  formData = {
    matricula: '',
    senha: ''
  };


  constructor(private http: HttpClient) { }


  submitForm() {
    console.log(this.formData)
    const bodyDT = {
      registration: this.formData.matricula,
      password: this.formData.senha
    }

    this.http.post('http://localhost:3001/auth/login', bodyDT).subscribe((response) => {
      alert('logado com suceso!')
    }, (error) => {
      alert('Credenciais incorretas')
    })
  }

}

