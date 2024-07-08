import { Pipe, PipeTransform } from '@angular/core';
import { StatisticsData, StatisticsTypes } from '../statistics-data.model';
import { EChartsOption } from 'echarts';
import {
  transformLineData,
  transformMonthsBarData,
  transformPieData,
  transformWeekScutterData,
} from './echarts-option.utils';

@Pipe({
  name: 'echartsOption',
})
export class EchartsOptionPipe implements PipeTransform {
  transform(data: StatisticsData, type: StatisticsTypes): EChartsOption {
    switch (type) {
      case StatisticsTypes.APPOINTMENT_QUEUE_WEEK_LINE: {
        return transformLineData(data);
      }
      case StatisticsTypes.GENDERS_MONTHS_BAR: {
        return transformMonthsBarData(data);
      }
      case StatisticsTypes.INSURANCE_PIE: {
        return transformPieData(data);
      }
      case StatisticsTypes.SPECIALIZATIONS_WEEK_SCUTTER: {
        return transformWeekScutterData(data);
      }
      default:
        throw new Error('Unsupported chart type');
    }
  }
}
