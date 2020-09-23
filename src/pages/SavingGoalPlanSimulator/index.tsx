import * as React from 'react';
import moment from 'moment';
import Button from '../../components/Ui/Button';
import DatePicker from '../../components/Ui/DatePicker';
import Input from '../../components/Ui/Input';
import IconHouse from '../../components/SVGs/Icons/IconHouse';
import './style.scss';

import * as date from './date';

const SavingGoalPlanSimulator: React.FC = () => {
  const [month, setMonth] = React.useState<string>(date.minStartingMonth);
  const [year, setYear] = React.useState<number>(date.currentYear);
  const [deposits, setDeposits] = React.useState<number>(
    date.minMonthGoalPeriod
  );
  const [value, setValue] = React.useState<number>(0);
  const [installment, setInstallment] = React.useState<number>(0);

  React.useEffect(() => {
    setDeposits(
      moment([year, date.months.indexOf(month), 1]).diff(
        moment([date.currentYear, date.months.indexOf(date.currentMonth), 1]),
        'months',
        true
      )
    );
    setInstallment(value / deposits);
    return () => {
      setDeposits(date.minMonthGoalPeriod);
      setInstallment(0);
    };
  }, [deposits, month, value, year]);

  const handleMonthChange = (action: 'prev' | 'next') => {
    const { newMonth, newYear } = date.changeDate(action, month, year);
    setMonth(newMonth);
    setYear(newYear);
  };

  const handlePickedDate = (pickedMonth: number) => {
    const value = date.pickDate(pickedMonth, year);
    value ? setMonth(value) : null;
  };

  const summaryDetails = {
    empty: 'Insert total amount and choose a date.',
    deposits: ` ${deposits} ${deposits <= 1 ? 'deposit' : 'monthly deposits'} `,
    value: ` $${date.formatter.format(value)} `,
    when: ` ${month} ${year}.`
  };

  return (
    <section className="SavingGoalPlanSimulator">
      <h3 className="tp">
        Let&apos;s plan your <strong>saving goal.</strong>
      </h3>
      <div className="goalPlanCalculator">
        <div className="heading">
          <IconHouse color="#657786" />
          <h1>Buy a house</h1>
          <p>Saving goal</p>
        </div>
        <div className="inputs row">
          <Input valueSetter={e => setValue(e)} type="number" />
          <DatePicker
            currentMonth={date.currentMonth}
            currentYear={date.currentYear}
            disableds={date.disabledMonths}
            minStart={date.minStartingMonth}
            months={date.months}
            nextMonth={() => handleMonthChange('next')}
            nextYear={() => setYear(year + 1)}
            pickedDate={(pickedMonth: number) => handlePickedDate(pickedMonth)}
            previousMonth={() => handleMonthChange('prev')}
            previousYear={() =>
              setYear(year === date.currentYear ? date.currentYear : year - 1)
            }
            stateMonth={month}
            stateYear={year}
            validateYear={() =>
              date.months.indexOf(month) < date.minStartingMonthIndex &&
              year === date.currentYear
                ? setYear(year + 1)
                : null
            }
          />
        </div>
        <div className="summary">
          <div className="row">
            <p className="label">
              Monthly
              <span> amount</span>
            </p>
            <h2 className="amount tp">
              $<strong>{date.formatter.format(installment)}</strong>
            </h2>
          </div>
          <div className="details row">
            {value === 0 ? (
              <p>{summaryDetails.empty}</p>
            ) : (
              <p>
                You&apos;re planning
                <strong>{summaryDetails.deposits}</strong>
                to reach your
                <strong>{summaryDetails.value}</strong>
                goal by
                <strong>{summaryDetails.when}</strong>
              </p>
            )}
          </div>
        </div>
        <Button enable={value <= 0 ? false : true} />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
