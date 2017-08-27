import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
    CanActivate, Router, ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Route
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): Promise<boolean> {
        const url = `/${route.path}`;

        return this.checkLogin(url);
    }

    checkLogin(url: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.authService.isLoggedInAsync().then(isLoggedIn => {
                if (!isLoggedIn) {
                    this.router.navigate(['/login']);
                    resolve(false);
                } else {
                    resolve(true);
                }
            });
        });

    }

}
