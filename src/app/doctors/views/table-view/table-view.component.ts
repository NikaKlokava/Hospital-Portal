import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { TABLE_HEADERS } from 'src/app/shared/constants';
import { DoctorsService } from '../../services/doctors.service';
import { AuthService } from 'src/app/core/auth.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';

@Component({
  selector: 'hp-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() doctors!: Doctor[];
  isAdmin!: boolean;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
    this.authService.isAdmin.subscribe((data) => (this.isAdmin = data));
  }

  onTopDoctorChange(doctor: Doctor) {
    this.firebaseService.changeTopDoctors(doctor);
  }

  tableHeaders = TABLE_HEADERS;
  trackByFn(_index: number, item: Doctor): string {
    return item.id;
  }
}
