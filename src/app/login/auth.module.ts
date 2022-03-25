import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";


import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login.component";
import {ProfileComponent} from "../profile/profile/profile.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService, HttpClientModule
  ]
})
export class AuthModule {
}
