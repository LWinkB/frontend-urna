import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://127.0.0.1:8000/api/login';
  constructor(
  ) {
  }


  // UserLogin(email:string, password:string){
  //     return this.http.post(this.url, 'email' + 'password');
  //    }

}
