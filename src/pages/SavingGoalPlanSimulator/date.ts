import moment from 'moment';

export const months = moment.months();
export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().toLocaleString('en-US', {
  month: 'long'
});
export const formatter = new Intl.NumberFormat('en-US', {
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
export const minMonthGoalPeriod = 1;
export const minStartingMonthIndex =
  months.indexOf(currentMonth) + minMonthGoalPeriod;
export const minStartingMonth = months[minStartingMonthIndex];
export const disabledMonths = months.filter((e, index) => {
  if (index < months.indexOf(minStartingMonth)) {
    return e;
  }
});

export const changeDate = (
  action: 'prev' | 'next',
  month: string,
  year: number
) => {
  let newMonth = month;
  let newYear = year;
  const currMonthIndex = months.indexOf(month);
  if (action === 'next') {
    month === 'December'
      ? ((newMonth = 'January'), (newYear += 1))
      : (newMonth = months[currMonthIndex + 1]);
  } else {
    month === minStartingMonth && year === currentYear
      ? null
      : month === 'January'
      ? ((newMonth = 'December'), (newYear -= 1))
      : (newMonth = months[currMonthIndex - 1]);
  }
  return {
    newMonth,
    newYear
  };
};

export const pickDate = (pickedMonth: number, year: number) => {
  const currMonthIndex = months.indexOf(currentMonth);
  if (pickedMonth <= currMonthIndex && year === currentYear) {
    return;
  }
  return months[pickedMonth];
};
