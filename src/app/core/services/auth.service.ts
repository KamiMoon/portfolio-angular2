import { User } from './../models/user';
import { Injectable } from '@angular/core';

import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { CookieService } from 'ngx-cookie-service';
import { UserService } from './user.service';

import 'rxjs/add/operator/toPromise';



@Injectable()
export class AuthService {

    currentUser = new User();

    // Tutorial
    isLoggedIn = false;
    redirectUrl: String;

    constructor(private cookieService: CookieService, private http: HttpClient, private userService: UserService) {

        // if (this.getToken()) {
        //     this.getUser().subscribe(user => {
        //         this.currentUser = user;
        //     });
        // }
    }

    // Tutorial
    login(email: String, password: String) {
        //return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);

        const request = this.http.post('/auth/local', {
            email: email,
            password: password
        }).toPromise();

        request.then(response => {
            this.cookieService.set('token', response['token']);
            this.isLoggedIn = true;
        });

        request.catch(err => {
            this.logout();
        });

        return request;
    }

    logout(): void {
        this.isLoggedIn = false;
        this.cookieService.delete('token');
    }

    // logout() {
    //     this.cookieService.delete('token');
    //     this.currentUser = new User();
    // }

    createUser() {
        // TODO
    }

    getCurrentUser() {
        return this.currentUser;
    }

    getToken() {
        return this.cookieService.get('token');
    }

    getUser(): Promise<User> {
        return this.userService.get();
    }




}
