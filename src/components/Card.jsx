import PropTypes from 'prop-types';
import './Card.scss';

function Card({ title, subtitle, dates, content }) {
  return (
    <div className='card'>
      <h3 className='title'>{title}</h3>
      <hr className='divider' />
      <div className='subtitle'>{subtitle}</div>
      <div className='dates'>{dates}</div>
      {content && <p className='content'>{content}</p>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dates: PropTypes.string,
  content: PropTypes.string,
};

export default Card;
