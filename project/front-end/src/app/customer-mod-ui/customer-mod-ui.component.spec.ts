import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerModUiComponent } from './customer-mod-ui.component';

describe('CustomerModUiComponent', () => {
  let component: CustomerModUiComponent;
  let fixture: ComponentFixture<CustomerModUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerModUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerModUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
