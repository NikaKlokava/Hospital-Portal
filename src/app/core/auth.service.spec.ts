import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../shared/services/firebase.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      FirebaseService,
      { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
    ]});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
