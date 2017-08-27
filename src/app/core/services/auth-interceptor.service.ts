import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/do';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.cookieService.get('token');

        let reqToUse = req;

        if (token) {
            const authHeader = 'Bearer ' + this.cookieService.get('token');
            reqToUse = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        }

        return next.handle(reqToUse).do(event => {
            if (event instanceof HttpResponse) {
                if (event.status === 401) {
                    this.cookieService.delete('token');

                    // TODO - go to login page
                }
            }
        });
    }

}
