import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillListUiComponent } from './bill-list-ui.component';

describe('BillListUiComponent', () => {
  let component: BillListUiComponent;
  let fixture: ComponentFixture<BillListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillListUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
