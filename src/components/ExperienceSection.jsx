import { Chevron } from '../assets/chevron';
import './ExperienceSection.scss';
import ExperienceCard from './ExperienceCard';
import PropTypes from 'prop-types';

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
      className={`section ${activeSection === id ? 'active' : 'inactive'}`}
    >
      <div className='section-header' onClick={handelClick}>
        <h2>{title}</h2>
        {Chevron}
      </div>
      <div className='section-content'>
        {section.map((entry, index) => (
          <ExperienceCard
            key={index}
            title={entry.title}
            subtitle={entry.subtile}
            dates={entry.dates}
            content={entry.content}
          />
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
