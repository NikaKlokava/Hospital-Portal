import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsService } from './doctors.service';
import { DoctorsComponent } from '../doctors.component';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';

describe('Test DoctorsService', () => {
  let service: DoctorsService;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorsComponent],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsComponent);
    fixture.detectChanges();
    service = TestBed.inject(DoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be empty ', (done: DoneFn) => {
    service.visibleDoctors = of(mockDoctorsData);
    service.visibleDoctors.subscribe((data) => {
      expect(data).toEqual(mockDoctorsData);
      done();
    });
  });
});

const mockDoctorsData: Doctor[] = [
  {
    id: 'test',
    name: 'test',
    photo: 'test',
    experience: 2,
    description: 'test',
    specialization: 'test',
    visitors: 0,
    top: false,
  },
];
