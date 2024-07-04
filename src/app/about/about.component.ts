import { Component } from '@angular/core';
import { ABOUT_PAGE_DATA } from '../shared/constants';
import { PageData } from './about.model';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/components/doctor-card/doctor.model';
import { Router } from '@angular/router';
import { DoctorsSpecialty } from '../shared/models/doctors-specialty.model';
import { TopDoctorsService } from './services/top-doctors.service';

@Component({
  selector: 'hp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutUsComponent {
  pageData: PageData = ABOUT_PAGE_DATA;

  topDoctors!: Observable<Doctor[]>;
  specialties!: Observable<DoctorsSpecialty[]>;

  constructor(
    private topDoctorsService: TopDoctorsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.topDoctorsService.loadData();
    this.topDoctors = this.topDoctorsService.topDoctors;
    this.specialties = this.topDoctorsService.visibleSpecialties;
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
