import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'

})
export class UrnaApiService {


  constructor(private http: HttpClient) {


  }

  getPresidentInformations() {

    return this.http.get<any>(`${environment.api_url}/presidente`).subscribe(response =>{
     response.numero
    })

  }

//
//   getSenatorInformations() {
//     return this.http.get<any>(`${environment.api_url}/senador`)
//   }
//
//   getGovernorInformations() {
//     return this.http.get<any>(`${environment.api_url}/governador`)
//   }
//
//   getStateDeputyInformation() {
//     return this.http.get<any>(`${environment.api_url}/deputado-estadual`)
//   }
//
//   registerCongressman() {
//     return this.http.get<any>(`${environment.api_url}/deputado-federal`)
//   }
//
//
 }
