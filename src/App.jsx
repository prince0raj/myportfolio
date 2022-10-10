import React from "react";
// import {Routes, Route,Navigate} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Services from "./Services";
import Eabout from "./Eabout";
const App=()=>{
  return <>
   <Home/>
   <Navbar/>
   <Eabout/>
   <About/>
   <Services/>
   <Contact/>
   <Footer/>
  </>
}

export default App;