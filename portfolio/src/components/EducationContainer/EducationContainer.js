/* eslint-disable jsx-a11y/alt-text */
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './EducationContainer.css'

const ProjectContainer = ({ project }) => (
  // eslint-disable-next-line react/jsx-no-comment-textnodes
  <div className='education'>
    
    <img src={project.logo} className="unilogo invert"/>
    <h3>{project.name}</h3>
    <p className='project__description'>{project.start} - {project.end}</p>
    {project.expected && <p className='project__description'>Expected: {project.expected}</p>}
    <p className='project__description'>GPA: {project.gpa}</p>
    
  

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer
