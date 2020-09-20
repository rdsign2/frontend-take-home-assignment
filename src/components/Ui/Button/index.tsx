import * as React from 'react';
import './style.scss';

interface Props {
  enable?: number;
}

const Button: React.FC<Props> = props => (
  <button className="Button tp" disabled={props.enable <= 0 ? true : false}>
    Confirm
  </button>
);

export default Button;
