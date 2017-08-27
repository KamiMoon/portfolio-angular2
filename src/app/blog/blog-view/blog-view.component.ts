import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from './../blog.service';
import { Post, BlogSearchParams, BlogQueryResult } from './../blog-model';

@Component({
    selector: 'app-blog-view',
    templateUrl: 'blog-view.component.html'
})

export class BlogViewComponent implements OnInit {
    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    contentLoaded: Boolean = false;
    post: Post = null;



    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.loadPost(id);
    }

    loadPost(id) {
        this.blogService.get(id).subscribe(post => {
            this.post = post;
            this.contentLoaded = true;
        });
    }

    delete() {

    }

    publishToMailingList() {

    }
}
