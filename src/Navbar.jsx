import React from "react";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {AiOutlineSetting} from 'react-icons/ai'
import { useState } from "react";

const Navbar=()=>{
    const [val,setval]=useState('#HOME');
    // const hov=()=>{
    //     if(window.scrollY>=0 & window.screenY<=721){
    //         setval('#HOME');
    //     }
    //     if(window.scrollY>=722 & window.screenY<=(722+1235)){
    //         setval('#eabout');
    //     }
    //     if(window.scrollY>=(722+1236) & window.screenY<=(722+1236+685)){
    //         setval('#services');
    //     }
    //     if(window.scrollY>=(722+1236+686) && window.screenY<=(722+1236+685+1404)){
    //         setval('#portfolio');
    //     }
    //     if(window.scrollY>(722+1236+685+1405)){
    //         setval('#contact');
    //     }
    // }
    // window.addEventListener('scroll',hov);
    return(<>
        <nav className="link">
                    <li><a href="#HOME" onClick={()=>{setval('#HOME')}} className={val==='#HOME'?'active':''} ><AiOutlineHome/></a></li>
                    <li><a href="#eabout" onClick={()=>{setval('#eabout')}} className={val==='#eabout'?'active':''}><AiOutlineUser/></a></li>
                    <li><a href="#services" onClick={()=>{setval('#services')}} className={val==='#services'?'active':''}><RiServiceLine/></a></li>
                    <li><a href="#portfolio" onClick={()=>{setval('#portfolio')}} className={val==='#portfolio'?'active':''}><AiOutlineSetting/></a></li>
                    <li><a href="#contact" onClick={()=>{setval('#contact')}} className={val==='#contact'?'active':''}><BiMessageSquareDetail/></a></li>
        </nav>
    </>)
}

export default Navbar;