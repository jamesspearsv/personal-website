import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.scss';
import darkIcon from '../assets/dark-icon.svg';
import lightIcon from '../assets/light-icon.svg';
import { Chevron } from '../assets/chevron';
import { useState } from 'react';

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
    <nav style={{ height: `${navHeight}px` }}>
      <div className="mobile-menu">
        <Link to="/">James Spears, V</Link>
        <button
          className={navClosed ? 'closed' : 'open'}
          onClick={() => {
            setNavClosed((navClosed) => !navClosed);
          }}
        >
          {Chevron}
        </button>
      </div>
      <div
        className={'menu-container ' + (navClosed ? 'closed' : 'open')}
        style={{ height: navClosed ? '' : menuHeight + 'px' }}
      >
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
          <button
            className="theme-toggler"
            onClick={() => {
              setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            }}
          >
            <img src={isDarkTheme ? lightIcon : darkIcon} alt="" srcset="" />
          </button>
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
