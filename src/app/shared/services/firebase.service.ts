import { Injectable } from '@angular/core';
import { Doctor } from '../components/doctor-card/doctor.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, of } from 'rxjs';
import { UNKNOWN_SPECIALITY } from '../constants';
import { get } from 'lodash';
import { DoctorsSpecialty } from '../models/doctors-specialty.model';

export type FirebaseSpecialties = {
  [id: string]: string;
};

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firebaseDoctors!: Observable<Doctor[]>;
  firebaseSpecialties!: Observable<FirebaseSpecialties>;

  constructor(private db: AngularFireDatabase) {}

  loadData(): void {
    this.loadSpecialties();
    this.loadDoctorsData();
  }

  private loadDoctorsData(): void {
    this.firebaseDoctors = this.db
      .list('/doctors')
      .valueChanges() as Observable<Doctor[]>;
  }

  loadSpecialties(): void {
    this.firebaseSpecialties = this.db
      .object('/specialties')
      .valueChanges() as Observable<FirebaseSpecialties>;
  }

  formatDoctorsSpeciality(
    doctors: Doctor[],
    specialties: FirebaseSpecialties
  ): Doctor[] {
    return doctors.map((d) => ({
      ...d,
      specialization: get(specialties, d.specialization, UNKNOWN_SPECIALITY),
    }));
  }

  formatSpecialties(specialties: FirebaseSpecialties): DoctorsSpecialty[] {
    return Object.entries(specialties).map(([id, name]) => ({
      id,
      name,
      checked: false,
    }));
  }
}
