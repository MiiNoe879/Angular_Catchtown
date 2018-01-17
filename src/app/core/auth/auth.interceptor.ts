import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    this.token = sessionStorage.getItem('token');
    if (Boolean(this.token)) {
      request = request.clone({headers: request.headers.set('Authorization', `Token ${this.token}`)});
      return next.handle(request);
    } else {
      return next.handle(request);
    }
  }
}
