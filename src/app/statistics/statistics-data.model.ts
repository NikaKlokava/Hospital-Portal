export enum StatisticsTypes {
  APPOINTMENT_QUEUE_WEEK_LINE = 'appointment-queue-week-line',
  GENDERS_MONTHS_BAR = 'genders-months-bar',
  INSURANCE_PIE = 'insurance-pie',
  SPECIALIZATIONS_WEEK_SCUTTER = 'specializations-week-scutter',
}

export type StatisticsSeries = {
  name?: string;
  data: Array<number> | Array<{ value: number; name: string }>;
};
export type StatisticsData = {
  title: string;
  series: Array<StatisticsSeries>;
};

export type StatisticsDataArray = Array<{
  type: StatisticsTypes;
  data: StatisticsData;
}>;
