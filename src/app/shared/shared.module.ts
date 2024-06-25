import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StyledButtonComponent } from './components/styled-button/styled-button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, StyledButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, StyledButtonComponent],
})
export class SharedModule {}
