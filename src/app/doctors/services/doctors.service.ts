import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { filterDoctors } from './doctors.utils';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { DoctorsSpecialty } from 'src/app/shared/models/doctors-specialty.model';
import {
  FirebaseService,
  FirebaseSpecialties,
} from 'src/app/shared/services/firebase.service';
import { SortingTypes } from 'src/app/shared/models/sorting-types.model';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private visibleDoctorsSubject = new BehaviorSubject<Doctor[]>([]);
  visibleDoctors = this.visibleDoctorsSubject.asObservable();

  private visibleSpecialtiesSubject = new BehaviorSubject<DoctorsSpecialty[]>(
    []
  );
  visibleSpecialties = this.visibleSpecialtiesSubject.asObservable();

  private searchQuerySubject = new BehaviorSubject<string>('');

  private paginationSizeSubject = new BehaviorSubject<number>(0);
  paginationSize = this.paginationSizeSubject.asObservable();

  private paginationCurrentSubject = new BehaviorSubject<number>(0);
  paginationCurrent = this.paginationCurrentSubject.asObservable();

  private sortingTypeSubject = new BehaviorSubject<string>('');
  sortingType = this.sortingTypeSubject.asObservable();

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
      this.updateVisibleDoctors();
    });
  }

  private updateVisibleDoctors(): void {
    const specialties = this.visibleSpecialtiesSubject.value
      .filter((v) => v.checked)
      .map((v) => v.id);

    const { cuttedDoctors, paginationSize } = filterDoctors(
      this.firebaseDoctors,
      this.searchQuerySubject.value,
      specialties,
      this.sortingTypeSubject.value as SortingTypes,
      this.paginationCurrentSubject.value
    );

    this.paginationSizeSubject.next(paginationSize);

    const mappedSpecialties = this.fb.formatDoctorsSpeciality(
      cuttedDoctors,
      this.firebaseSpecialties
    );

    this.visibleDoctorsSubject.next(mappedSpecialties);
    this.loaderService.loadingOff();
  }

  handlePageChange(page: number): void {
    this.paginationCurrentSubject.next(page);
    this.updateVisibleDoctors();
  }

  sortingTypeChange(sortingType: SortingTypes): void {
    this.sortingTypeSubject.next(sortingType);
    this.resetPagination();
    this.updateVisibleDoctors();
  }

  searchStrChange(searchQuery: string): void {
    this.resetPagination();
    this.searchQuerySubject.next(searchQuery);
    this.updateVisibleDoctors();
  }

  specialtiesChange(): void {
    this.resetPagination();
    this.updateVisibleDoctors();
  }

  private resetPagination(): void {
    this.paginationCurrentSubject.next(0);
  }
}
