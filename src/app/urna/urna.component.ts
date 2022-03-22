import { Component, OnInit } from '@angular/core';
import {UrnaDatabase} from "./urna.database";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  constructor(
    private urnaDatabase: UrnaDatabase
  ) { }

  ngOnInit(): void {
    let data: object = {
      name: ''
    }

    //   this.urnaDatabase.getVotes(data,(response: { error: any; data: any; }) => {
    //     if (response.error) {
    //
    //     } else{
    //       response.data;
    //     }
    //   })/
  }

}
