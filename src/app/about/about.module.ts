import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule],
})
export class AboutUsModule {}
