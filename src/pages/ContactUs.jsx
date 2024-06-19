import React from 'react';
import EmailForm from '../Components/Email/EmailForm';
import  CIcon  from '@coreui/icons-react';
import { cibFacebook, cibGmail , cibInstagram , cibLinkedinIn ,cibTwitter,cilApps,cilLocationPin,cilMobile} from '@coreui/icons';
import './ContactUs.css'
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div>
        <h3>Welcome to Contact Page</h3>
        <p style={{fontWeight:"500"}}>
        For inquiries or to learn more about how Vision Media Consultancy can help
        your business thrive in the media landscape, please contact us:
        </p>
        <div className='contact'>
        <section className='contact_info'>
           
             <ul>
                <li>
                   <h3>Contact Info</h3>
                </li>
                <li>
                   <span> <CIcon className='iconsLink' icon={cilLocationPin}  /></span>    19 old hall street, Liverpool, L3 9JQ, UK.             
                </li>
                
                <li>
                  <span><CIcon className='iconsLink' icon={cilMobile} /></span>  +447400206898
                </li>
                <li>
                  <span><CIcon className='iconsLink' icon={cibGmail} /></span> info@visionmediaconsultancy.com
                </li>
                <li>
                  <span><CIcon className='iconsLink' icon={cilApps} /></span> www.visionmediaconsultancy.com
                </li>
                 
                <li className='social' >
                  <span className='head'>Social Media Link:</span>
                  
                  <span>
                    <Link to={'https://facebook.com/ visionmediaconsultancy'} >
                         <CIcon className='iconsLink' icon={cibFacebook} />
                    </Link>
                  </span>
                  <span>
                    <Link to={'https://instagram.com/ visionmediaconsultancy'}>
                        <CIcon className='iconsLink' icon={cibInstagram}  />
                    </Link>
                  </span>
                  <span>
                    <Link to={'https://linkedin.com/company/visionmediaconsultancy'}>
                        <CIcon  className='iconsLink' icon={cibLinkedinIn}/>
                    </Link>
                  </span> 
                  <span>
                    <Link to={'https://twitter.com/ visionmediaconsultancy'}>
                        <CIcon  className='iconsLink' icon={cibTwitter}/>
                    </Link>
                  </span>                   
                </li> 
                
             </ul>
        </section>
        <EmailForm/>
        </div>
    </div>
  )
}
