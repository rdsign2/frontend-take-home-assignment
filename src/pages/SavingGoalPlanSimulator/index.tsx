import * as React from 'react';
import moment from 'moment';
import Button from '../../components/Ui/Button';
import DatePicker from '../../components/Ui/DatePicker';
import Input from '../../components/Ui/Input';
import IconHouse from '../../components/SVGs/Icons/IconHouse';
import './style.scss';

const months = moment.months();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().toLocaleString('en-US', { month: 'long' });
const formatter = new Intl.NumberFormat('en-US', {
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
const minMonthGoalPeriod = 1;
const minStartingMonthIndex = months.indexOf(currentMonth) + minMonthGoalPeriod;
const minStartingMonth = months[minStartingMonthIndex];

const SavingGoalPlanSimulator: React.FC = () => {
  const [month, setMonth] = React.useState<string>(minStartingMonth);
  const [year, setYear] = React.useState<number>(currentYear);
  const [disabledMonths, setDisabledMonths] = React.useState<string[]>([]);
  const [deposits, setDeposits] = React.useState<number>(minMonthGoalPeriod);
  const [value, setValue] = React.useState<number>(0);
  const [installment, setInstallment] = React.useState<number>(0);

  React.useEffect(() => {
    setDisabledMonths(
      months.filter((e, index) => {
        if (index < months.indexOf(month)) {
          return e;
        }
      })
    );
  }, []);

  React.useEffect(() => {
    setDeposits(
      moment([year, months.indexOf(month), 1]).diff(
        moment([currentYear, months.indexOf(currentMonth), 1]),
        'months',
        true
      )
    );
    setInstallment(value / deposits);
    return () => {
      setDeposits(minMonthGoalPeriod);
      setInstallment(0);
    };
  }, [deposits, month, value, year]);

  const handleNextMonth = () => {
    const currMonthIndex = months.indexOf(month);
    month === 'December'
      ? (setMonth('January'), setYear(year + 1))
      : setMonth(months[currMonthIndex + 1]);
  };

  const handlePreviousMonth = () => {
    const currMonthIndex = months.indexOf(month);
    month === minStartingMonth && year === currentYear
      ? null
      : month === 'January'
      ? (setMonth('December'), setYear(year - 1))
      : setMonth(months[currMonthIndex - 1]);
  };

  const handlePickedDate = (pickedMonth: number) => {
    const currMonthIndex = months.indexOf(currentMonth);
    pickedMonth <= currMonthIndex && year === currentYear
      ? null
      : setMonth(months[pickedMonth]);
  };

  const summaryDetails = {
    empty: 'Insert total amount and choose a date.',
    deposits: ` ${deposits} ${deposits <= 1 ? 'deposit' : 'monthly deposits'} `,
    value: ` $${formatter.format(value)} `,
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
            currentMonth={currentMonth}
            currentYear={currentYear}
            disableds={disabledMonths}
            minStart={minStartingMonth}
            months={months}
            nextMonth={() => handleNextMonth()}
            nextYear={() => setYear(year + 1)}
            pickedDate={(pickedMonth: number) => handlePickedDate(pickedMonth)}
            previousMonth={() => handlePreviousMonth()}
            previousYear={() =>
              setYear(year === currentYear ? currentYear : year - 1)
            }
            stateMonth={month}
            stateYear={year}
            validateYear={() =>
              months.indexOf(month) < minStartingMonthIndex &&
              year === currentYear
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
              $<strong>{formatter.format(installment)}</strong>
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
        <Button enable={value} />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
