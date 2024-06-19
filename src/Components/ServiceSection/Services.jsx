import React from 'react'
import './Services.css'
import CoreValue from './CoreValue'
export default function Services() {
  return (
    <div className='services'>
        <h3>
           Core Values
        </h3>
        <section>
            <CoreValue name={"Integrity"} 
                     description={"We uphold the highest standards of honesty and transparency in all our interactions."}
            />

            <CoreValue name={"Innovation"} 
                     description={"We embrace creativity and forward-thinking to stay ahead in the dynamic media landscape."}
            />

            <CoreValue name={"Excellence"} 
                     description={"We strive for superior quality in every aspect of our work."}
            />

            <CoreValue name={"Client-Centricity"} 
                     description={"We prioritize our clients&#39; needs and tailor our services to meet their unique objectives."}
            />
            
            <CoreValue name={"Collaboration"} 
                     description={"We believe in the power of teamwork and partnership to achieve outstanding results"}
            />
            
        </section>
     
    </div>
  )
}
