import './Projects.scss';
import { useEffect, useState } from 'react';
import { projects } from '../assets/projects';
import ProjectCard from './ProjectCard';

//  list of available tags from project entries
const allTags = [];
projects.forEach((project) => {
  project.tags.forEach((tag) => {
    if (!allTags.includes(tag)) {
      allTags.push(tag);
    }
  });
  allTags.sort();
});

function Projects() {
  // active filter selection
  const [activeTag, setActiveTag] = useState(null);

  function handleClick(e) {
    const id = e.target.id;
    activeTag !== id ? setActiveTag(id) : setActiveTag(null);
  }

  return (
    <div className='projects-container'>
      <div className='tag-list'>
        {allTags.map((tag, index) => (
          <div
            className={`button tag ${activeTag === tag ? 'active' : ''}`}
            key={index}
            id={tag}
            onClick={handleClick}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className='project-gallery'>
        {projects.map((project, index) => {
          const filtered =
            activeTag === null || project.tags.includes(activeTag);

          return filtered && <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
