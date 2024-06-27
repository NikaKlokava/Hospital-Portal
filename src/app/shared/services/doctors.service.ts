import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { Doctor } from '../components/doctor-card/doctor.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  doctorsSubject = new BehaviorSubject<Doctor[]>([]);
  doctors = this.doctorsSubject.asObservable();

  constructor(private db: AngularFireDatabase) {
    this.doctors = this.db.list('/doctors').valueChanges() as Observable<
      Doctor[]
    >;
  }

  getTopDoctors(): Observable<Doctor[]> {
    return this.doctors.pipe(
      map((doctors) => doctors.filter((doctor) => doctor.top))
    );
  }

  getSpecialties(): Observable<string[]> {
    return this.doctors.pipe(
      map((doctors) =>
        Array.from(new Set(doctors.map((doctor) => doctor.specialization)))
      )
    );
  }
}
