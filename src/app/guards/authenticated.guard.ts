import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {NavigateService} from "../shared/navigate.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router, navigateService: NavigateService) {
  }

//Metodo de proteção de rotas pego no angular docs
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.auth.userLogged()) {  //verificando se tem um usuario logado, e sim, ok.
      return true;
    }
    this.router.navigate(['/login']); //se não, redireciona para /login
    return false;

  }



}
