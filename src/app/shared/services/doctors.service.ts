import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BehaviorSubject, Subscription } from 'rxjs';

import { Doctor } from '../components/doctor-card/doctor.model';
import { SortingTypes } from '../models/sorting-types.model';
import { DoctorsSpecialty } from '../models/doctors-specialty.model';
import { get } from 'lodash';

const DOCTORS_PER_PAGE = 6;

@Injectable({
  providedIn: 'root',
})
export class DoctorsService implements OnDestroy {
  private visibleDoctorsSubject = new BehaviorSubject<Doctor[]>([]);
  private visibleSpecialtiesSubject = new BehaviorSubject<DoctorsSpecialty[]>(
    []
  );

  private topDoctorsSubject = new BehaviorSubject<Doctor[]>([]);
  private paginationSizeSubject = new BehaviorSubject<number>(0);

  private paginationCurrentSubject = new BehaviorSubject<number>(0);
  private sortingTypeSubject = new BehaviorSubject<string>('');
  private searchQuerySubject = new BehaviorSubject<string>('');

  private subsription!: Subscription;

  visibleDoctors = this.visibleDoctorsSubject.asObservable();
  visibleSpecialties = this.visibleSpecialtiesSubject.asObservable();

  paginationCurrent = this.paginationCurrentSubject.asObservable();
  paginationSize = this.paginationSizeSubject.asObservable();
  sortingType = this.sortingTypeSubject.asObservable();

  topDoctors = this.topDoctorsSubject.asObservable();

  private firebaseDoctors: Doctor[];
  private firebaseSpecialties: Object;

  constructor(private db: AngularFireDatabase) {
    this.firebaseDoctors = [];
    this.firebaseSpecialties = {};
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }

  loadData(): void {
    this.subsription = this.db
      .list('/doctors')
      .valueChanges()
      .subscribe((data) => {
        this.firebaseDoctors = data as Doctor[];
        this.updateVisibleDoctors();
        this.calculateTopDoctors();
      });

    this.loadSpecialties();
  }

  loadSpecialties() {
    this.db.database.ref('specialties').once('value', (snap) => {
      this.firebaseSpecialties = snap.val();
      const specialties = Object.entries(snap.val()).map(([id, name]) => ({
        id,
        name: name as string,
        checked: false,
      }));
      this.visibleSpecialtiesSubject.next(specialties);
    });
  }

  private updateVisibleDoctors(): void {
    const specialties = this.visibleSpecialtiesSubject.value
      .filter((v) => v.checked)
      .map((v) => v.id);

    const hasSearchFilter = !!this.searchQuerySubject.value;
    const searchLowerStr = this.searchQuerySubject.value?.toLowerCase() || '';
    const hasSpecialtiesFilter = !!specialties && specialties.length > 0;

    const filteredDoctors = this.firebaseDoctors.filter((doc) => {
      if (hasSearchFilter && !doc.name.toLowerCase().includes(searchLowerStr)) {
        return false;
      }
      if (hasSpecialtiesFilter && !specialties?.includes(doc.specialization)) {
        return false;
      }
      return true;
    });

    if (this.sortingTypeSubject.value) {
      switch (this.sortingTypeSubject.value) {
        case SortingTypes.name: {
          filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
          break;
        }
        case SortingTypes.experience: {
          filteredDoctors.sort((a, b) => b.experience - a.experience);
          break;
        }
      }
    }

    this.paginationSizeSubject.next(
      Math.ceil(filteredDoctors.length / DOCTORS_PER_PAGE)
    );

    const start = this.paginationCurrentSubject.value * DOCTORS_PER_PAGE;
    const end = (this.paginationCurrentSubject.value + 1) * DOCTORS_PER_PAGE;

    const cuttedDoctorsArray = filteredDoctors.slice(start, end);

    const mappedSpecialties = this.formatData(cuttedDoctorsArray);

    this.visibleDoctorsSubject.next(mappedSpecialties);
  }

  private calculateTopDoctors(): void {
    const topDoctors = this.firebaseDoctors.filter((doctor) => doctor.top);
    const formatedDoctors = this.formatData(topDoctors);
    this.topDoctorsSubject.next(formatedDoctors);
  }

  private formatData(array: Doctor[]) {
    return array.map((d) => ({
      ...d,
      specialization: get(
        this.firebaseSpecialties,
        d.specialization,
        'unknown'
      ),
    }));
  }

  onPageChange(page: number) {
    this.paginationCurrentSubject.next(page);
    this.updateVisibleDoctors();
  }

  onSortingTypeChange(sortingType: SortingTypes) {
    this.sortingTypeSubject.next(sortingType);
    this.paginationCurrentSubject.next(0);
    this.updateVisibleDoctors();
  }

  onSearchStrChange(searchQuery: string) {
    this.paginationCurrentSubject.next(0);
    this.searchQuerySubject.next(searchQuery);
    this.updateVisibleDoctors();
  }

  onSpecialtiesChange() {
    this.paginationCurrentSubject.next(0);
    this.updateVisibleDoctors();
  }
}
