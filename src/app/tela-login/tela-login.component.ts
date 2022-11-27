import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
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

  login = false;
  teste = false;

  ngOnInit(): void {
  }

  logarAluno(): void {
    this.login = true;
  }

  logarProfessor(): void {
    this.login = true;
  }

  logarGestor(): void {
    this.login = true;
  }

  voltar(): void {
    this.login = false;
  }

  // Div logar 2

  logarAluno2(): void {
    this.teste = false;
  }

  logarProfessor2(): void {
    this.teste = false;
  }

  logarGestor2(): void {
    this.teste = false;
  }

  voltar2(): void {
    this.teste = true;
  }

}
