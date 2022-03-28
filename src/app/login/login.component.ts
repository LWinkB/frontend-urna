import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorCredentials = false

  constructor(private router: Router,
              private http: HttpClient,
              public formBuilder: FormBuilder,
              private loginService: AuthService,) {
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
      (response) => {
        this.router.navigate(['/profile'])
      },
      (errorResponse: HttpErrorResponse) => {

        if (errorResponse.status === 401) {
          this.errorCredentials = true
        }
      }
    )
  }

  userRegister() {
    this.router.navigate(['/cadastro'])

  }


}



