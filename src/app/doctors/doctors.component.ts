import { Component, OnInit } from '@angular/core';
import { DOCTORS_PAGE_DATA } from '../shared/constants';
import { SortingTypes } from '../shared/models/sorting-types.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/components/doctor-card/doctor.model';
import { DoctorsSpecialty } from '../shared/models/doctors-specialty.model';
import { DoctorsService } from './services/doctors.service';

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

  visibleDoctors!: Observable<Doctor[]>;
  visibleSpecialties!: Observable<DoctorsSpecialty[]>;
  paginationSize!: Observable<number>;
  paginationCurrent!: Observable<number>;

  isCardView: boolean = true;

  constructor(private doctorsService: DoctorsService) {
    this.visibleDoctors = this.doctorsService.visibleDoctors;
    this.visibleSpecialties = this.doctorsService.visibleSpecialties;
    this.paginationSize = this.doctorsService.paginationSize;
    this.paginationCurrent = this.doctorsService.paginationCurrent;
  }

  ngOnInit(): void {
    this.doctorsService.loadData();
  }

  onViewChange(): void {
    this.isCardView = !this.isCardView;
  }

  onPageChange(page: number, target: HTMLElement): void {
    this.doctorsService.handlePageChange(page);
    target.scrollIntoView();
  }

  onSearchStrChange(value: string): void {
    this.doctorsService.searchStrChange(value);
  }

  onSortingTypeChange(): void {
    if (this.sortingType.value) {
      this.doctorsService.sortingTypeChange(
        this.sortingType.value as SortingTypes
      );
    }
  }

  onSpecialtiesChange(): void {
    this.doctorsService.specialtiesChange();
  }
}
