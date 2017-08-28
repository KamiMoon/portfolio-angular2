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

    private currentUser = new User();

    private loadingUserPromise: Promise<User> = null;

    constructor(private cookieService: CookieService, private http: HttpClient, private userService: UserService) {

        if (this.getToken()) {
            this.loadingUserPromise = this.getUser();

            this.loadingUserPromise.then(user => {
                this.currentUser = user;
                this.loadingUserPromise = null;
            });
        }
    }

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


    createUser(user: User) {
        return new Promise((resolve, reject) => {

            this.userService.create(user).then(response => {
                this.cookieService.set('token', response['token']);

                this.loadingUserPromise = this.getUser();
                this.loadingUserPromise.then(lookedUpUser => {
                    this.currentUser = lookedUpUser;
                    this.loadingUserPromise = null;
                    resolve(lookedUpUser);
                });
            }).catch(err => {
                reject(err);
            });
        });
    }

    isLoggedIn() {
        return this.currentUser && this.currentUser.roles;
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
            } else if (this.currentUser && this.currentUser.roles) {
                resolve(true);
            } else {
                resolve(false);
            }

        });
    }

    isAdmin() {
        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        const pos = this.currentUser.roles.map(e => {
            return e.role;
        }).indexOf('admin');

        return pos !== -1;
    }

    hasRole(role) {
        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        const pos = this.currentUser.roles.map(function (e) {
            return e.role;
        }).indexOf(role);

        return pos !== -1;
    }

    hasRoles(roles) {
        let hadAny = false;

        if (!this.currentUser || !this.currentUser.roles) {
            return false;
        }

        for (let i = 0; i < roles.length; i++) {

            const pos = this.currentUser.roles.map(function (e) {
                return e.role;
            }).indexOf(roles[i]);

            if (pos !== -1) {
                hadAny = true;
                break;
            }
        }

        return hadAny;
    }

    isMine(userId) {
        if (!this.currentUser || !userId) {
            return false;
        }

        return this.currentUser._id === userId;
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
