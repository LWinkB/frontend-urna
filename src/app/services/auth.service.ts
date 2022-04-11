import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {UserModel} from "../Models/user.model";
import {NavigateService} from "../shared/navigate.service";
import {DatabaseService} from "../core/database.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private navigateService: NavigateService, private databaseService: DatabaseService) {
  }

  //verificando se tem um usuário logado
  userLogged(): boolean {
    return !!localStorage.getItem('user');  //simplificado ? false : true
  }


  login(credentials: { email: string, password: string }): Observable<any> {
    return this.databaseService.post('/login',credentials).pipe(tap(res=>{
      localStorage.setItem('token', res.token); //pegando o token e colocando no localStorage
      localStorage.setItem('user', res.user.email); //pegando os dados do usuário e colocando no localStorage (OBJETO)
      console.log(res.user)
    }))
  }

  logout():void{
    this.databaseService.get('/logout', []).subscribe(res=>{
      localStorage.clear();
      this.navigateService.navigateToLogin()
    })
  }


  getUser(): UserModel {
    return localStorage.getItem('user') ? JSON.parse(atob(<string>localStorage.getItem('user'))) : null;
  }


  // setUser(): Promise<boolean> {
  //   return this.http.get<any>(`${environment.api_url}/user`).toPromise()
  //     .then<any>(data => {
  //       if (data.user) {
  //         localStorage.setItem('user', btoa(JSON.stringify(data.user)));
  //         return true
  //       }
  //       return false
  //     });
  // }

}



