import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../shared/services/doctors.service';
import { DOCTORS_PAGE_DATA } from '../shared/constants';
import { SortingTypes } from '../shared/services/sorting-types.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'hp-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  title: string = DOCTORS_PAGE_DATA.page;
  url: string = DOCTORS_PAGE_DATA.bannerUrl;

  sortingType = new FormControl('');
  sortingTypes = Object.keys(SortingTypes);
  isCardView: boolean = true;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    // this.doctorsService.loadData();
  }

  onViewChange(): void {
    this.isCardView = !this.isCardView;
  }

  onPageChange(page: number): void {
    // this.doctorsService.onPageChange(page);
  }

  onSearchStrChange(value: string): void {
    // this.doctorsService.onSearchStrChange(value);
  }

  onSortingTypeChange(): void {
    //
  }

  onSpecialtiesChange(): void {
    // this.doctorsService.onSpecialtiesChange();
  }
}
