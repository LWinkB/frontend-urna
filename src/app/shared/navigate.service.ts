import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class NavigateService {

  constructor(private route:Router) { }

  navigateToParcialVotes(){
    this.route.navigate(['/votacao-parcial'])
  }

  navigateToLogin(){
    this.route.navigate(['/login'])
  }

  navigateToVotation(){
    this.route.navigate(['/votação'])
  }

  navigateToProfile(){
    this.route.navigate(['/profile'])
  }

  navigateToRegisterCandidate(){
    this.route.navigate(['/cadastro-candidato'])

  }


}


