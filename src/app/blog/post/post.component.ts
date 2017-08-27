import { Component, Input, OnInit } from '@angular/core';

import { Post } from './../blog-model';

@Component({
    selector: 'app-blog-post',
    templateUrl: 'post.component.html'
})

export class PostComponent implements OnInit {
    constructor() { }

    @Input() post: Post = null;
    disqusUrl: String;

    ngOnInit() {
        this.disqusUrl = `http://www.erickizaki.com/blog/${this.post._id}`;
    }
}
