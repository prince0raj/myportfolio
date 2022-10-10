import React from "react";
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGlobe } from 'react-icons/bs'
import CV from './assect/CV.pdf'
// import {SiCodechef} from 'react-icons/si'
// import {SiLeetcode} from 'react-icons/si'
const Component = (prop) => {
    return (
        <>
            <div id="home">
                <div className="cv">
                    <a href={CV} download className="btn1 download">
                        <p>Download CV</p>
                    </a>
                    <div className="btn1 talk">
                        <a href='#contact'>
                            <p>Let's Talk</p>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <a href="https://github.com/Prince8032" target="_blank" rel="noreferrer">
                        <BsGithub className="right_social_icons" />
                    </a>
                    <a href="www.linkedin.com/in/prince-raj-597b8b214" target="_blank" rel="noreferrer">
                        <BsLinkedin className="right_social_icons" />
                    </a>
                    <a href="https://www.codechef.com/users/prince00raj" target="_blank" rel="noreferrer">
                        <BsGlobe className="right_social_icons" />
                    </a>
                    {/* <a href=""><SiCodechef/></a>
                <a href=""><SiLeetcode/></a> */}
                </div>
                <div className="box">
                    <div className="text">
                        <h1>{prop.tone}<br /><span>{prop.ttwo}</span></h1>
                        <p style={{"font-family":" cursive"}}>Fullstack Web developer</p>
                        <p>I design digital products and website for startup, brands and enterpreneurs with cool projects.</p>
                        <a href='#services'>
                            <button className="btn">
                                services
                            </button>
                        </a>
                    </div>
                    <div className="img">
                        <img src={prop.img} alt="" />
                    </div>

                </div>
                <div className="left">
                    <a href='#eabout'>
                        Scroll down
                    </a>
                </div>
            </div>
        </>
    );
}
export default Component;