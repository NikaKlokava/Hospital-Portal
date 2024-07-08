import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { LoaderService } from '../shared/components/loader/loader.service';
import { AppointmentsService } from '../shared/components/appointment-form/appointments.service';
import { Appointment } from '../shared/components/appointment-form/appointment.model';
import * as firebase from 'firebase/auth';

@Component({
  selector: 'hp-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  appointmentsData!: Observable<Appointment[]>;
  userInfo!: Observable<firebase.UserInfo | null>;

  constructor(
    private appointmentsService: AppointmentsService,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}
  ngOnInit(): void {
    this.appointmentsData = this.appointmentsService
      .getData()
      .pipe(tap(() => this.loaderService.loadingOff()));

    this.userInfo = this.authService.getAuthInfo();
  }
  onDelete(id: string): void {
    confirm('Do you really want to delete this appointment?') &&
      this.appointmentsService.deleteAppointment(id);
  }
}
