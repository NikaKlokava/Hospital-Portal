import { EChartsOption, SeriesOption } from 'echarts';
import { StatisticsData, StatisticsSeries } from '../statistics-data.model';

export const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const MONTHS_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function transformLineData(value: StatisticsData): EChartsOption {
  const { legend, series } = processSeries(value.series, 'line');

  return {
    legend,
    xAxis: {
      type: 'category',
      data: WEEK_DAYS,
    },
    yAxis: {
      type: 'value',
    },
    series,
  };
}

export function transformMonthsBarData(value: StatisticsData): EChartsOption {
  const { legend, series } = processSeries(value.series, 'bar');

  return {
    legend,
    xAxis: {
      data: MONTHS_NAMES,
    },
    yAxis: {},
    series,
  };
}

export function transformPieData(value: StatisticsData): EChartsOption {
  const { series } = processSeries(value.series, 'pie');
  return {
    series,
  };
}

export function transformWeekScutterData(value: StatisticsData): EChartsOption {
  const { legend, series } = processSeries(value.series, 'scatter');
  return {
    legend,
    xAxis: {
      data: WEEK_DAYS,
    },
    yAxis: {},
    series,
  };
}

function symbolSize(value: number) {
  return value / 10;
}

function processSeries(
  series: StatisticsData['series'],
  type: 'line' | 'bar' | 'pie' | 'scatter'
) {
  return series.reduce(
    (
      acc: { legend: { data: Array<string> }; series: SeriesOption[] },
      ss: StatisticsSeries
    ) => {
      if (ss.name) acc.legend.data.push(ss.name);
      acc.series.push({
        ...ss,
        type,
        symbolSize: type === 'scatter' ? symbolSize : undefined,
      });
      return acc;
    },
    { legend: { data: [] }, series: [] }
  );
}
