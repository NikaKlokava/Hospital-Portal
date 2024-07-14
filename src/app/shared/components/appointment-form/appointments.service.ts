import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { LoaderService } from '../loader/loader.service';
import { Appointment, AppointmentFormType } from './appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  constructor(
    private db: AngularFireDatabase,
    private loaderService: LoaderService
  ) {}

  getData(): Observable<Appointment[]> {
    this.loaderService.loadingOn();
    return this.db.list('appointments').valueChanges() as Observable<
      Appointment[]
    >;
  }

  saveData(data: Partial<AppointmentFormType>): void {
    const appointmentId = uuidv4();

    this.db.list('appointments').update(appointmentId, {
      ...data,
      id: appointmentId,
    });
  }

  deleteAppointment(id: string): void {
    this.db.list('appointments').remove(id);
  }
}
