import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { DoctorsSpecialty } from 'src/app/shared/models/doctors-specialty.model';
import {
  FirebaseService,
  FirebaseSpecialties,
} from 'src/app/shared/services/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class TopDoctorsService {
  private topDoctorsSubject = new BehaviorSubject<Doctor[]>([]);
  topDoctors = this.topDoctorsSubject.asObservable();

  private visibleSpecialtiesSubject = new BehaviorSubject<DoctorsSpecialty[]>(
    []
  );
  visibleSpecialties = this.visibleSpecialtiesSubject.asObservable();

  private firebaseDoctors: Doctor[];
  private firebaseSpecialties: FirebaseSpecialties;

  constructor(
    private fb: FirebaseService,
    private loaderService: LoaderService
  ) {
    this.firebaseDoctors = [];
    this.firebaseSpecialties = {};
  }

  loadData(): void {
    this.loaderService.loadingOn();
    this.fb.loadData();
    this.fb.firebaseSpecialties.subscribe((firebaseSpecialties) => {
      this.firebaseSpecialties = firebaseSpecialties;
      const specialties = this.fb.formatSpecialties(firebaseSpecialties);
      this.visibleSpecialtiesSubject.next(specialties);
    });
    this.fb.firebaseDoctors.subscribe((firebaseDoctors) => {
      this.firebaseDoctors = firebaseDoctors;

      const topDoctors = this.firebaseDoctors.filter((doctor) => doctor.top);
      const formatedDoctors = this.fb.formatDoctorsSpeciality(
        topDoctors,
        this.firebaseSpecialties
      );
      this.topDoctorsSubject.next(formatedDoctors);
      this.loaderService.loadingOff()
    });
  }
}
