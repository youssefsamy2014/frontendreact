import React,{useEffect} from 'react';// eslint-disable-next-line
import { Route,
  HashRouter,
  Redirect,
  Switch
} from "react-router-dom";
import Registration from '../Registration/Registration'
import Login from '../Login/Login';
import Recorder from '../Recorder/Recorder';
import Attendance from '../Attendance/Attendance';
import Header from '../../components/Header/Header'
import Logout from '../Login/Logout/Logout'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

// import classes from './HomePage.css'

const HomePage =(props)=> {
  useEffect(()=>(
  props.onCheckAuth()
  ),[])
  let routes = (
    <Switch>
<Route exact  path="/Login" component={Login}/>
            <Route path="/Registration" component={Registration}/>
            <Redirect to="/Login" />    
            </Switch>
);

  if (props.isAuthenticated) {
    routes = (
      <Switch>
                <Route path="/Attendance" component={Attendance}/>
                <Route path="/Recorder" component={Recorder}/>
                <Route path="/logout" component={Logout} />
                <Redirect to="/Attendance" />
      </Switch>
    );
  }

  return (
      <HashRouter>
      <Header/>
      {routes}
      </HashRouter>
  );
}

const mapStateToProps= state =>{
  return{
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {

     onCheckAuth:()=>dispatch(actions.authCheckState())
  };
};
export default  connect(mapStateToProps,mapDispatchToProps)(HomePage);
