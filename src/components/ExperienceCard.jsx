import PropTypes from 'prop-types';
import './ExperienceCard.scss';

function ExperienceCard({ title, subtitle, dates, content }) {
  return (
    <div className='card'>
      <h3 className='title'>{title}</h3>
      <div className='dates'>{dates}</div>
      <hr className='divider' />
      <div className='subtitle'>{subtitle}</div>

      {content && <p className='content'>{content}</p>}
    </div>
  );
}

ExperienceCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  dates: PropTypes.string,
  content: PropTypes.string,
};

export default ExperienceCard;
