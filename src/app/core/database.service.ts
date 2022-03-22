import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";


const databaseUrl = 'http://127.0.0.1:8000/api/'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    public httpClient: HttpClient, router: Router, loginService: LoginService
  ) { }

currentDatabaseUrl(){
    return databaseUrl;
}

delete(url:string, data:any){
    return this.httpClient.delete(databaseUrl + url, {params: data}).pipe(tap(resp =>{
      this.msgEmitter(resp);
    },(error => {
      this.msgEmitter(error);
    })))
}


  msgEmitter(data:string){


  }

}
