import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StyledButtonComponent } from '../shared/components/styled-button/styled-button.component';
import { BookAppointmentComponent } from '../shared/components/book-appointment/book-appointment.component';
import { FirebaseService } from '../shared/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { CustomFormControlComponent } from '../shared/components/appointment-form/custom-form-control/custom-form-control/custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        HomeComponent,
        StyledButtonComponent,
        BookAppointmentComponent,
        ContactsComponent,
        ModalComponent,
        LoginComponent,
        AppointmentFormComponent,
        CustomFormControlComponent,
      ],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
