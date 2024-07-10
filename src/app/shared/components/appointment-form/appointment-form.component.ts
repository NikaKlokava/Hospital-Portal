import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal.model';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor-card/doctor.model';
import { AppointmentsService } from './appointments.service';
import { WORKING_HOURS } from '../../constants';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'hp-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent {
  startDate!: string;
  hours = WORKING_HOURS;

  doctors!: Observable<Doctor[]>;

  appointmentForm = new FormGroup({
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    newPatient: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
    comments: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
  });

  constructor(
    private appointmentsService: AppointmentsService,
    private firebaseServie: FirebaseService,
    private modalService: ModalService
  ) {
    this.firebaseServie.loadData();
    this.doctors = this.firebaseServie.firebaseDoctors;
    this.startDate = new Date().toISOString().split('T')[0];
  }

  onClose(): void {
    this.modalService.close(Modal.appointmentForm);
    this.appointmentForm.reset();
  }

  saveChanges(event: any): void {
    event.preventDefault();
    this.appointmentsService.saveData(this.appointmentForm.value);
    this.modalService.close(Modal.appointmentForm);
    this.resetForm();
  }

  private resetForm(): void {
    this.appointmentForm.reset();
  }

  checkIfTouched(field: string): boolean {
    return (
      (this.appointmentForm.get(field)?.invalid &&
        this.appointmentForm.get(field)?.touched) ||
      false
    );
  }

  ifInvalid(field: any, error: string): boolean {
    return this.appointmentForm.get(field)?.errors?.[error];
  }
}
