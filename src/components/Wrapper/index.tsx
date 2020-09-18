import * as React from 'react';
import Header from '../Ui/Header';
import './style.scss';

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="wrapper">{children}</main>
    </>
  );
};

export default Wrapper;
