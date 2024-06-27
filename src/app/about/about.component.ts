import { Component } from '@angular/core';
import { ABOUT_PAGE_DATA } from '../shared/constants';
import { PageData } from './about.model';
import { Observable } from 'rxjs';
import { Doctor } from '../shared/components/doctor-card/doctor.model';
import { DoctorsService } from '../shared/services/doctors.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hp-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutUsComponent {
  pageData: PageData = ABOUT_PAGE_DATA;

  topDoctors: Observable<Doctor[]>;
  specialties: Observable<string[]>;

  constructor(private doctorsService: DoctorsService, private router: Router) {
    this.topDoctors = this.doctorsService.getTopDoctors();
    this.specialties = this.doctorsService.getSpecialties();
  }

  onNavigate() {
    this.router.navigate(['doctors']);
  }
}
