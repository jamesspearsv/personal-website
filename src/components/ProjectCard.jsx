import PropTypes from 'prop-types';
import './ProjectCard.scss';

function ProjectCard({ project }) {
  return (
    <div className='project'>
      <div className='project-heading'>
        <a className='link' href={project.link}>
          <h3>{project.name}</h3>
        </a>
      </div>
      <hr className='divider' />
      <p>{project.desc}</p>
      <div className='project-tags'>
        {project.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
      <a href=''>
        <div className='button link-button'>GitHub</div>
      </a>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
