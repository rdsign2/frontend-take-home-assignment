import * as React from 'react';
import Button from '../../components/Ui/Button';
import Input from '../../components/Ui/Input';
import IconHouse from '../../components/SVGs/Icons/IconHouse';
import './style.scss';

const SavingGoalPlanSimulator: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

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
            <h2 className="amount tp">$00000</h2>
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
