import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PublicPagesRoutingModule } from './public-pages-routing.module';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PublicPagesRoutingModule
    ],
    declarations: [
        HomeComponent, ContactComponent, CrudComponent
    ],
    exports: [],
    providers: []
})
export class PublicPagesModule { }