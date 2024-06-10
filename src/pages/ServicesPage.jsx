import React from 'react';
import './Services.css';
import Service from '../Components/ServiceSection/Service';
import { Link } from 'react-router-dom';
import Button from '../Components/Header/Button';

export default function ServicesPage() {
  return (
    <div className='services'>
        <h3>
            OUR KEY SERVICES
        </h3>
        <section>
            <Service name={"Media Strategy Consulting"} 
                     description={"Develop comprehensive media strategies tailored to your business goals."}
            />

            <Service name={"Content Creation"} 
                     description={"High-quality content production for digital , print and broadcast media."}
            />
            
            <Service name={"Digital Marketing"} 
                     description={"Innovative digital marketing solutions to boost your online presence."}
            />

          
       
            
            
        </section>
          <div className="quote">
            <p>For more detailes about our services</p>
            <Link to={"/contactus"} className="start">
              
                 <Button >GET QUOTE</Button>
            </Link>
            
        </div>
     
    </div>
  )
}
