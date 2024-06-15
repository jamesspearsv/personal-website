import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.scss';
import darkIcon from '../assets/dark-icon.svg';
import lightIcon from '../assets/light-icon.svg';

function Nav({ isDarkTheme, setIsDarkTheme }) {
  return (
    <nav data-theme={isDarkTheme ? 'dark' : 'light'}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='about'>About</NavLink>
        </li>
        <li>
          <NavLink to='experience'>Experience</NavLink>
        </li>
        <li>
          <NavLink to='projects'>Projects</NavLink>
        </li>
      </ul>
      <div>
        <button
          className='theme-toggler'
          onClick={() => {
            setIsDarkTheme((isDarkTheme) => !isDarkTheme);
          }}
        >
          <img src={isDarkTheme ? darkIcon : lightIcon} alt='' srcset='' />
        </button>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  setIsDarkTheme: PropTypes.func.isRequired,
};

export default Nav;
