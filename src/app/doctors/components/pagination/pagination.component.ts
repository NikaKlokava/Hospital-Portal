import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'hp-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() currentPage!: Observable<number>;
  @Input() totalPages!: Observable<number>;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  changePage(page: number): void {
    this.pageChanged.emit(page);
  }
}
