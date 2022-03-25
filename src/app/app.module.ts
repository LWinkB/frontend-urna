import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UrnaComponent} from './urna/urna.component';
import { ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CadastroComponent} from './cadastro/cadastro.component';
import {AuthModule} from "./login/auth.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticatedGuard} from "./guards/authenticated.guard";
import {TokenInterceptors} from "./interceptors/token.interceptors";
import {LoginComponent} from "./login/login.component";
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';



@NgModule({
  declarations: [
    AppComponent,
    UrnaComponent,
    CadastroComponent,
    CadastrarCandidatoComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [
    AuthenticatedGuard,
    LoginComponent,

    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptors, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
