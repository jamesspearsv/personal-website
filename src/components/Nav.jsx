import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="experience">Experience</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
