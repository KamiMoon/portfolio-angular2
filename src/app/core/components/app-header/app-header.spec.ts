import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { AppHeaderComponent } from './app-header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


let comp: AppHeaderComponent;
let fixture: ComponentFixture<AppHeaderComponent>;
// let de;

describe('AppHeaderComponent', () => {
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [NgbModule.forRoot()],
            declarations: [AppHeaderComponent]
        }).compileComponents();
    });

    // synchronous beforeEach
    beforeEach(() => {
        fixture = TestBed.createComponent(AppHeaderComponent);

        comp = fixture.componentInstance; // BannerComponent test instance

        // query for the title <h1> by CSS element selector
        // de = fixture.debugElement.query(By.css('h1'));
        // el = de.nativeElement;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(comp).toBeTruthy();
    });

    it('should have home link', () => {
        const de = fixture.debugElement.query(By.css('.navbar-brand'));
        const el = de.nativeElement;

        expect(el.href).toContain('/home');
    });
});

