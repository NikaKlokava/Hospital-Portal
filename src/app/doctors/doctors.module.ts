import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { SharedModule } from '../shared/shared.module';
import { CardViewComponent } from './views/card-view/card-view.component';
import { TableViewComponent } from './views/table-view/table-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    DoctorsComponent,
    CardViewComponent,
    TableViewComponent,
    PaginationComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ],
})
export class DoctorsModule {}
