import { Component, Input } from '@angular/core';
import { Doctor } from './doctor.model';
import { AuthService } from 'src/app/core/auth.service';
import { DoctorsService } from 'src/app/doctors/services/doctors.service';
import { Observable } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'hp-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent {
  @Input() doctor!: Doctor;
  isAdmin!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private doctorsService: DoctorsService
  ) {
    this.isAdmin = this.authService.isAdmin;
  }

  onTopDoctorChange() {
    this.firebaseService.changeTopDoctors(this.doctor);
  }
}
