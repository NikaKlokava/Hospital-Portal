import { Component } from '@angular/core';
import { ABOUT_PAGE_DATA } from '../shared/constants';
import { PageData } from './about.model';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/components/doctor-card/doctor.model';
import { DoctorsService } from '../shared/services/doctors.service';
import { Router } from '@angular/router';
import { DoctorsSpecialty } from '../shared/models/doctors-specialty.model';

@Component({
  selector: 'hp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutUsComponent {
  pageData: PageData = ABOUT_PAGE_DATA;

  topDoctors!: Observable<Doctor[]>;
  specialties!: Observable<DoctorsSpecialty[]>;

  constructor(private doctorsService: DoctorsService, private router: Router) {}

  ngOnInit(): void {
    this.doctorsService.loadData();
    this.topDoctors = this.doctorsService.topDoctors;
    this.specialties = this.doctorsService.visibleSpecialties;
  }

  onNavigate(): void {
    this.router.navigate(['doctors']);
  }

  trackPrioritiesByFn(_i: number, item: string): string {
    return item;
  }

  trackTopDoctorsByFn(_i: number, item: Doctor): string {
    return item.id;
  }

  trackSpecialtiesByFn(_i: number, item: DoctorsSpecialty): string {
    return item.id;
  }
}
