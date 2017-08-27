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

    loadingUserPromise: Promise<User> = null;

    constructor(private cookieService: CookieService, private http: HttpClient, private userService: UserService) {

        if (this.getToken()) {
            this.loadingUserPromise = this.getUser();

            this.loadingUserPromise.then(user => {
                this.currentUser = user;
                this.loadingUserPromise = null;
            });
        }
    }

    // Tutorial
    login(email: String, password: String) {

        return new Promise((resolve, reject) => {
            const request = this.http.post('/auth/local', {
                email: email,
                password: password
            }).toPromise();

            request.then(response => {
                this.cookieService.set('token', response['token']);

                this.loadingUserPromise = this.getUser();
                this.loadingUserPromise.then(user => {
                    this.currentUser = user;
                    this.loadingUserPromise = null;
                    resolve();
                });
            });

            request.catch(err => {
                this.logout();
                reject(err);
            });
        });
    }

    logout(): void {
        this.cookieService.delete('token');
        this.currentUser = new User();
    }

    createUser() {
        // TODO
    }

    isLoggedInAsync(): Promise<Boolean> {
        return new Promise<Boolean>((resolve, reject) => {

            if (this.loadingUserPromise) {
                this.loadingUserPromise.then(() => {
                    resolve(true);
                })
                    .catch(() => {
                        resolve(false);
                    });
            } else if (this.currentUser && this.currentUser.roles.length) {
                resolve(true);
            } else {
                resolve(false);
            }

        });
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
