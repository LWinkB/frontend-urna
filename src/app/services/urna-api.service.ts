import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CandidatosModel} from "../Models/candidatos.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'

})
export class UrnaApiService {


  constructor(private http: HttpClient) {


  }

  public getPresidentInformations(numero: any): Observable<CandidatosModel> {
    return this.http.get<any>(`${environment.api_url}/presidente/` + numero)
  }

  public getSenatorInformations(numero: any): Observable<CandidatosModel> {
    return this.http.get<any>(`${environment.api_url}/senador/` + numero)
  }

  public getGovernorInformations(numero: any): Observable<CandidatosModel> {
    return this.http.get<any>(`${environment.api_url}/governador/` + numero)
  }

  public getStateDeputyInformation(numero: any): Observable<CandidatosModel> {
    return this.http.get<any>(`${environment.api_url}/deputado-estadual/` + numero)
  }

  public getCongressmanInformation(numero: any): Observable<CandidatosModel> {
    return this.http.get<any>(`${environment.api_url}/deputado-federal/` + numero)
  }

}
