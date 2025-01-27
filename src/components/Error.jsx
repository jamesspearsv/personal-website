import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error({ to = '/' }) {
  const styles = {
    textAlign: 'center',
    margin: '4rem',
  };

  return (
    <div style={styles}>
      <h1>Looks like there was a problem</h1>
      <p>
        Click <Link to={to}>here</Link> to go back
      </p>
    </div>
  );
}

Error.propTypes = {
  to: PropTypes.string,
};

export default Error;
