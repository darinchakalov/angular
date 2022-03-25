import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
const API_URL = environment.apiURl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let reqStream$ = next.handle(request);

    if (request.url.startsWith('/api')) {
      reqStream$ = next.handle(
        request.clone({
          url: request.url.replace('/api', API_URL),
          withCredentials: true,
        })
      );
    }
    return reqStream$.pipe(
      catchError((err) => {
        console.log(err);
        throw new Error(err);
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
