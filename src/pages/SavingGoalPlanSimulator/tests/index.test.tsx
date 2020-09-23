import * as React from 'react';
import { shallow } from 'enzyme';
import SGPS from '../index';
import { changeDate, pickDate } from '../date';

const mockData = {
  customMonth: 'December',
  customYear: 2021,
  ExpectedPrev: { newMonth: 'November', newYear: 2021 },
  ExpectedNext: { newMonth: 'January', newYear: 2022 },
  customMonthNumber: 7,
  ExpectedMonth: 'August'
};

const component = shallow(<SGPS />);

describe('Saving goal plan simulator', () => {
  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });

  it('shows correct title', () => {
    expect(component.find('h3').text()).toBe(`Let's plan your saving goal.`);
  });

  it('snapshotShot', () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});

describe('Date validations', () => {
  it(`changeDate on click 'next' should return newMonth: 'January', newYear: 2022`, () => {
    expect(
      changeDate('next', mockData.customMonth, mockData.customYear)
    ).toMatchObject(mockData.ExpectedNext);
  });

  it(`changeDate on click 'prev' should return newMonth: 'November', newYear: 2021`, () => {
    expect(
      changeDate('prev', mockData.customMonth, mockData.customYear)
    ).toMatchObject(mockData.ExpectedPrev);
  });

  it(`pickDate on select month list index of 7 in year 2021 should return 'August'`, () => {
    expect(pickDate(mockData.customMonthNumber, mockData.customYear)).toBe(
      mockData.ExpectedMonth
    );
  });
});
