import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='experience__stack-item'>{project.position}</p>
    <p className='project__description'>{project.dates}</p>
    <p className='experience__addr-item'>{project.addr}</p>
    


    <p className='project__description'>
      {project.details.split('\n').map((line, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={`experience-${idx}`}>{line}</div>
      ))}
    </p>


  </div>
)

export default ExperienceContainer
