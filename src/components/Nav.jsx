import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.scss';
import darkIcon from '../assets/dark-icon.svg';
import lightIcon from '../assets/light-icon.svg';
import { useState } from 'react';

function Nav({ isDarkTheme, setIsDarkTheme }) {
  const [navClosed, setNavClosed] = useState(true);

  const menuHeight = screen.height - 65;

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
    <nav>
      <div className='mobile-menu'>
        <p>Menu</p>
        <button
          className={navClosed ? 'closed' : 'open'}
          onClick={() => {
            setNavClosed((navClosed) => !navClosed);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            class='bi bi-chevron-down'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708'
            />
          </svg>
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
            className='theme-toggler'
            onClick={() => {
              setIsDarkTheme((isDarkTheme) => !isDarkTheme);
            }}
          >
            <img src={isDarkTheme ? lightIcon : darkIcon} alt='' srcset='' />
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
