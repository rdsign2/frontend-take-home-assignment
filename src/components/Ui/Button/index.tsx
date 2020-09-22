import * as React from 'react';
import './style.scss';

interface Props {
  enable?: boolean;
}

const Button: React.FC<Props> = props => (
  <button className="Button tp" disabled={!props.enable}>
    Confirm
  </button>
);

export default Button;
