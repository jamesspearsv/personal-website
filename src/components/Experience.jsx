import { useState } from 'react';
import Card from './Card';
import './Experience.scss';
import { education, professional } from '../assets/experince';

function Experience() {
  const [activeSection, setActiveSection] = useState(null);

  function handelClick(e) {
    const id = e.target.parentElement.id;

    if (id === activeSection) {
      setActiveSection(null);
    } else {
      id === 'professional'
        ? setActiveSection('professional')
        : setActiveSection('education');
    }
  }

  return (
    <div className='experience-container'>
      <section
        id='education'
        className={activeSection === 'education' ? 'active' : 'inactive'}
      >
        <h2 onClick={handelClick}>Education</h2>
        <div>
          {education.map((entry, index) => (
            <Card
              key={index}
              title={entry.title}
              subtitle={entry.subtile}
              dates={entry.dates}
              content={entry.content}
            />
          ))}
        </div>
      </section>
      <section
        id='professional'
        className={activeSection === 'professional' ? 'active' : 'inactive'}
      >
        <h2 onClick={handelClick}>Professional Experience</h2>
        <div>
          {professional.map((entry, index) => (
            <Card
              key={index}
              title={entry.title}
              subtitle={entry.subtile}
              dates={entry.dates}
              content={entry.content}
            />
          ))}
        </div>
      </section>
      <a
        href='https://drive.google.com/file/d/12DGzdualNeIHudpK-oitntHYa0VFcFTv/view?usp=drive_link'
        target='_blank'
      >
        <button className='button'>Download PDF</button>
      </a>
    </div>
  );
}

export default Experience;
