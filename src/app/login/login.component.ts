import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

readonly apiURL!:string

  constructor(private http : HttpClient) {
  this.apiURL ='http://127.0.0.1:8000/api';

  }

  ngOnInit(): void {

  }



  authenticate(){
  this.http.get(`${ this.apiURL }/login`)
    .subscribe(result => console.log(result))
  }


}



