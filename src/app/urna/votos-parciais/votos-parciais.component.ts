import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {DatabaseService} from "../../core/database.service";
import {NavigateService} from "../../shared/navigate.service";
import {CandidatosModel} from "../../Models/candidatos.model";

@Component({
  selector: 'app-votos-parciais',
  templateUrl: './votos-parciais.component.html',
  styleUrls: ['./votos-parciais.component.scss']
})
export class VotosParciaisComponent implements OnInit {

  constructor(public navigateService: NavigateService,
              public auth: AuthService,
              private databaseService: DatabaseService
  ) {
  }

  showDelete: boolean = true
  candidate = new CandidatosModel()
  candidatesPresident: any
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
    return this.databaseService.get('/deputado-estadual/', [])
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

  deleteVotesOfPresident(id: any) {
    this.databaseService.delete('/presidente/' + id, []).subscribe(response => {
      this.getPresidents()

    })
  }

  deleteVotesOfSenator(id: any) {
    this.databaseService.delete('/senador/' + id, []).subscribe(response => {
      this.getSenators()
    })

  }

  deleteVotesOfCongressman(id: any) {
    this.databaseService.delete('/deputado-federal/' + id, []).subscribe(response => {
      this.getCongressmans()
    })

  }

  deleteVotesOfDeputy(id: any) {
    this.databaseService.delete('/deputado-estadual/' + id, []).subscribe(response => {
      this.getStateDeputys()
    })
  }

  deleteVotesOfGovernor(id: any) {
    this.databaseService.delete('/governador/' + id, []).subscribe(response => {
      this.getGovernors()
    })

  }

}

