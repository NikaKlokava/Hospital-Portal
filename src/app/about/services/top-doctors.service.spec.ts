import { TestBed } from '@angular/core/testing';

import { TopDoctorsService } from './top-doctors.service';

describe('TopDoctorsService', () => {
  let service: TopDoctorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopDoctorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
