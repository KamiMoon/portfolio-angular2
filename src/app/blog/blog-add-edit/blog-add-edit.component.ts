import { BlogService } from './../blog.service';
import { Post, BlogSearchParams, BlogQueryResult, PostKeyWord } from './../blog-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-blog-add-edit',
    templateUrl: './blog-add-edit.component.html'
})
export class BlogAddEditComponent implements OnInit {

    constructor(private route: ActivatedRoute, private blogService: BlogService) { }

    post: Post;
    keywordToAdd = this.createKeywordRow();
    action: String = 'add';

    ngOnInit(): void {
        this.action = this.route.snapshot.paramMap.get('action');
        const id = this.route.snapshot.paramMap.get('id');

        if (this.action === 'edit') {
            this.loadPost(id);
        } else {
            this.post = new Post();
            this.post.user_id = null; // TODO
            this.post.user_name = null; // TODO
            this.post.keywords = [];
        }
    }

    loadPost(id) {
        this.blogService.get(id).subscribe(post => {
            this.post = post;
        });
    }

    createKeywordRow() {
        return new PostKeyWord('');
    }

    deleteKeyword(index) {
        this.post.keywords.splice(index, 1);
    }

    addKeyword() {
        this.post.keywords.push(this.keywordToAdd);
        this.keywordToAdd = this.createKeywordRow();
    }

    onSubmit(form: NgForm) {

        console.log(form);

        if (form.valid) {
            if (this.action === 'edit') {
                this.blogService.update(this.post).subscribe(post => {
                    // TOOD routing, validation, error handling, feedback
                });
            } else {
                this.blogService.create(this.post).subscribe(post => {
                    // TOOD routing, validation, error handling, feedback
                });
            }
        }

    }


}
