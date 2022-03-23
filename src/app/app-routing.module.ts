import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component'
import {CadastroComponent} from "./cadastro/cadastro.component";
import {UrnaComponent} from "./urna/urna.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'cadastro', component: CadastroComponent},
      {path: 'votação', component: UrnaComponent}
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
