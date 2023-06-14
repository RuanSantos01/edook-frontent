import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TelaLoginFinalComponent } from './tela-login-final/tela-login-final.component';
import { AboutComponent } from './about/about.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: TelaLoginFinalComponent },
  { path: 'register/student', component: CadastroAlunoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contato', component: ContatoComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
