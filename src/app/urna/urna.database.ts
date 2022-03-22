import { Injectable } from '@angular/core';
import {DatabaseService} from "../core/database.service";

@Injectable({
  providedIn: 'root'
})
export class UrnaDatabase {

  constructor(
    private databaseService: DatabaseService
  ) {

  }


  // login(data: object, callback: any){
  //   this.databaseService.get('votes', data)
  //     .subscribe((res: any) => { callback({data: res}) }, (error: any) => { callback({error}) });
  // }


}
