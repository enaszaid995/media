import React from 'react'
import classes from'./Service.module.css';
export default function CoreValue(props) {
  return (
    <div className={classes.service} style={{textAlign:"center"}}>
        <h4>
            {props.name}
        </h4>  
        <p>
            {props.description}
        </p>
    </div>
  )
}