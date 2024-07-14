import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFormComponent } from './appointment-form.component';
import { FirebaseService } from '../../services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CustomFormControlComponent } from './custom-form-control/custom-form-control/custom-form-control.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppointmentFormComponent', () => {
  let component: AppointmentFormComponent;
  let fixture: ComponentFixture<AppointmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppointmentFormComponent, CustomFormControlComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
