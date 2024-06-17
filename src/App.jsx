import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('isDarkTheme');
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <div id="app" data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
