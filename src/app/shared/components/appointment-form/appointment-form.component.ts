import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../modal/modal.service';
import { Modal } from '../modal/modal.model';
import { Observable } from 'rxjs';
import { Doctor } from '../doctor-card/doctor.model';
import { AppointmentsService } from './appointments.service';
import { DoctorsService } from 'src/app/doctors/services/doctors.service';
import { WORKING_HOURS } from '../../constants';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss'],
})
export class AppointmentFormComponent implements OnInit {
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
    private doctorsService: DoctorsService,
    private modalService: ModalService
  ) {
    this.doctorsService.loadData();
    this.doctors = this.doctorsService.visibleDoctors;
  }

  ngOnInit(): void {
    this.startDate = new Date().toISOString().split('T')[0];
  }

  onClose() {
    this.modalService.close('appointment-form');
    this.resetForm();
  }

  saveChanges(event: any): void {
    event.preventDefault();
    this.appointmentsService.saveData(this.appointmentForm.value);
    this.modalService.close(Modal.appointmentForm);
    this.resetForm();
  }

  private resetForm(): void {
    this.appointmentForm.controls.birthDate.reset();
    this.appointmentForm.controls.date.reset();
    this.appointmentForm.controls.doctor.reset();
    this.appointmentForm.controls.time.reset();
    this.appointmentForm.controls.newPatient.reset();
    this.appointmentForm.controls.comments.reset();
  }

  checkIfTouched(field: string) {
    return (
      this.appointmentForm.get(field)?.invalid &&
      this.appointmentForm.get(field)?.touched
    );
  }

  ifInvalid(field: any, error: string): boolean {
    return this.appointmentForm.get(field)?.errors?.[error];
  }
}
