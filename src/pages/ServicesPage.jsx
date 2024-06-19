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
            <Service name={"Media Strategy Development"} 
                     description={["Comprehensive media planning and strategy formulation." ,
                                    "Market analysis and audience insights.",
                                    "Cross-platform integration and optimization."
                     ]}
            />

            <Service name={"Public Relations and Crisis Management"} 
                                description={["Reputation management and media relations." ,
                                                "Crisis communication strategies.",
                                                "Press releases, media kits, and corporate communication."
                                ]}
             />

            <Service name={"Digital Media and Social Media Management"} 
                     description={["Social media strategy and content creation." ,
                                    "Digital marketing and online advertising.",
                                    "Influencer engagement and community management."
                     ]}
            />

            <Service name={"Content Creation and Production:"} 
                     description={["Video production, photography, and graphic design." ,
                                    "Copywriting and editorial services.",
                                    "Multi-channel content strategy and execution."
                     ]}
            />

            <Service name={"Media Training and Workshops"} 
                     description={["Media training for executives and spokespersons." ,
                                    "Workshops on digital media trends and best practices.",
                                    "Customized training programs for internal teams."
                     ]}
            />

            <Service name={"Analytics and Performance Measurement"} 
                     description={["Media monitoring and analytics." ,
                                    "Performance metrics and reporting.",
                                    "Data-driven insights and recommendations."
                     ]}
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
