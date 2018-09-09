import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListFilterComponent } from './customers-list-filter.component';

describe('CustomersListFilterComponent', () => {
  let component: CustomersListFilterComponent;
  let fixture: ComponentFixture<CustomersListFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersListFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
