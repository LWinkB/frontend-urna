import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CandidatosModel} from "../Models/candidatos.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'

})
export class UrnaApiService {

qtdVotos:any

  constructor(private http: HttpClient) {


  }

  //GET CANDIDATES

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

///UPDATE VOTES OF CANDIDATES

  public insertPresidentVotes($id): Observable<any>{
    return this.http.put<any>(`${environment.api_url}/presidente/${$id}`, this.qtdVotos)
  }

  public insertCongressmanVotes($id): Observable<any>{
    return this.http.put<any>(`${environment.api_url}/deputado-federal/${$id}`, this.qtdVotos)

  }

  public insertStateDeputyVotes($id): Observable<any>{
    return this.http.put<any>(`${environment.api_url}/deputado-estadual/${$id}`, this.qtdVotos)

  }

  public insertSenatorVotes($id): Observable<any>{
    return this.http.put<any>(`${environment.api_url}/senador/${$id}`, this.qtdVotos)

  }
  public insertGovernorVotes($id): Observable<any>{
    return this.http.put<any>(`${environment.api_url}/governador/${$id}`, this.qtdVotos)

  }




}
