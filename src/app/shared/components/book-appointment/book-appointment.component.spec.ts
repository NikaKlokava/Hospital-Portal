import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointmentComponent } from './book-appointment.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseService } from '../../services/firebase.service';
import { environment } from 'src/environments/environment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BookAppointmentComponent', () => {
  let component: BookAppointmentComponent;
  let fixture: ComponentFixture<BookAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookAppointmentComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BookAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
