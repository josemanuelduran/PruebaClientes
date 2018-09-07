import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactsListPageComponent } from './contacts-list.component';

describe('ContactsListComponentTests', () => {

    let component: ContactsListPageComponent;
    let fixture: ComponentFixture<ContactsListPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            declarations: [
                ContactsListPageComponent
            ],
            providers: [
                { provide: NavController, useValue: {} }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactsListPageComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
