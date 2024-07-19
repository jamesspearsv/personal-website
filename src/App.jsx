import { useEffect, useState } from 'react';
import './App.scss';
import Layout from './components/Layout';

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
    <div id='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Layout isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </div>
  );
}

export default App;
