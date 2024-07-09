import { Component, Input } from '@angular/core';
import { Doctor } from 'src/app/shared/components/doctor-card/doctor.model';
import { TABLE_HEADERS } from 'src/app/shared/constants';

@Component({
  selector: 'hp-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent {
  @Input() doctors!: Doctor[];
  isAdmin: boolean = false;

  tableHeaders = TABLE_HEADERS;
  trackByFn(_index: number, item: Doctor): string {
    return item.id;
  }
}
