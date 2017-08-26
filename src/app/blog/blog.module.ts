import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BlogRoutingModule
    ],
    declarations: [
        BlogListComponent
    ],
    exports: [],
    providers: []
})
export class BlogModule { }
