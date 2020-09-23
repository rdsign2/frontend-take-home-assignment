import * as React from 'react';
import { shallow } from 'enzyme';
import SGPS from '../index';

// import {
//   // months,
//   // currentYear,
//   // currentMonth,
//   // formatter,
//   // minMonthGoalPeriod,
//   // minStartingMonthIndex,
//   // minStartingMonth,
//   // disabledMonths,
//   changeDate
//   // pickDate
// } from '../date';

// const mockedData = {
//   totalAmount: 30000,
//   reachGoalBy: 11,
//   expectedMonthlyAmount: 10000
// };

describe('Saving goal plan simulator', () => {
  const component = shallow(<SGPS />);
  // console.log(component.debug());

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

// const mockedData = {
//   totalAmount: 30000,
//   reachGoalBy: 11,
//   expectedMonthlyAmount: 10000
// };

// describe('Monthly amount value', () => {
//   it('the division between totalAmount by reachGoalBy should result in the expectedMonthlyAmount', () => {
//     const zz = changeDate()
//   })
// })
