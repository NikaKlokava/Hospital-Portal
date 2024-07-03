import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'hp-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnDestroy {
  @Output() sendInputValue = new EventEmitter<string>();

  filterSubject = new Subject<string>();
  searchQuery = new FormControl('');

  private subscription!: Subscription;

  constructor() {
    this.subscription = this.filterSubject
      .pipe(
        filter((value) => value === '' || value.length >= 3),
        debounceTime(500)
      )
      .subscribe((value) => this.sendInputValue.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  keyupHandler(): void {
    const value = this.searchQuery.value;
    if (value || value === '') {
      this.filterSubject.next(value);
    }
  }
}
