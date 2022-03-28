import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";


@Injectable({
  providedIn: 'root'
})


export class CadastroCandidatoService {

  constructor(private http: HttpClient, private router: Router) {

  }

  registerPresident(information: { nome: string, numero: string, partido: string, imgCandidato: string, qtdVotos: string }): Observable<any> {

    return this.http.post<any>(`${environment.api_url}/presidente`, information).pipe(tap(data => {
      })
    );
  }

  registerSenator(information: { nome: string, numero: string, partido: string, imgCandidato: string, qtdVotos: string }): Observable<any> {

    return this.http.post<any>(`${environment.api_url}/senador`, information).pipe(tap(data => {
      })
    );
  }

  registerGovernor(information: { nome: string, numero: string, partido: string, imgCandidato: string, qtdVotos: string }): Observable<any> {

    return this.http.post<any>(`${environment.api_url}/governador`, information).pipe(tap(data => {
      })
    );
  }

  registerStateDeputy(information: { nome: string, numero: string, partido: string, imgCandidato: string, qtdVotos: string }): Observable<any> {

    return this.http.post<any>(`${environment.api_url}/deputado-estadual`, information).pipe(tap(data => {
      })
    );
  }

  registerCongressman(information: { nome: string, numero: string, partido: string, imgCandidato: string, qtdVotos: string }): Observable<any> {

    return this.http.post<any>(`${environment.api_url}/deputado-federal`, information).pipe(tap(data => {
      })
    );
  }


  userLogged(): boolean {
    return !!localStorage.getItem('user');  //simplificado ? false : true

  }
}
