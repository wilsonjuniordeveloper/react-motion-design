import React from "react";
import Routes from './router/index.routes'
import Globalstyle from './styles/global' 
import {AuthProvider} from './context/auth' 

export default function App() {
  return (
  <AuthProvider>  
    <Globalstyle/>
    <Routes/>
  </AuthProvider>
  );
}
