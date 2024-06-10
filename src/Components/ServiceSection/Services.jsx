import React from 'react'
import './Services.css'
import Service from './Service'
export default function Services() {
  return (
    <div className='services'>
        <h3>
            OUR KEY SERVICES
        </h3>
        <section>
            <Service name={"Testimonials"} 
                     description={"Quotes from satisfied clients"}
            />

            <Service name={"Featured Case Studies/Projects"} 
                     description={"Highlights of successful projects"}
            />
            
        </section>
     
    </div>
  )
}
