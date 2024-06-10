import React from 'react'
import './AboutUs.css';
export default function AboutUs() {
  return (
    <div>
      <section>
        <h3>
            Our Mission
        </h3>
          <p>
            "Our mission is to empower businesses with innovative media startegies that 
            drive growth and engagment."
          </p>
        </section>

        <section>
          <h3>
            Our Core Values
          </h3>

          <ul className='values'>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Excellence</li>
            <li>Collaboration</li>
          </ul>
        </section>
    </div>
  )
}
