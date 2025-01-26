import { useState } from 'react';
import { projects } from '../../content/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';
import clsx from 'clsx';

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
    <div className={styles.container}>
      <h1>My Projects</h1>
      <div className={styles.tags}>
        {allTags.map((tag, index) => (
          <div
            className={{
              [styles.button]: true,
              [styles.tag]: true,
              [styles.active]: activeTag === tag,
            }}
            key={index}
            id={tag}
            onClick={handleClick}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.gallery}>
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
