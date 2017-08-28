import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    private url = '/api/users';  // URL to web api

    constructor(private http: HttpClient) { }

    get(): Promise<User> {
        return this.http.get<User>(`${this.url}/me`).toPromise();
    }

    profile(id: String): Promise<User> {
        return this.http.get<User>(`${this.url}/profile/${id}`).toPromise();
    }

    update(user: User): Promise<User> {
        return this.http.put<User>(`${this.url}/${user._id}`, user).toPromise();
    }

    create(user: User) {
        return this.http.post(this.url, user).toPromise();
    }

    delete(id: String): Promise<Object> {
        return this.http.delete(`${this.url}/${id}`).toPromise();
    }

    changePassword(id: String, oldPassword: String, newPassword: String): Promise<String> {
        return this.http.put<String>(`${this.url}/${id}/password`, { oldPassword: oldPassword, newPassword: newPassword }).toPromise();
    }
}
