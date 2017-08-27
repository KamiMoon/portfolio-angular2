import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogAddEditComponent } from './blog-add-edit/blog-add-edit.component';

const routes: Routes = [
    { path: 'blog', component: BlogListComponent },
    { path: 'blog/:action/:id', component: BlogAddEditComponent },
    { path: 'blog/:id', component: BlogViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule { }
