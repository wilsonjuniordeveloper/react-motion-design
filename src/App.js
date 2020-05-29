import React from "react";
import { MotionLayoutProvider } from "react-motion-layout";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./base.css";
import Photos from "./Photos";
import Photo from "./Photo";
import Globalstyle from './styles/global'
export default function App() {
  return (
  <>  
  <Globalstyle/>
    <Router>
      <MotionLayoutProvider>
        <Switch>
          <Route path="/photo/:photoId">
            <Photo />
          </Route>
          <Route path="/">
            <Photos />
          </Route>
        </Switch>
      </MotionLayoutProvider>
    </Router>
    </>
  );
}
