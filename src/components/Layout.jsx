import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import styles from './Layout.module.css';

function Layout({ isDarkTheme, setIsDarkTheme }) {
  return (
    <>
      <Nav isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
