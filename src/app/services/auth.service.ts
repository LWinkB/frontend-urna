import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {
  }

  //verificando se tem um usuário logado
  userLogged(): boolean {
    return !!localStorage.getItem('user');  //simplificado ? false : true

  }

  login(credentials: { email: string, password: string }): Observable<any> {

    //logica para pegar os dados la do backend
    return this.http.post<any>(`${environment.api_url}/login`, credentials).pipe(tap(data => {
        localStorage.setItem('token', data.token); //pegando o token ja critografado e setando no localStorage.
        localStorage.setItem('user', btoa(JSON.stringify(data.user))); // pegando os dados do usuario e encriptografando.
      })
    );
  }

  logout() {
    this.http.get(`${environment.api_url}/logout`).subscribe(response => {
      console.log(response);
      localStorage.clear();
      this.router.navigate(['/login'])
    })
  }

  getUser() {
    return localStorage.getItem('user') ? JSON.parse(atob(<string>localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.api_url}/user`).toPromise()
      .then<any>(data =>{
        if (data.user){
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true
        }
        return false
      });
  }

}



