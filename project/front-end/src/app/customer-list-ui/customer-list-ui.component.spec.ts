import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListUiComponent } from './customer-list-ui.component';

describe('CustomerListUiComponent', () => {
  let component: CustomerListUiComponent;
  let fixture: ComponentFixture<CustomerListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
