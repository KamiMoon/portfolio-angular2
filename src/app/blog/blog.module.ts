import { BlogService } from './blog.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';

import { PostComponent } from './post/post.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BlogRoutingModule
    ],
    declarations: [
        BlogAddEditComponent, BlogListComponent, BlogViewComponent, PostComponent
    ],
    exports: [],
    providers: [BlogService]
})
export class BlogModule { }
