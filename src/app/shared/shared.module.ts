/**
 * https://angular.io/guide/styleguide#shared-feature-module
 * Do declare components, directives, and pipes in a
 * shared module when those items will be re-used and
 * referenced by the components declared in other
 * feature modules.
 * Avoid providing services in shared modules.
 * Services are usually singletons that are
 * provided once for the entire application
 * or in a particular feature module.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { BootstrapTextComponent } from './components/bootstrap-text/bootstrap-text.component';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [BootstrapTextComponent],
    declarations: [BootstrapTextComponent],
    providers: [],
})
export class SharedModule { }
