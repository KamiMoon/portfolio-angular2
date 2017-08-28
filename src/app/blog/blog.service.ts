import { BlogSearchParams, BlogQueryResult, Keyword, Post } from './blog-model';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
    private url = '/api/blog';  // URL to web api

    constructor(private http: HttpClient) { }

    query(searchParams: BlogSearchParams): Observable<BlogQueryResult> {
        return this.http.get<BlogQueryResult>(this.url);
    }

    get(id: String): Observable<Post> {
        return this.http.get<Post>(`${this.url}/${id}`);
    }

    update(post: Post): Observable<Post> {
        return this.http.put<Post>(`${this.url}/${post._id}`, post);
    }

    create(post: Post): Promise<Post> {
        return this.http.post<Post>(this.url, post).toPromise();
    }

    delete(id: String): Observable<Object> {
        return this.http.delete(`${this.url}/${id}`);
    }

    publishToMailingList(id: String) {
        return this.http.get(`${this.url}/publish/${id}`);
    }

    getKeywords(): Observable<Keyword[]> {
        return this.http.get<Keyword[]>(`${this.url}/keywords`);
    }

}
