import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent {
  formData = {
    picture: '',
    name: '',
    gender: '',
    registration: '',
    cpf: '',
    email: '',
    birthDate: '',
    phone: '',
    zipCode: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    password: ''
  }

  constructor(private http: HttpClient) { }

  profileIcon: string = '../../assets/profile.png';

  onPhotoChange(event: any): void {
    const file = event.target.files[0].name;
    this.formData.picture = file;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.profileIcon = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  submitForm() {

    this.http.post('http://localhost:3001/auth/register', this.formData).subscribe((response) => {
      alert('Cadastrado com sucesso')
    }, (error) => {
      alert(error)
    })
  }
}