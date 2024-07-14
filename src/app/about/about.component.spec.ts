import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about.component';
import { FirebaseService } from '../shared/services/firebase.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { StyledButtonComponent } from '../shared/components/styled-button/styled-button.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { BookAppointmentComponent } from '../shared/components/book-appointment/book-appointment.component';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { CustomFormControlComponent } from '../shared/components/appointment-form/custom-form-control/custom-form-control/custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule],
      declarations: [
        AboutUsComponent,
        PageBannerComponent,
        LoaderComponent,
        StyledButtonComponent,
        ContactsComponent,
        BookAppointmentComponent,
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

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
