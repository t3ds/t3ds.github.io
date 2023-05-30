import uniqid from 'uniqid'
import { education } from '../../portfolio'
import ProjectContainer from '../EducationContainer/EducationContainer'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section projects'>
      <h2 className='section__title'>Education</h2>

      <div className='educations__grid'>
        {education.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Education
