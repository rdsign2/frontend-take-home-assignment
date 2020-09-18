import * as React from 'react';
import SavingGoalPlanSimulator from './pages/SavingGoalPlanSimulator';
import Wrapper from './components/Wrapper';
import './assets/styles/app.scss';

const App: React.FunctionComponent = () => {
  React.useEffect(() => {
    const themeMode = JSON.parse(window.localStorage.getItem('darkMode'));

    const changeTheme = (theme: string) => {
      document.getElementById('origin').setAttribute('data-theme', theme);
    };

    if (themeMode) {
      changeTheme('dark');
    } else {
      changeTheme('light');
    }

    // https://egghead.io/lessons/react-store-values-in-localstorage-with-the-react-useeffect-hook
    // Esse vídeo explica direitinho como fazer. Vou precisar controlar o tema pela STORE, para que o useeffect escute as alterações
    // Ver useselector e usedispatch
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
