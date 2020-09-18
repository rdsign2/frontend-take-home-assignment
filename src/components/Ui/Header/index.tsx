import * as React from 'react';
import DarkMode from '../../SVGs/DarkMode';
import LogoOrigin from '../../SVGs/LogoOrigin';
import './style.scss';

const Header: React.FC = () => {
  const handleThemeMode = () => {
    const themeMode = JSON.parse(window.localStorage.getItem('darkMode'));
    localStorage.setItem('darkMode', `${!themeMode}`);
  };

  return (
    <header className="Header">
      <a href="/">
        <LogoOrigin color="#1d1e1f" />
      </a>
      <button title="Change theme color" onClick={handleThemeMode}>
        <DarkMode color="#657786" />
      </button>
    </header>
  );
};

export default Header;
