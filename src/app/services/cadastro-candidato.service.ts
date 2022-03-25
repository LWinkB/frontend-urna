import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CadastroCandidatoService {

  constructor(private http: HttpClient, private router: Router) {

  }

  registerCandidate(params: {nome:string, numero:number, partido:string, imgCandidato: string}) {
    this.http.post<any>(`${environment.api_url}/cadastro`, params).pipe(tap(data =>{

    }))

  }
}
