import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CandidatosModel} from "../../Models/candidatos.model";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ProfileComponent} from "../../profile/profile/profile.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-votos-parciais',
  templateUrl: './votos-parciais.component.html',
  styleUrls: ['./votos-parciais.component.scss']
})
export class VotosParciaisComponent implements OnInit {

  constructor(private http: HttpClient, public profile: ProfileComponent, public auth:AuthService) { }

  candidatesPresident : any
  candidatesCongressman: any
  candidatesSenator: any
  candidatesDeputy: any
  candidatesGovernor: any

  candidateId: number

  ngOnInit(): void {
    this.getPresidents()
    this.getSenators()
    this.getGovernors()
    this.getStateDeputys()
    this.getCongressmans()
  }



  public getPresidentInformations(): Observable<CandidatosModel> {
      return this.http.get<any>(`${environment.api_url}/presidente/`)
    }

  public getSenatorInformations(id: number): Observable<CandidatosModel> {
      return this.http.get<any>(`${environment.api_url}/senador/` )
    }

  public getGovernorInformations(id: number): Observable<CandidatosModel> {
      return this.http.get<any>(`${environment.api_url}/governador/`)
    }

  public getStateDeputyInformation(id: number): Observable<CandidatosModel> {
      return this.http.get<any>(`${environment.api_url}/deputado-estadual/`)
    }

  public getCongressmanInformation(id: number): Observable<CandidatosModel> {
      return this.http.get<any>(`${environment.api_url}/deputado-federal/`)
    }



  getPresidents(): void {
    this.getPresidentInformations().subscribe(
      data => {
        this.candidatesPresident = data
      })
  }

  getSenators() {
    this.getSenatorInformations(this.candidateId).subscribe(data => {
      this.candidatesSenator = data
      console.log(data)

    })
  }

  getGovernors() {
    this.getGovernorInformations(this.candidateId).subscribe(data => {
      this.candidatesGovernor = data

    })
  }

  getStateDeputys() {
    this.getStateDeputyInformation(this.candidateId).subscribe(data => {
      this.candidatesDeputy = data
    })
  }

  getCongressmans() {
    this.getCongressmanInformation(this.candidateId).subscribe(data => {
      this.candidatesCongressman = data

    })
  }
  }

