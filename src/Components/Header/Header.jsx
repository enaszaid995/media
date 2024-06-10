import React from 'react';

import consult from '../../assets/images/consult.mp4';
import Button from './Button';
import { Link } from 'react-router-dom';
import classes from'./Header.module.css';
export default function Header() {
  
  return (
    <div className={classes.container}>
        <video autoPlay  >
          <source src={consult}/>
        </video>
      
        <div className={classes.center}>
            <p>Transforming Media Strategies For Tomorrow's Leaders</p>
            <Link to={"contactus"} className={classes.start}>
              
                 <Button >GET STARTED</Button>
            </Link>
            
        </div>
    </div>
  )
}
