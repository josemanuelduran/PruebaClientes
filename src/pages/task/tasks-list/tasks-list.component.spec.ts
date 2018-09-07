import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TasksListPageComponent } from './tasks-list.component';

describe('TasksListComponentTests', () => {

    let component: TasksListPageComponent;
    let fixture: ComponentFixture<TasksListPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            declarations: [
                TasksListPageComponent
            ],
            providers: [
                { provide: NavController, useValue: {} }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TasksListPageComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
