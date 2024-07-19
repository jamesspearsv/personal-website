import { Link } from 'react-router-dom';

function Error() {
  const styles = {
    textAlign: 'center',
    margin: '4rem',
  };

  return (
    <div style={styles}>
      <h1>Looks like there was a problem</h1>
      <p>
        Click <Link to="/">here</Link> to go back home
      </p>
    </div>
  );
}

export default Error;
