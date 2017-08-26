import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterLinkStubDirective } from '../testing/router-stubs';
import { RouterOutletStubComponent } from '../testing/router-stubs';

@Component({ selector: 'app-header', template: '' })
class AppHeaderStubComponent { }

@Component({ selector: 'app-footer', template: '' })
class AppFooterStubComponent { }

let comp: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let app;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, AppHeaderStubComponent, AppFooterStubComponent, RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
      app = fixture.debugElement.componentInstance;
    });
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should should have a header', async(() => {
    const de: DebugElement = fixture.debugElement.query(By.css('app-header'));
    const el: HTMLElement = de.nativeElement;

    expect(el).toBeTruthy();
  }));

  it('should should have a footer', async(() => {
    const de: DebugElement = fixture.debugElement.query(By.css('app-footer'));
    const el: HTMLElement = de.nativeElement;

    expect(el).toBeTruthy();
  }));

});
