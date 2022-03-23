import {Component, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, tap} from "rxjs";

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
    private http: HttpClient,
    public formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    })
  }

  ngOnChanges() {}

  UserLogin(){
    this.http.post(this.url, this.loginForm.value).subscribe((res) => {

    }, error => {
      console.log(error['error']['error']);
    });
  }







}



