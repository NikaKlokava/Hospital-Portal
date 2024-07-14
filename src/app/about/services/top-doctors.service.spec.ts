import { TestBed } from '@angular/core/testing';

import { TopDoctorsService } from './top-doctors.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

describe('TopDoctorsService', () => {
  let service: TopDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    });
    service = TestBed.inject(TopDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
