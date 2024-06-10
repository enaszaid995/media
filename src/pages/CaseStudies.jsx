import React from 'react'
import './CaseStudies.css'
import Project from '../Components/Project/Project'
export default function CaseStudies() {
  return (
    <div className='caseStudies'>
        
        <h2>Our Completed Projects</h2>

        <Project projectName={"Boosting Brand Awareness for ABC Corp"} 
                 challenge={"ABC Corp struggled with brand recognition in a crowded market."}
                 solution={"Developed a comprehensive media campaign including social media , video content and PR outreach."}
                 results={"Increased brand awareness by 50% within six months."}
                 />
    </div>
  )
}
