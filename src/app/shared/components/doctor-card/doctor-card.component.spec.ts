import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCardComponent } from './doctor-card.component';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseService } from '../../services/firebase.service';
import { Doctor } from './doctor.model';

describe('DoctorCardComponent', () => {
  let component: DoctorCardComponent;
  let fixture: ComponentFixture<DoctorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorCardComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorCardComponent);
    component = fixture.componentInstance;
    component.doctor = mockDoctor;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const mockDoctor: Doctor = {
  id: 'test',
  name: 'test',
  photo: 'test',
  experience: 0,
  description: 'test',
  specialization: 'test',
  visitors: 0,
  top: false,
};
