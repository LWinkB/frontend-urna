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
}
