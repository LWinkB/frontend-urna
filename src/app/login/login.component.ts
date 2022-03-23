import {Component, OnChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnChanges {
  url = 'http://127.0.0.1:8000/api/login';

  public loginForm: FormGroup;
  public token: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
    public formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required])
    })
  }

  ngOnChanges() {
  }

  userLogin() {
    this.http.post(this.url, this.loginForm.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/votação'])
        console.log(res)
      }
    }, error => {
     alert('Credenciais inválidas! Faça o seu cadastro para continuar para a etapa de votação')
    });
  }

  userRegister() {
    this.router.navigate(['/cadastro'])
  }


}



