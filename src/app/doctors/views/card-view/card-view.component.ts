import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';

@Component({
  selector: 'hp-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss'],
})
export class CardViewComponent {
  @Input() doctors!: Doctor[];

  trackByFn(_index: number, item: Doctor): string {
    return item.id;
  }
}
