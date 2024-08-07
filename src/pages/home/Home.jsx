import { Link } from 'react-router-dom';
import './Home.scss';
import { LinkedIn, GitHub } from '../../assets/connect-icons';

function Home() {
  return (
    <div className='home-container'>
      <h1>Hi, I&apos;m James!</h1>
      <p>A Public Librarian, Hobbist Web Developer, and Full-Time Cat Lover</p>
      <Link to='/about'>
        <button className='button about-cta'>About Me</button>
      </Link>
      <hr className='divider' />
      <h2>Connect with me online</h2>
      <div className='connect-links'>
        <a href='https://github.com/jamesspearsv' target='_blank'>
          {GitHub}
        </a>
        <a href='https://www.linkedin.com/in/jamesspearsv/' target='_blank'>
          {LinkedIn}
        </a>
      </div>
    </div>
  );
}

export default Home;
