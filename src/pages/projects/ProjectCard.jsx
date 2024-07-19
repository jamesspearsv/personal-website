import PropTypes from 'prop-types';
import './ProjectCard.scss';

function ProjectCard({ project }) {
  return (
    <div className='project'>
      <div className='project-heading'>
        <h3>{project.name}</h3>
      </div>
      <hr className='divider' />
      <p>{project.desc}</p>
      <div className='project-tags'>
        {project.tags.map((tag, index) => (
          <div key={index} className='project-tag'>
            {tag}
          </div>
        ))}
      </div>
      <a href={project.github} target='_blank'>
        <div className='button link-button'>GitHub</div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
