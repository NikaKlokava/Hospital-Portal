import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../shared/services/doctors.service';
import { DOCTORS_PAGE_DATA } from '../shared/constants';
import { SortingTypes } from '../shared/models/sorting-types.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/components/doctor-card/doctor.model';
import { DoctorsSpecialty } from '../shared/models/doctors-specialty.model';

@Component({
  selector: 'hp-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  title: string = DOCTORS_PAGE_DATA.page;
  url: string = DOCTORS_PAGE_DATA.bannerUrl;

  sortingTypes = Object.keys(SortingTypes);
  sortingType = new FormControl('');

  visibleDoctors: Observable<Doctor[]>;
  visibleSpecialties: Observable<DoctorsSpecialty[]>;
  puginationSize: Observable<number>;
  puginationCurrent: Observable<number>;

  isCardView: boolean = true;

  constructor(private doctorsService: DoctorsService) {
    this.visibleDoctors = this.doctorsService.visibleDoctors;
    this.visibleSpecialties = this.doctorsService.visibleSpecialties;
    this.puginationSize = this.doctorsService.paginationSize;
    this.puginationCurrent = this.doctorsService.paginationCurrent;
  }

  ngOnInit(): void {
    this.doctorsService.loadData();
  }

  onViewChange(): void {
    this.isCardView = !this.isCardView;
  }

  onPageChange(page: number): void {
    this.doctorsService.onPageChange(page);
  }

  onSearchStrChange(value: string): void {
    this.doctorsService.onSearchStrChange(value);
  }

  onSortingTypeChange(): void {
    //
  }

  onSpecialtiesChange(): void {
    this.doctorsService.onSpecialtiesChange();
  }
}
