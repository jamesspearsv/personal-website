import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Nav.module.css';
import darkIcon from '../assets/dark-icon.svg';
import lightIcon from '../assets/light-icon.svg';
import { Chevron } from '../assets/chevron';
import { useState } from 'react';
import clsx from 'clsx';

function Nav({ isDarkTheme, setIsDarkTheme }) {
  const [navClosed, setNavClosed] = useState(true);

  const navHeight = 65;
  const menuHeight = window.innerHeight - navHeight;

  function closeNav() {
    setNavClosed(true);
  }

  // Navigation items and paths
  const navItems = [
    { path: '/', label: 'Home' },
    { path: 'about', label: 'About' },
    { path: 'experience', label: 'Experience' },
    { path: 'projects', label: 'Projects' },
  ];

  return (
    <nav style={{ height: `${navHeight}px` }} className={styles.nav}>
      <div className={styles.mobileMenu}>
        <Link className={styles.mobileHeading} to="/" onClick={closeNav}>
          James Spears, V
        </Link>
        <button
          className={clsx({
            [styles.closed]: navClosed,
            [styles.open]: !navClosed,
          })}
          onClick={() => {
            setNavClosed((navClosed) => !navClosed);
          }}
        >
          {Chevron}
        </button>
      </div>
      <div
        className={clsx([styles.menuContainer], {
          [styles.closed]: navClosed,
        })}
        /* the height transition is very hacky right now. 
        Waiting for better intrinsic keyword support to improve height transition 
        */
        style={{ height: !navClosed ? menuHeight + 'px' : '' }}
      >
        <Link className={styles.navHeading}>James Spears, V</Link>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink to={item.path} onClick={closeNav}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div>
          {/* <button
            className={styles.themeToggler}
            onClick={() => {
              setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            }}
          >
            <img src={isDarkTheme ? lightIcon : darkIcon} />
          </button> */}
        </div>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};

export default Nav;
