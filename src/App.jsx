import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div id='app' data-theme={isDarkTheme ? 'dark' : 'light'}>
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <Outlet />
    </div>
  );
}

export default App;
