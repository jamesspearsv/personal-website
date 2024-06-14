import { Link } from 'react-router-dom';

function Nav() {
  const style = {
    display: 'flex',
  };

  return (
    <nav>
      <ul style={style}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to={'test'}>Test</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
