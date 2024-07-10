import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { AuthService } from 'src/app/core/auth.service';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'hp-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() doctors!: Doctor[];
  isAdmin!: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService
  ) {
    this.isAdmin = this.authService.isAdmin;
  }

  onTopDoctorChange(doctor: Doctor) {
    this.firebaseService.changeTopDoctors(doctor);
  }

  trackByFn(_index: number, item: Doctor): string {
    return item.id;
  }
}
