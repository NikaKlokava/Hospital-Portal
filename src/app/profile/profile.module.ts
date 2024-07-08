import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BoxColorDirective } from './directives/box-color.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileComponent, BoxColorDirective],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
