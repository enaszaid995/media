import React from 'react'
import '../Components/Introduction/Introduction.css';
import team from '../assets/images/team.jpg'
export default function AboutUs() {
  return (
    <div>
      <section className='intro' style={{"min-height":"65vh"}}>
        <h3>
            Our Team
        </h3>
        <img src={team} width='250px' height='200px' style={{padding:'1rem'}} alt="team"/>
          <p>
            "Our team comprises industry veterans, creative thinkers, and technical experts
            with diverse backgrounds in journalism, public relations, digital marketing, and content
            production. Each member brings a unique perspective and a wealth of experience, ensuring
            our clients receive the best advice and solutions."
          </p>
        </section>

    </div>
  )
}
