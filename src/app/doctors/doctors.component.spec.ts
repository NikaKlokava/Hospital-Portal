import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsComponent } from './doctors.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirebaseService } from '../shared/services/firebase.service';
import { PageBannerComponent } from '../shared/components/page-banner/page-banner.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ContactsComponent } from '../shared/components/contacts/contacts.component';
import { BookAppointmentComponent } from '../shared/components/book-appointment/book-appointment.component';
import { AppointmentFormComponent } from '../shared/components/appointment-form/appointment-form.component';
import { CustomFormControlComponent } from '../shared/components/appointment-form/custom-form-control/custom-form-control/custom-form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { StyledButtonComponent } from '../shared/components/styled-button/styled-button.component';
import { PaginationComponent } from './components/pagination/pagination.component';

describe('DoctorsComponent', () => {
  let component: DoctorsComponent;
  let fixture: ComponentFixture<DoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        DoctorsComponent,
        PageBannerComponent,
        LoaderComponent,
        SearchBarComponent,
        ContactsComponent,
        BookAppointmentComponent,
        AppointmentFormComponent,
        CustomFormControlComponent,
        ModalComponent,
        LoginComponent,
        StyledButtonComponent,
        PaginationComponent,
      ],
      providers: [
        FirebaseService,
        { provide: FIREBASE_OPTIONS, useValue: environment.firebseConfig },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
