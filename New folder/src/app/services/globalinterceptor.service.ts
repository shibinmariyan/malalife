import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalinterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let ignoretoken = ['login', 'register'], currntReq = req;
    if (this.auth.isAuthorized) {
      let token = this.auth.getToken();
      currntReq = req.clone({ setHeaders: { "Authorization": "Bearer " + token } });
    } else {
console.log("globalreport failed");
    }
    return next.handle(currntReq).pipe(
      tap((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          if (ev.body && ev.body.error === 9999) {
            this.auth.setToken("");
            console.log("token pass fail");
            this.router.navigate(["/login"])

          }
        }
      }), catchError(response => {
        if (response instanceof HttpErrorResponse) {
          console.log("Http Error Occured", response);
        }
        return throwError(response);
      })
    )
  }

}
