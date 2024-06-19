import React from 'react'
import classes from'./Service.module.css';
export default function Service(props) {
  return (
    <div className={classes.service}>
        <h4>
            {props.name}
        </h4>  
        <ul>
            {props.description.map((item) =>  <li>{item}</li>)}
        </ul>
    </div>
  )
}
