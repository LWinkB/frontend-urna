import { Component } from '@angular/core';
import {UrnaApiService} from "./services/urna-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'urna-angular';

  constructor(private urnaApiService: UrnaApiService) {


  }
}
