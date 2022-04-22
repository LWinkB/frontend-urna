import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NavigateService} from "../../shared/navigate.service";

@Component({
  selector: 'app-profile',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(public auth: AuthService, private navigateService:NavigateService) { }

  ngOnInit(): void {

  }
  redirectToVotation(){
    this.navigateService.navigateToVotation()

  }

  redirectToRegisterCandidate(){
    this.navigateService.navigateToRegisterCandidate()
  }

  redirectToParcialVotation(){
    this.navigateService.navigateToParcialVotes()
  }

}
