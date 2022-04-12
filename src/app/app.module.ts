import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxMaskModule,} from 'ngx-mask';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UrnaComponent} from './urna/urna.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {VotosParciaisComponent} from './urna/votos-parciais/votos-parciais.component'
import {CadastrarCandidatoComponent} from './cadastrar-candidato/cadastrar-candidato.component';
import {MenuComponent} from "./profile/profile/menu.component";
import {LoginComponent} from "./login/login.component";


import {AuthenticatedGuard} from "./guards/authenticated.guard";
import {NavigateService} from "./shared/navigate.service";
import {RouterModule} from "@angular/router";
import {AuthModule} from "./login/auth.module";




@NgModule({
  declarations: [
    AppComponent,
    UrnaComponent,
    CadastroComponent,
    CadastrarCandidatoComponent,
    VotosParciaisComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false //mantém a mascara ao salvar
    }),


  ],
  providers: [
    AuthenticatedGuard,
    LoginComponent,
    MenuComponent,
    NavigateService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
