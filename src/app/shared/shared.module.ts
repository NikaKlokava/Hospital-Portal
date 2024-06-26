import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';
import { BookAnAppointmentComponent } from './components/book-an-appointment/book-an-appointment.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAnAppointmentComponent,
    ContactsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAnAppointmentComponent,
    ContactsComponent,
  ],
})
export class SharedModule {}
