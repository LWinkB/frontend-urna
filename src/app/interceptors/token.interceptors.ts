import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable()

export class TokenInterceptors implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.api_url.split('/')  //pegando a url base da api e do front para compara-los e adicionar o token se for a mesma
    const token = localStorage.getItem('token');

//se a minha url e a url da minha api na posição 2 forem as mesmas, manda o token. (request para o backend)
    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({setHeaders: {'Authorization': `Bearer ${token}`} });
      return next.handle(newRequest);
    } else {
      return next.handle(request);
    }

  }
}
