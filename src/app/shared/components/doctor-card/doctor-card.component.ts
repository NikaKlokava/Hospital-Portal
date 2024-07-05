import { Component, Input } from '@angular/core';
import { Doctor } from './doctor.model';

@Component({
  selector: 'hp-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.scss'],
})
export class DoctorCardComponent {
  @Input() doctor!: Doctor;
  isAdmin = false;
}
