import { TestBed } from '@angular/core/testing';

import { UserGuard } from './user.guard';
import { FirebaseService } from '../shared/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('UserGuard', () => {
  let guard: UserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      FirebaseService,
      { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
    ]});
    guard = TestBed.inject(UserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
