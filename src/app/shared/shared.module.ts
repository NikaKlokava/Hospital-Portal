import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';
import { DoctorCardComponent } from './components/doctor-card/doctor-card.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { CustomFormControlComponent } from './components/appointment-form/custom-form-control/custom-form-control/custom-form-control.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAppointmentComponent,
    ContactsComponent,
    DoctorCardComponent,
    PageBannerComponent,
    LoaderComponent,
    ModalComponent,
    LoginComponent,
    AppointmentFormComponent,
    CustomFormControlComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAppointmentComponent,
    ContactsComponent,
    DoctorCardComponent,
    PageBannerComponent,
    LoaderComponent,
    ModalComponent,
    LoginComponent,
    AppointmentFormComponent,
    CustomFormControlComponent,
  ],
})
export class SharedModule {}
