import * as React from 'react';
import CurrencyInput from 'react-currency-input';
import './style.scss';

interface Props {
  valueSetter: (floatValue: number) => number | void;
  type?: string;
}

const Input: React.FC<Props> = props => {
  const [value, setValue] = React.useState<number>(0);
  const refInput = React.useRef<HTMLInputElement>(null);

  return (
    <label className="Input">
      Total amount
      <span className="innerHolder">
        <span className="icon">$</span>
        <CurrencyInput
          autoFocus
          maxLength="11"
          precision="0"
          ref={refInput}
          selectAllOnFocus
          size="9"
          thousandSeparator=","
          value={value}
          onChangeEvent={(
            event: object,
            maskedValue: string,
            floatValue: number
          ) => (props.valueSetter(floatValue), setValue(floatValue))}
        />
      </span>
    </label>
  );
};

export default Input;
