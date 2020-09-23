import * as React from 'react';
import { shallow } from 'enzyme';
import DatePicker from '../index';

import { months } from '../../../../pages/SavingGoalPlanSimulator/date';

const mockData = {
  currentMonth: 'August',
  currentYear: 2026
};

const component = shallow(
  <DatePicker
    currentMonth={mockData.currentMonth}
    currentYear={mockData.currentYear}
    disableds={[]}
    minStart={'January'}
    months={months}
    nextMonth={jest.fn()}
    nextYear={jest.fn()}
    pickedDate={jest.fn()}
    previousMonth={jest.fn()}
    previousYear={jest.fn()}
    stateMonth={mockData.currentMonth}
    stateYear={mockData.currentYear}
    validateYear={jest.fn()}
  />
);

describe('DatePicker', () => {
  it('renders', () => {
    expect(component.exists()).toEqual(true);
  });

  it(`Picker display date should be 'August2026'`, () => {
    expect(component.find('.pickerDisplay').text()).toContain(
      `${mockData.currentMonth + mockData.currentYear}`
    );
  });

  it('snapshotShot', () => {
    expect(component.getElements()).toMatchSnapshot();
  });
});
