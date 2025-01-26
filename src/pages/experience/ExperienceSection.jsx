import { Chevron } from '../../assets/chevron';
import ExperienceCard from './ExperienceCard';
import PropTypes from 'prop-types';
import styles from './ExperienceSection.module.css';
import clsx from 'clsx';

function ExperienceSection({
  activeSection,
  setActiveSection,
  section,
  title,
  id,
}) {
  function handelClick(e) {
    const id = e.currentTarget.parentElement.id;

    id === activeSection ? setActiveSection(null) : setActiveSection(id);
  }

  return (
    <section
      id={id}
      className={clsx(
        [styles.section],
        activeSection === id ? [styles.active] : [styles.inactive]
      )}
    >
      <div className={styles.header} onClick={handelClick}>
        <h2>{title}</h2>
        {Chevron}
      </div>
      <div className={styles.content}>
        {section.map((entry, index) => (
          <ExperienceCard key={index} entry={entry} />
        ))}
      </div>
    </section>
  );
}

ExperienceSection.propTypes = {
  activeSection: PropTypes.func.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  section: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ExperienceSection;
