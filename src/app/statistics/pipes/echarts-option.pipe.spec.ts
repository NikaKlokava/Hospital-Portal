import { StatisticsTypes } from '../statistics-data.model';
import { EchartsOptionPipe } from './echarts-option.pipe';
import { MONTHS_NAMES, WEEK_DAYS } from './echarts-option.utils';

describe('EchartsOptionPipe', () => {
  let pipe: EchartsOptionPipe;
  beforeEach(() => {
    pipe = new EchartsOptionPipe();
  });

  it('should transform line data', () => {
    const transformedArray = pipe.transform(
      mockStatisticsData,
      StatisticsTypes.APPOINTMENT_QUEUE_WEEK_LINE
    );
    expect(transformedArray.xAxis).toEqual({
      type: 'category',
      data: WEEK_DAYS,
    });
  });

  it('should transform months bar data', () => {
    const transformedArray = pipe.transform(
      mockStatisticsData,
      StatisticsTypes.GENDERS_MONTHS_BAR
    );
    expect(transformedArray.xAxis).toEqual({
      data: MONTHS_NAMES,
    });
  });

  it('should transform pie data', () => {
    const transformedArray = pipe.transform(
      mockStatisticsData,
      StatisticsTypes.INSURANCE_PIE
    );
    expect(transformedArray.series).toEqual([
      {
        name: 'test name 1',
        data: [{ value: 123, name: 'test name 2' }],
        type: 'pie',
        symbolSize: undefined,
      },
    ]);
  });

  it('should transform week scutter data', () => {
    const transformedArray = pipe.transform(
      mockStatisticsData,
      StatisticsTypes.SPECIALIZATIONS_WEEK_SCUTTER
    );

    expect(transformedArray.xAxis).toEqual({
      data: WEEK_DAYS,
    });
  });
});

const mockStatisticsData = {
  title: 'test',
  series: [
    { name: 'test name 1', data: [{ value: 123, name: 'test name 2' }] },
  ],
};
