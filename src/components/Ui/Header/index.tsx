import * as React from 'react';
import DarkMode from '../../SVGs/DarkMode';
import LogoOrigin from '../../SVGs/LogoOrigin';
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

  return (
    <header className="Header">
      <a href="/">
        <LogoOrigin color="#1d1e1f" />
      </a>
      <button title="Change theme" onClick={handleThemeMode}>
        <DarkMode color="#657786" />
      </button>
    </header>
  );
};

export default Header;
