import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function Layout({ isDarkTheme, setIsDarkTheme }) {
  return (
    <>
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
