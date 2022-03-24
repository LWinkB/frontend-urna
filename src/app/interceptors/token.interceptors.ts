import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from "@angular/common/http";


@Injectable()

export class TokenInterceptors implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/')
    const apiUrl: Array<any> = 'http://127.0.0.1:8000/api'.split('/')
    const token = localStorage.getItem('token');

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({setHeaders: {'Authorization': `Bearer ${token}`}});
      return next.handle(newRequest)
    } else {
      return next.handle(request)
    }
  }
}