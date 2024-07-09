import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StatisticsDataArray } from './statistics-data.model';
import { StatisticsService } from './services/statistics.service';

@Component({
  selector: 'hp-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent {
  statisticsData: Observable<StatisticsDataArray>;

  constructor(private statisticsService: StatisticsService) {
    this.statisticsService.loadData();
    this.statisticsData = this.statisticsService.statisticsData;
  }
}
