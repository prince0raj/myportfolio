import React from "react";
import web from './img/7.png';
import {MdDevices} from 'react-icons/md'
import {GrReactjs} from 'react-icons/gr'
import {FaHtml5} from 'react-icons/fa'
import {DiBootstrap} from 'react-icons/di'
const About=()=>{
    return(<>
      <section id="services">
      <div className="head_services" >
            <h5>what I offer</h5>
            <h2>services</h2>
            </div>
            <div className="box box_feature">
                <div className="left_box">
                <div className="text text_services">
                    <h1>My clients knows that i always provide top-level<span> services</span></h1>
                    <div className="feature">
                    <div className="set_feature">
                    <li><FaHtml5 className="feature_icons"/><p> HTML5/CSS3</p></li>
                    <li><DiBootstrap className="feature_icons"/><p> Bootstarp website</p></li>
                    </div>
                    <div className="set_feature">
                    <li><GrReactjs className="feature_icons"/><p> React</p></li>
                    <li><MdDevices className="feature_icons"/> <p>Device friendly</p></li>
                    </div>
                </div>
                    <a href='#portfolio'>
                    <button className="btn">
                        portfolio
                    </button>
                    </a>
                </div>
                </div>
                <div className="img">
                    <img src={web} alt=""/>
                </div>
                
            </div>
     </section>
    </>);
}

export default About;