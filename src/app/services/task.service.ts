import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from '../models/task';

@Injectable()
export class TaskService {
    private heroesUrl = 'api/tasks';  // URL to web api

    constructor(private http: Http) { }

    get(): Promise<Task[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Task[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getOne(id: number): Promise<Task> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Task)
            .catch(this.handleError);
    }

    private headers = new Headers({ 'Content-Type': 'application/json' });

    update(task: Task): Promise<Task> {
        const url = `${this.heroesUrl}/${task.id}`;
        return this.http
            .put(url, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(() => task)
            .catch(this.handleError);
    }

    create(task: Task): Promise<Task> {
        return this.http
            .post(this.heroesUrl, JSON.stringify(task), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Task)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}