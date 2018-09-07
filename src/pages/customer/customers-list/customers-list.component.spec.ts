import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CustomersListPageComponent } from './customers-list.component';
import { TranslatePipeMock } from '../../../mocks';

describe('CustomersListComponentTests', () => {

    let component: CustomersListPageComponent;
    let fixture: ComponentFixture<CustomersListPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            declarations: [
                CustomersListPageComponent,
                TranslatePipeMock
            ],
            providers: [
                { provide: NavController, useValue: {} }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomersListPageComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
