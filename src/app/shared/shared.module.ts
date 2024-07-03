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
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAppointmentComponent,
    ContactsComponent,
    DoctorCardComponent,
    PageBannerComponent,
    SearchBarComponent,
    PaginationComponent,
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
    SearchBarComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
