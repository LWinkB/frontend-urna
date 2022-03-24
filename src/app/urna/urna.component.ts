import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.scss']
})
export class UrnaComponent implements OnInit {

  url = '127.0.0.1:8000/api/sair'

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

  }

  logout(){
    this.router.navigate(['/login']);
  }

}
