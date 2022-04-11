import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {DatabaseService} from "../../core/database.service";
import {NavigateService} from "../../shared/navigate.service";

@Component({
  selector: 'app-votos-parciais',
  templateUrl: './votos-parciais.component.html',
  styleUrls: ['./votos-parciais.component.scss']
})
export class VotosParciaisComponent implements OnInit {

  constructor(public navigateService: NavigateService,
              public auth:AuthService,
              private databaseService: DatabaseService
  ) { }

  candidatesPresident : any
  candidatesCongressman: any
  candidatesSenator: any
  candidatesDeputy: any
  candidatesGovernor: any


  ngOnInit(): void {
    this.getPresidents()
    this.getSenators()
    this.getGovernors()
    this.getStateDeputys()
    this.getCongressmans()
  }



  public getPresidentInformations(): Observable<any> {
   return this.databaseService.get('/presidente/', [])

    }

  public getSenatorInformations(): Observable<any> {
    return this.databaseService.get('/senador/', [])

    }

  public getGovernorInformations(): Observable<any> {
    return this.databaseService.get('/governador/', [])
    }

  public getStateDeputyInformation(): Observable<any> {
    return  this.databaseService.get('/deputado-estadual/', [])
    }

  public getCongressmanInformation(): Observable<any> {
    return this.databaseService.get('/deputado-federal/', [])

    }


  getPresidents(): void {
    this.getPresidentInformations().subscribe(
      data => {
        this.candidatesPresident = data
      })
  }

  getSenators() {
    this.getSenatorInformations().subscribe(data => {
      this.candidatesSenator = data
      console.log(data)

    })
  }

  getGovernors() {
    this.getGovernorInformations().subscribe(data => {
      this.candidatesGovernor = data

    })
  }

  getStateDeputys() {
    this.getStateDeputyInformation().subscribe(data => {
      this.candidatesDeputy = data
    })
  }

  getCongressmans() {
    this.getCongressmanInformation().subscribe(data => {
      this.candidatesCongressman = data

    })
  }
  }

