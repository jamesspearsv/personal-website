import PropTypes from 'prop-types';
import styles from './ExperienceCard.module.css';

function ExperienceCard({ entry }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{entry.title}</h3>
      <hr className="divider" />
      <div className={styles.dates}>{entry.dates}</div>
      <div className={styles.subtitle}>{entry.subtitle}</div>

      {entry.content && <p className={styles.content}>{entry.content}</p>}
    </div>
  );
}

ExperienceCard.propTypes = {
  entry: PropTypes.object,
};

export default ExperienceCard;
