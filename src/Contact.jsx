import React from "react";
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import {FiX} from 'react-icons/fi'
import { BsPatchCheckFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { useState } from "react";
const Contact=()=>{
    const [value,setvalue]=useState();
    const form = useRef();
    // const check_fn=()=>{
    //     setvalue('pop_up');
    // }
    const sendEmail = (e) => {
      e.preventDefault();
       
      emailjs.sendForm('service_excbucx', 'template_5eewebb', form.current, 'XVgRcYxolTWVE130X')
        .then((result) => {
            // console.log(result.text);
        }, (error) => {
            // console.log(error.text);
        });
        e.target.reset();
        setvalue('pop_up');
    };
    setTimeout(() => {
        // console.log("get called");
        // alert("done");
        setvalue();
    }, 10000);
    return(<>
        <section id="contact">
            <div className="verify_submit" style={value==='pop_up'?{"opacity": "1","visibility":"visible","transition":"0.4s all ease"}:{}}>
               <BsPatchCheckFill className="submit_verify_icons"/> <p>successfully submitted</p><FiX onClick={()=>{setvalue('pop_back')}} style={value==='pop_up'?{"opacity": "1","visibility":"visible","transition":"0.4s all ease"}:{}} className="cut"/>
            </div>
            <div className="head_text" >
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            </div>
            <div className="contact_option">
            <div className="direct_contact">
                <article className="contact__option">
                    <MdOutlineEmail className="contact_icons"/>
                    <h4>Email</h4>
                    <h5>songcloud@gamil.com</h5>
                    <a href="mailto:princerajgrke1901@gmail.com" target="_blank" rel="noreferrer">send a message</a>
                </article>
                <article className="contact__option">
                    <RiMessengerLine className="contact_icons"/>
                    <h4>Messenger</h4>
                    <h5>Prince raj</h5>
                    <a href="https:///m.me/kingjeet.kaur" target="_blank" rel="noreferrer">send a message</a>
                </article>
                <article className="contact__option">
                    <BsWhatsapp className="contact_icons"/>
                    <h4>Whatsapp</h4>
                    <h5>+917645****47</h5>
                    <a href="https://api.whatsapp.com/send?phone=+917645944247" target="_blank" rel="noreferrer">send a message</a>
                </article>
            </div>
            <form className="contact_form" ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" required placeholder="Your full name" />
                <input type="email" name="email" placeholder="Enter your email" required />
                <textarea name="comment" placeholder="Your Message" rows="7" required></textarea>
                <button type="submit" className="btn btn_form" >Send message</button>
            </form>
            </div>
            {/* <button onClick={check_fn}  className="btn">
                check
            </button> */}
        </section>
    </>);
}

export default Contact;