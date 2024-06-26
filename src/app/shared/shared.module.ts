import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';
import { BookAnAppointmentComponent } from './components/book-an-appointment/book-an-appointment.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAnAppointmentComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    StyledButtonComponent,
    BookAnAppointmentComponent,
  ],
})
export class SharedModule {}
