import React,{useState} from 'react';
import {NavLink} from'react-router-dom';
import classes from './Header.css'
import { connect } from 'react-redux';
import DrawerToggle from '../UI/DrawerToggle/DrawerToggle'
import SideBar from '../SideBar/SideBar';


const Header =(props)=>{
  const [lock,setLock]=useState(false);
  const [name,setName]=useState("Login");

    let Navs=(
        <ul>
          <li><NavLink to="/Login" >Login</NavLink></li>
          <li><NavLink to="/Registration">Registration</NavLink></li>
        </ul>
    );
    if (props.isAuthenticated) {
        Navs=(
        <ul >
        <li><NavLink to="/Logout">Logout</NavLink></li>
      </ul>)};
      const chs =()=>(
        setLock(!lock)
      );
      let attachedClasses =classes.containerOpen;
    if (!lock) {
      attachedClasses =classes.containerClose;
  }
    return(
      <div>
        <SideBar toggle={lock} />
        <div className={attachedClasses}>
        <DrawerToggle clicked={chs}/>
        <div className={classes.header}>
        <h2>{name}</h2>
        </div>
        <div className={classes.list}>
        {Navs}
        </div>

        </div>
          
         </div>
    )
}

/*

        

*/
const mapStateToProps= state =>{
    return{
      isAuthenticated: state.auth.token !== null,
    };
  };
  export default  connect(mapStateToProps)(Header);
  