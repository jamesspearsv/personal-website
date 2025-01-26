import PropTypes from 'prop-types';
import styles from './ExperienceCard.module.css';

function ExperienceCard({ entry }) {
  return (
    <div className="card">
      <h3 className="title">{entry.title}</h3>
      <hr className="divider" />
      <div className="dates">{entry.dates}</div>
      <div className="subtitle">{entry.subtitle}</div>

      {entry.content && <p className="content">{entry.content}</p>}
    </div>
  );
}

ExperienceCard.propTypes = {
  entry: PropTypes.object,
};

export default ExperienceCard;
