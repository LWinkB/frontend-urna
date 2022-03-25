import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component'
import {CadastroComponent} from "./cadastro/cadastro.component";
import {UrnaComponent} from "./urna/urna.component";

import {AuthenticatedGuard} from "./guards/authenticated.guard";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'votação', component: UrnaComponent, canActivate: [AuthenticatedGuard]}, //Proteção da rota. Só usuários com token.
      {path: 'logout',  redirectTo: 'login'}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
