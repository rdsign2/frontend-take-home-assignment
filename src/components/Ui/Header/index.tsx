import * as React from 'react';
import Lottie from 'react-lottie';
import IconTheme from '../../SVGs/Icons/IconTheme';
import * as logo from '../../../assets/animations/logo.json';
import './style.scss';

const Header: React.FC = () => {
  const handleThemeMode = () => {
    const themeMode = window.localStorage.getItem('theme');

    const changeTheme = (theme: string) => {
      document.getElementById('origin').setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    };

    themeMode === 'light' ? changeTheme('dark') : changeTheme('light');
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <header className="Header">
      <a href="/">
        <Lottie options={defaultOptions} height={'3rem'} width={'9rem'} />
      </a>
      <button title="Change theme" onClick={handleThemeMode}>
        <IconTheme color="#657786" />
      </button>
    </header>
  );
};

export default Header;
