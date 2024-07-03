import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { SharedModule } from '../shared/shared.module';
import { CardViewComponent } from './views/card-view/card-view.component';
import { TableViewComponent } from './views/table-view/table-view.component';

@NgModule({
  declarations: [DoctorsComponent, CardViewComponent, TableViewComponent],
  imports: [CommonModule, DoctorsRoutingModule, SharedModule],
})
export class DoctorsModule {}
