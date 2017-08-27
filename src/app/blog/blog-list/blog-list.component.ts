import { BlogService } from './../blog.service';
import { Post, BlogSearchParams, BlogQueryResult } from './../blog-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html'
})
export class BlogListComponent implements OnInit {

    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    searchParams: BlogSearchParams = new BlogSearchParams(1, 10, 0);

    posts: Post[];

    runQuery() {
        this.blogService.query(this.searchParams).subscribe(blogQueryResult => {
            this.posts = blogQueryResult.posts;

            this.searchParams.page = blogQueryResult.paging.page;
            this.searchParams.itemsPerPage = blogQueryResult.paging.itemsPerPage;
            this.searchParams.totalItems = blogQueryResult.paging.totalItems;
        });
    }

    ngOnInit(): void {
        const keyword = this.route.snapshot.paramMap.get('keyword');
        if (keyword) {
            this.searchParams['keyword.text'] = keyword;
        }

        this.runQuery();
    }
}
