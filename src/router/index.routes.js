import React from "react";
import { MotionLayoutProvider } from "react-motion-layout";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import "../styles/base.css";
import Photos from "../screen/Photos";
import Photo from "../screen/Photo";
import Login from '../screen/Login'

import {useAuth} from '../context/auth'


export default function App({login}) {
  const { signed, user, signIn,loading } = useAuth()
  
  return (
  <>  
    <Router>
      <MotionLayoutProvider>
        <Switch>
          <Route path="/photo/:photoId">
            <Photo />
          </Route>
          <Route path="/" exact>
            {signed? <Redirect to="/dashboard"/> : <Redirect to="/login"/>}
          </Route>
          <Route path="/dashboard" exact>
            {signed? <Photos /> : <Redirect to='/login'/>}
          </Route>
          <Route path="/login">
            {signed? <Redirect to="/dashboard"/> : <Login />}
          </Route>
        </Switch>
      </MotionLayoutProvider>
    </Router>
    </>
  );
}
