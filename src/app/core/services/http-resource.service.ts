/* Wrapper over HTTP Client that only returns Promises */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpResource {
    constructor(private http: HttpClient) { }

    get<T>(url: string): Promise<T> {
        return this.http.get<T>(url).toPromise().then();
    }

    post<T>(url: string, body: any): Promise<T> {
        return this.http.post<T>(url, body).toPromise();
    }

    put<T>(url: string, body: any): Promise<T> {
        return this.http.put<T>(url, body).toPromise();
    }

    delete<T>(url: string): Promise<T> {
        return this.http.delete<T>(url).toPromise();
    }

}
