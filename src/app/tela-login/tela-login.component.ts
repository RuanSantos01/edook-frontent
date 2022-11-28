import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class TelaLoginComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder) { }
  
  @Input() matricula: string;
  @Input() senha: number;

  nome = "Nome";

  login = false;
  teste = false;

  professor = false;
  aluno = false;
  gestor = false;

  usuarioValidoAluno = {
    nome: "Aluno Ruan Christian",
    matricula: "0000",
    senha: 123
  }

  usuarioValidoProfessor = {
    nome: "Professora Luana Dias",
    matricula: "0000",
    senha: 123
  }

  usuarioValidoGestor = {
    nome: "Gestora Maria Eduarda",
    matricula: "0000",
    senha: 123
  }

  ngOnInit(): void {
  }

  logarAluno(): void {
    this.login = true;
    this.aluno = true;
    this.professor = false;
    this.gestor = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  logarProfessor(): void {
    this.login = true;
    this.professor = true;
    this.aluno = false;
    this.gestor = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  logarGestor(): void {
    this.login = true;
    this.gestor = true;
    this.professor = false;
    this.aluno = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  voltar(): void {
    this.login = false;
  }

  // Div logar 2

  logarAluno2(): void {
    this.teste = false;
    this.aluno = true;
    this.professor = false;
    this.gestor = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  logarProfessor2(): void {
    this.teste = false;
    this.professor = true;
    this.aluno = false;
    this.gestor = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  logarGestor2(): void {
    this.teste = false;
    this.gestor = true;
    this.professor = false;
    this.aluno = false;
    this.matricula = "";
    this.nome = "Nome";
  }

  voltar2(): void {
    this.teste = true;
  }

  // 

  entrar(): void {
    if (this.aluno == true && this.professor == false && this.gestor == false) {
      if (this.matricula == this.usuarioValidoAluno.matricula && this.senha == this.usuarioValidoAluno.senha) {
        console.log('Usuário pode logar')
      } else {
        console.log("Usuário não pode logar")
      }
    }


    else if (this.professor == true && this.aluno == false && this.gestor == false) {
      if (this.matricula == this.usuarioValidoProfessor.matricula && this.senha == this.usuarioValidoProfessor.senha) {
        console.log('Usuário pode logar')
      } else {
        console.log("Usuário não pode logar")
      }
    }

    else if (this.gestor == true && this.aluno == false && this.professor == false) {
      if (this.matricula == this.usuarioValidoGestor.matricula && this.senha == this.usuarioValidoGestor.senha) {
        console.log('Usuário pode logar')
      } else {
        console.log("Usuário não pode logar")
      }
    }

  }

  onChangeMatricula(matricula: string): void {
    if (matricula == this.usuarioValidoAluno.matricula && this.aluno == true) {
      this.nome = this.usuarioValidoAluno.nome;
    } else if (matricula == this.usuarioValidoProfessor.matricula && this.professor == true) {
      this.nome = this.usuarioValidoProfessor.nome;
    } else if (matricula == this.usuarioValidoGestor.matricula && this.gestor == true) {
      this.nome = this.usuarioValidoGestor.nome;
    }
  }

}
