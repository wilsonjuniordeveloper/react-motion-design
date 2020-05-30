import React from "react";
import { MotionLayoutProvider } from "react-motion-layout";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./styles/base.css";
import Photos from "./screen/Photos";
import Photo from "./screen/Photo";
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
