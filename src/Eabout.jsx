import React from "react";
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi';
import { BsPatchCheckFill } from 'react-icons/bs';
import { VscFolderLibrary } from 'react-icons/vsc';
import {FaHackerrank} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

import me from './img/profile.jpeg'

const Eabout = () => {
    return (<>
        <section id="eabout">
            <div id="intro" >
                <div className="about_head_text" >
                    <h5>Get to know</h5>
                    <h2>About Me</h2>
                </div>
                <div id="about">
                    <div className="my_profile">
                        <div className="me">
                        <img src={me} alt="" />
                        </div>
                    </div>
                    <div className="about_left">
                        <div className="about_text">
                            <div className="about_boxes">
                                <FaAward className="contact_icons eabout_icons" />
                                <h5>experience</h5>
                                <p>1+ years working</p>
                            </div>
                            <div className="about_boxes">
                                <FiUsers className="contact_icons eabout_icons" />
                                <h5>clients</h5>
                                <p>15+ worldwide</p>
                            </div>
                            <div className="about_boxes">
                                <VscFolderLibrary className="contact_icons eabout_icons" />
                                <h5>projects</h5>
                                <p>25+ completed</p>
                            </div>
                        </div>
                        <div className="about_desc">
                            <p>I'm 3rd year CSE student pursuing B-Tech from MSIT {"(GGIPU)"} work's as a freelaner in <span>web devlopment.</span></p>
                        </div>
                        <a href="#contact"><button className="btn btn_about">
                            Let's talk
                        </button> </a>
                    </div>
                </div>
            </div>
            <div id="skills" >
                <div className="about_head_text about_head_text_skill" >
                    <h5>What skill I have</h5>
                    <h2>My Experience</h2>
                </div>
                <div className="skill_box">
                    <div className="webd skill_box_list">
                        <div className="skill_head">
                            <h4>Web Development</h4>
                        </div>
                        <div className="skill_list">
                            <div className="first_skill_list">
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>HTML<p>Experience</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>Javascrpit<p>intermediate</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>React<p>Intermediate</p></small></li>
                            </div>
                            <div className="second_skill_list">
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>CSS<p>Experience</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>Bootstarp<p>Basics</p></small></li>
                            </div>
                        </div>
                    </div>
                    <div className="cp skill_box_list">
                        <div className="skill_head">
                            <h4>Competetive Programing</h4>
                        </div>
                        <div className="skill_list">
                            <div className="first_skill_list">
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>C<p>Basics</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>Data Structure<p>Intermediate</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>Object Oriented Programing<p>Intermediate</p></small></li>
                            </div>
                            <div className="second_skill_list">
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>C++<p>Experience</p></small></li>
                                <li><BsPatchCheckFill className="skill_verify_icons" /><small>Algorithm<p>Intermediate</p></small></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right_left_about">
                <a href="https://www.codechef.com/users/prince00raj" target="_blank" rel="noreferrer">
                <SiCodechef className="cp_icons"/>
                </a>
                <a href="https://leetcode.com/prince00raj/" target="_blank" rel="noreferrer">
                <SiLeetcode className="cp_icons"/>
                </a>
                <a href="https://www.hackerrank.com/princeraj123let1" target="_blank" rel="noreferrer">
                <FaHackerrank className="cp_icons"/>
                </a>
                {/* <a href=""><SiCodechef/></a>
                <a href=""><SiLeetcode/></a> */}
            </div>
            
        </section>
    </>)
}

export default Eabout;