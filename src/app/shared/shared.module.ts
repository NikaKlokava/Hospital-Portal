import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { BookAppointmentComponent } from './components/book-appointment/book-appointment.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAppointmentComponent,
    ContactsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAppointmentComponent,
    ContactsComponent,
  ],
})
export class SharedModule {}
