/**
 * https://angular.io/guide/styleguide#core-feature-module
 * Pretty much everything in here has only 1 instance!
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { throwIfAlreadyLoaded } from './module-import-guard';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { TaskService } from './services/task.service';

@NgModule({
    imports: [HttpClientModule, NgbModule.forRoot()],
    exports: [AppHeaderComponent, AppFooterComponent],
    declarations: [AppHeaderComponent, AppFooterComponent],
    providers: [TaskService],
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
