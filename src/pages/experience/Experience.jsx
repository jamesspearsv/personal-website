import { education, professional } from '../../content/experince';
import ExperienceSection from './ExperienceSection';
import './Experience.scss';
import { useState } from 'react';

function Experience() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className='experience-container'>
      <h1>My Experience</h1>
      <a
        href='https://drive.google.com/file/d/12DGzdualNeIHudpK-oitntHYa0VFcFTv/view?usp=drive_link'
        target='_blank'
      >
        <button className='button'>Download My Resume</button>
      </a>
      <hr className='divider' />
      <ExperienceSection
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        section={education}
        title={'Education'}
        id={'education'}
      />
      <ExperienceSection
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        section={professional}
        title={'Professional'}
        id={'professional'}
      />
    </div>
  );
}

export default Experience;
