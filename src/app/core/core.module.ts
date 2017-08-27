import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { AuthService } from './services/auth.service';
/**
 * https://angular.io/guide/styleguide#core-feature-module
 * Pretty much everything in here has only 1 instance!
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { throwIfAlreadyLoaded } from './module-import-guard';

import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

import { TaskService } from './services/task.service';


@NgModule({
    imports: [HttpClientModule, NgbModule.forRoot()],
    exports: [AppHeaderComponent, AppFooterComponent],
    declarations: [AppHeaderComponent, AppFooterComponent],
    providers: [TaskService, CookieService, UserService, AuthService, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    }]
})
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
