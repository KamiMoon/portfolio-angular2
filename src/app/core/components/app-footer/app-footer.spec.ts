import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AppFooterComponent } from './app-footer.component';

let comp: AppFooterComponent;
let fixture: ComponentFixture<AppFooterComponent>;
// let de;

describe('AppFooterComponent', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [AppFooterComponent]
        }).compileComponents();
    });

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(AppFooterComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        // de = fixture.debugElement.query(By.css('h1'));
        // el = de.nativeElement;
    });

    it('should create the component', async(() => {
        expect(comp).toBeTruthy();
    }));

});

