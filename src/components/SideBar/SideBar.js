import React from 'react';
import {NavLink} from'react-router-dom';
import classes from './SideBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro,faVideo } from '@fortawesome/free-solid-svg-icons'


const SideBar =(props)=>{
    
    let attachedClasses = [classes.wrapper,classes.Close];
    if (props.toggle) {
      attachedClasses = [classes.wrapper,classes.Open];
  }
    return(
        <div className={attachedClasses.join(' ')}>
            <div className={classes.sidebar}>
            <h1>FRAS</h1>
            </div>
                <div className={classes.list}>
                <ul >
                    <li><NavLink to="/Recorder"><FontAwesomeIcon icon={faVideo} /> Take Video</NavLink></li>
                    <li><NavLink to="/Attendance"><FontAwesomeIcon icon={faCameraRetro} /> Attendance</NavLink></li>
                </ul>
                </div>
        </div>
    )
}

export default SideBar;