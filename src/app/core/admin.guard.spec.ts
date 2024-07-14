import { TestBed } from '@angular/core/testing';

import { AdminGuard } from './admin.guard';
import { FirebaseService } from '../shared/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AdminGuard', () => {
  let guard: AdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    });
    guard = TestBed.inject(AdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
