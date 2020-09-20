import * as React from 'react';
import SavingGoalPlanSimulator from './pages/SavingGoalPlanSimulator';
import Wrapper from './components/Wrapper';
import './assets/styles/app.scss';

const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    const themeMode = window.localStorage.getItem('theme');

    const changeTheme = (theme: string) => {
      document.getElementById('origin').setAttribute('data-theme', theme);
    };

    !themeMode
      ? window.localStorage.setItem('theme', 'light')
      : themeMode === 'dark'
      ? changeTheme('dark')
      : changeTheme('light');

  }, []);

  return (
    <div id="origin" className="origin" data-theme="light">
      <Wrapper>
        <SavingGoalPlanSimulator />
      </Wrapper>
    </div>
  );
};

export default App;
