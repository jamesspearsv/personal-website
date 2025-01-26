import { Link } from 'react-router-dom';
import { LinkedIn, GitHub } from '../../assets/connect-icons';
import styles from './Home.module.css';
import clsx from 'clsx';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Hi, I&apos;m James!</h1>
      <p>A Public Librarian, Hobbyist Web Developer, and Full-Time Cat Lover</p>
      <Link to="/about">
        <button className={clsx('button', [styles.cta])}>About Me</button>
      </Link>
      <hr className="divider" />
      <h2>Connect with me online</h2>
      <div className={styles.links}>
        <a href="https://github.com/jamesspearsv" target="_blank">
          {GitHub}
        </a>
        <a href="https://www.linkedin.com/in/jamesspearsv/" target="_blank">
          {LinkedIn}
        </a>
      </div>
    </div>
  );
}

export default Home;
