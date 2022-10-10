import React from "react";
// import { Link } from "react-router-dom";
import web from '../src/img/3.png'; 
import Component from "./Component";


const Home=()=>{
    return(<>
    <section id="HOME">
        <Component tone={"HI,"} ttwo={"I'm prince Raj"} img={web}/>
     </section>
    </>);
}

export default Home;