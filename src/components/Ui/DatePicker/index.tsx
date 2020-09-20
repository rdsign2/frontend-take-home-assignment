import * as React from 'react';
import './style.scss';

interface Props {
  currentMonth: string;
  currentYear: number;
  disableds: string[];
  nextMonth: () => void;
  nextYear: () => void;
  minStart: string;
  months: string[];
  pickedDate: (monthIndex: number) => number | void;
  previousMonth: () => void;
  previousYear: () => void;
  stateMonth: string;
  stateYear: number;
  validateYear: () => void;
}

interface Event {
  key: string;
}

const DatePicker: React.FC<Props> = props => {
  const [picker, setPicker] = React.useState<boolean>(false);

  const handlePickDate = (pickState: boolean) => {
    setPicker(pickState);
    props.validateYear();
  };

  const handleButton = (type: string) => {
    type === 'previous' ? props.previousMonth() : props.nextMonth();
  };

  const handleKeyPress = (event: Event) => {
    if (event.key === 'ArrowLeft') {
      handleButton('previous');
    }
    if (event.key === 'ArrowRight') {
      handleButton('next');
    }
  };

  const list = props.months.map((m, index) => (
    <li
      key={index}
      onClick={() => (props.pickedDate(index), handlePickDate(false))}
      className={
        props.disableds.includes(m) && props.stateYear === props.currentYear
          ? 'disabled'
          : m === props.stateMonth
          ? 'current'
          : null
      }
    >
      <p>{m.substring(3, 0)}</p>
    </li>
  ));

  return (
    <div className="DatePicker">
      <label>Reach goal by</label>
      {/* DISPLAY */}
      <span className="innerHolder">
        <button
          className="back"
          disabled={
            props.currentYear === props.stateYear &&
            props.minStart === props.stateMonth
              ? true
              : false
          }
          onClick={() => handleButton('previous')}
          onKeyDown={handleKeyPress}
        >
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        <button
          className="pickerDisplay"
          onClick={() => handlePickDate(!picker)}
          onKeyDown={handleKeyPress}
        >
          <p>
            {props.stateMonth}
            <small>
              <br />
              {props.stateYear}
            </small>
          </p>
        </button>
        <button
          className="forward"
          onClick={() => handleButton('next')}
          onKeyDown={handleKeyPress}
        >
          <img src={require('~/assets/icons/arrow.svg')} />
        </button>
        {/* PICKER */}
        {picker ? (
          <div className="picker" onMouseLeave={() => handlePickDate(false)}>
            <div className="row">
              <button className="back" onClick={props.previousYear}>
                <img src={require('~/assets/icons/arrow.svg')} />
              </button>
              <button
                className="pickerDisplay"
                onClick={() => handlePickDate(!picker)}
              >
                <p> {props.stateYear} </p>
              </button>
              <button className="forward" onClick={props.nextYear}>
                <img src={require('~/assets/icons/arrow.svg')} />
              </button>
            </div>
            <ul className="pickerMonths">{list}</ul>
          </div>
        ) : null}
      </span>
    </div>
  );
};

export default DatePicker;
