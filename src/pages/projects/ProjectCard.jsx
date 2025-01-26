import PropTypes from 'prop-types';
import styles from './ProjectCard.module.css';
import clsx from 'clsx';

function ProjectCard({ project }) {
  return (
    <div className={styles.project}>
      <h3 className={styles.heading}>{project.name}</h3>
      <hr className="divider" />
      <p>{project.desc}</p>
      <div className={styles.tags}>
        {project.tags.map((tag, index) => (
          <div key={index} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.links}>
        <a href={project.github} target="_blank">
          <div className={clsx('button', [styles.link])}>View code</div>
        </a>
        {project.live && (
          <a href={project.live} target="_blank">
            <div className={clsx('button', [styles.link])}>Live preview</div>
          </a>
        )}
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
