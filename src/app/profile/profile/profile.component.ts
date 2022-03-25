import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {environment} from "../../../environments/environment";
import {UserModel} from "../../login/user.model";
import {LoginComponent} from "../../login/login.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user!: UserModel
  constructor(private auth: AuthService, private http: HttpClient,  public login: LoginComponent, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>(`${environment.api_url}/user`).subscribe(data=>{
      console.log(data);
      this.user = data.user
    })
  }

  redirectToVotation(){
    this.router.navigate(['/votação']);
  }

  redirectToRegisterCandidate(){
    this.router.navigate(['/cadastro-candidato'])
  }


}
