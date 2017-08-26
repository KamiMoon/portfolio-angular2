import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

import { Task } from '../models/task';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
    private heroesUrl = '/api/tasks';  // URL to web api

    constructor(private http: HttpClient) { }

    get(): Observable<Task[]> {
        return this.http.get<Task[]>(this.heroesUrl);
    }

    getOne(id: String): Observable<Task> {
        return this.http.get<Task>(`${this.heroesUrl}/${id}`);
    }

    update(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.heroesUrl}/${task._id}`, task);
    }

    create(task: Task): Observable<Task> {
        return this.http.post<Task>(this.heroesUrl, task);
    }

    delete(id: String): Observable<Object> {
        return this.http.delete(`${this.heroesUrl}/${id}`);
    }
}
