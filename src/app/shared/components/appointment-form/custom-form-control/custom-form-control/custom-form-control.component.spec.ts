import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormControlComponent } from './custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('CustomFormControlComponent', () => {
  let component: CustomFormControlComponent;
  let fixture: ComponentFixture<CustomFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CustomFormControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
