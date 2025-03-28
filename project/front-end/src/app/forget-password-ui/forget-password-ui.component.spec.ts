import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordUiComponent } from './forget-password-ui.component';

describe('ForgetPasswordUiComponent', () => {
  let component: ForgetPasswordUiComponent;
  let fixture: ComponentFixture<ForgetPasswordUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
