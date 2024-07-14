import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { StatisticsDataArray } from '../statistics-data.model';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private statisticsDataSubject = new BehaviorSubject<StatisticsDataArray>([]);
  statisticsData: Observable<StatisticsDataArray> =
    this.statisticsDataSubject.asObservable();

  constructor(private db: AngularFireDatabase) {}

  loadData(): void {
    this.db
      .list('/statistics')
      .valueChanges()
      .subscribe((data) => {
        const typedData = data as StatisticsDataArray;
        const sortedData = typedData.sort((a, b) =>
          a.data.title.localeCompare(b.data.title)
        );
        this.statisticsDataSubject.next(sortedData);
      });
  }
}
