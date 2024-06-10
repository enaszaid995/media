import React from 'react';
import EmailForm from '../Components/Email/EmailForm';
import  CIcon  from '@coreui/icons-react';
import { cibFacebook, cibGmail , cibInstagram , cibLinkedinIn ,cilLocationPin,cilPhone} from '@coreui/icons';
import './ContactUs.css'
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div>
        <h3>Welcome to Contact Page</h3>
        <div className='contact'>
        <section className='contact_info'>
           
             <ul>
                <li>
                   <h3>Contact Info</h3>
                </li>
                <li>
                   <span> <CIcon className='iconsLink' icon={cilLocationPin}  /></span>    123 Media St,Suite 100 , New York, NY 10001              
                </li>
                
                <li>
                  <span><CIcon className='iconsLink' icon={cilPhone} /></span>  (123)456-7890
                </li>
                <li>
                  <span><CIcon className='iconsLink' icon={cibGmail} /></span> info@xvzmediacnsultancy.com
                </li>
                 
                <li className='social' >
                  <span className='head'>Social Media Link:</span>
                  
                  <span>
                    <Link to={'https://mail.google.com/mail'} >
                         <CIcon className='iconsLink' icon={cibFacebook} />
                    </Link>
                  </span>
                  <span>
                    <Link to={'/'}>
                        <CIcon className='iconsLink' icon={cibInstagram}  />
                    </Link>
                  </span>
                  <span>
                    <Link to={'/'}>
                        <CIcon  className='iconsLink' icon={cibLinkedinIn}/>
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
