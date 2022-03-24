import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router: Router,
              private http: HttpClient,
              public formBuilder: FormBuilder,
              private loginService: LoginService,) {}


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required]]
    })
  }

  userLogin(){
    this.loginService.login(this.loginForm.value).subscribe(
      (response) => { console.log(response); },
    (errorResponse: HttpErrorResponse) => {
      console.log(errorResponse)}
    );

  }


  userRegister() {
    this.router.navigate(['/cadastro'])
  }


}



