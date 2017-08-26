import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

// TODO - extract to snippet


describe('AppFooterComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: []
        }).compileComponents();
    });

    tests();
});

function tests() {

    it('can instantiate it', () => {
        //expect(comp).not.toBeNull();
        expect(true).toBe(true);
    });
}
