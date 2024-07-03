import { Component, OnInit } from '@angular/core';
import { DoctorsService } from '../shared/services/doctors.service';
import { DOCTORS_PAGE_DATA } from '../shared/constants';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  title: string = DOCTORS_PAGE_DATA.page;
  url: string = DOCTORS_PAGE_DATA.bannerUrl;

  isCardView: boolean = true;

  constructor(private doctorsService: DoctorsService) {}

  ngOnInit(): void {
    // this.doctorsService.loadData();
  }

  onViewChange() {
    this.isCardView = !this.isCardView;
  }

  onPageChange(page: number) {
    // this.doctorsService.onPageChange(page);
  }

  onSearchStrChange(value: string) {
    // this.doctorsService.onSearchStrChange(value);
  }

  onSortingTypeChange() {
    //
  }

  onSpecialtiesChange(): void {
    // this.doctorsService.onSpecialtiesChange();
  }
}
