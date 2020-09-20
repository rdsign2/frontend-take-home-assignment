import * as React from 'react';
import Button from '../../components/Ui/Button';
import Input from '../../components/Ui/Input';
import IconHouse from '../../components/SVGs/Icons/IconHouse';
import './style.scss';

const formatter = new Intl.NumberFormat('en-US', {
  useGrouping: true,
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const SavingGoalPlanSimulator: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);
  const [installment, setInstallment] = React.useState<number>(0);

  React.useEffect(() => {
    setInstallment(value);
    return () => {
      setInstallment(0);
    };
  }, [value]);

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
          <input type="text" />
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
          <div className="row">
            <p>zzzzzzzzzzzzzzzzzzzzzzzzz</p>
          </div>
        </div>
        <Button />
      </div>
    </section>
  );
};

export default SavingGoalPlanSimulator;
