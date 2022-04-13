import {Injectable} from '@angular/core';
import {Observable} from "rxjs";


import {DatabaseService} from "../core/database.service";

@Injectable({
  providedIn: 'root'

})
export class UrnaApiService {

  qtdVotos: any


  constructor(private databaseService: DatabaseService) {

  }

  //GET CANDIDATES

  getPresidentData(number): Observable<any> {
    return this.databaseService.get('/presidente/' + number, [])
  }

  getSenatorData(number): Observable<any> {
    return this.databaseService.get('/senador/' + number, [])
  }

  getGovernorData(number): Observable<any> {
    return this.databaseService.get('/governador/' + number, [])
  }

  getStateDeputyData(number): Observable<any> {
    return this.databaseService.get('/deputado-estadual/' + number, [])
  }

  getCongressmanData(number): Observable<any> {
    return this.databaseService.get('/deputado-federal/' + number, [])
  }


///UPDATE VOTES OF CANDIDATES


  updateVotesOfPresident(id): Observable<any> {
    return this.databaseService.put('/presidente/' + id, this.qtdVotos)
  }

  updateVotesOfCongressman(id): Observable<any> {
    return this.databaseService.put('/deputado-federal/' + id, this.qtdVotos)
  }

  updateVotesOfStateDeputy(id): Observable<any> {
    return this.databaseService.put('/deputado-estadual/' + id, this.qtdVotos)
  }

  updateVotesOfSenator(id): Observable<any> {

    return this.databaseService.put('/senador' + id, this.qtdVotos)
  }

  updateVotesOfGovernor(id): Observable<any> {
    return this.databaseService.put('/governador/' + id, this.qtdVotos)
  }

}
