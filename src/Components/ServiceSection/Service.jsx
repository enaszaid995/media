import React from 'react'
import { Link } from 'react-router-dom'
import classes from'./Service.module.css';
export default function Service(props) {
  return (
    <Link className={classes.service} to={"/services"}>
        <h4>
            {props.name}
        </h4>  
        <p>
            {props.description}
        </p>
    </Link>
  )
}
