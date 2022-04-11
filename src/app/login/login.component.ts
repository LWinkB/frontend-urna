import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {NavigateService} from "../shared/navigate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorCredentials = false

  constructor(public formBuilder: FormBuilder,
              private loginService: AuthService,
              public navigateService: NavigateService) {
  }


  ngOnInit() { //Form builder para receber as informações passadas pelo usuário no html.
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required]]
    })
  }

  userLogin() {
    // chamando a função la do service, pegando as informações do formulario e retornando a rota da urna se as credenciais forem corretas.
    this.loginService.login(this.loginForm.value).subscribe(
      (res) => {
        this.navigateService.navigateToMenu()
      },
      (errorResponse: HttpErrorResponse) => {

        if (errorResponse.status === 401) {
          this.errorCredentials = true
        }
      }
    )
  }

  userRegister() {
    this.navigateService.navigateToRegisterUser()
  }


}



