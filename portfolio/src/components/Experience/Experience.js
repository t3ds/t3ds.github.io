import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ProjectContainer from '../ExperienceContainer/ExperienceContainer'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section projects'>
      <h2 className='section__title'>Work Experience</h2>

      <div className='projects__grid'>
        {experience.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Experience
