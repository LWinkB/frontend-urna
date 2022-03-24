import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UrnaComponent} from './urna/urna.component';
import { ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CadastroComponent} from './cadastro/cadastro.component';
import {AuthModule} from "./login/auth.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    UrnaComponent,
    CadastroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,


  ],
  providers: [HttpClientModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
