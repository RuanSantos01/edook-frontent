import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaRegistroComponent } from './tela-registro/tela-registro.component';
import { TelaLoginFinalComponent } from './tela-login-final/tela-login-final.component';


// Material Components
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroProfessorComponent } from './cadastro-professor/cadastro-professor.component';
import { CadastroCoordenadorComponent } from './cadastro-coordenador/cadastro-coordenador.component';
import { CadastroGestorComponent } from './cadastro-gestor/cadastro-gestor.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroResponsavelComponent } from './cadastro-responsavel/cadastro-responsavel.component';
import { VerificarIdComponent } from './verificar-id/verificar-id.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: TelaLoginFinalComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contato', component: ContatoComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaRegistroComponent,
    TelaLoginFinalComponent,
    LandingPageComponent,
    AboutComponent,
    ContatoComponent,
    CadastroProfessorComponent,
    CadastroCoordenadorComponent,
    CadastroGestorComponent,
    CadastroAlunoComponent,
    CadastroResponsavelComponent,
    VerificarIdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatStepperModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }
