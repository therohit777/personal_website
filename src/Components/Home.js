import React from 'react';
import '../Components/home.css';
import logo from '../Components/images/logo1.png';
import aboutlogo from '../Components/images/rohito.jpeg';
import { useState , useEffect} from 'react';
import {MdViewHeadline} from "react-icons/md";
import haloween from '../Components/images/haloween.jpeg';
import weather from '../Components/images/weather1.jpg';
import finance from '../Components/images/finance.jpg';
import git from '../Components/images/github.jpg';
import python from '../Components/images/python.jpg';
import html from '../Components/images/html.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FaLinkedin,FaInstagram,FaTwitter,FaDiscord,FaGithub } from "react-icons/fa";

export const Home = () => {

   const [navbar, setnavbar] = useState(false);
   const [navhde, setnavhde] = useState(false);

   const scrollbackground=()=>{
        if(window.scrollY >= 80){
            setnavbar(true); 
        }else{
            setnavbar(false);
        } 
    }
   window.addEventListener("scroll", scrollbackground);

   useEffect(() => {
      Aos.init({duration: 2000,once: true});
   }, [])

  
    return (
        <div>

            <header>
                <nav className={(!navbar)? "navbar": "navbar active-scroll"}>
                    <div className="logo">
                        <a href="#home"><img src={logo} alt="" width="90px" className="imglogo"/></a>
                    </div>

                    <ul className={(!navhde)? "items" : "items hamvisi"}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                        <li><a href="#contacts">Contact</a></li>
                        <li><a href="#resume" onClick={()=>alert("Resume is currently on updating process.")}><span className="res">Resume</span></a></li>
                    </ul>

                    <div className="hamburger">
                        <MdViewHeadline className="hambur" onClick={()=> setnavhde(!navhde)} />
                    </div>
                </nav>
            </header>

            

           <section className="home" id="home" style={{"overflow":"hidden"}}>
               <div className="homebackg">
                   <div className="intro">
                       <div className="introname">I'm <span></span>.</div>
                       <div className="subtitle">Programmer, Developer, Designer</div>
                       <div className="socioli">
                           <a href="https://www.instagram.com/rohitpan7789/"><FaInstagram className="sociolink sociolink1"/></a>
                           <a href="https://www.linkedin.com/in/rohit-pandey-8a6896174/"><FaLinkedin className="sociolink sociolink2"/></a>
                           <a href="https://twitter.com/rohit_dev7"><FaTwitter className="sociolink sociolink3"/></a>
                           <a href="https://github.com/therohit777"><FaGithub className="sociolink sociolink4"/></a>
                           <a href="https://discord.com/invite/Rohit_pandey#9872"><FaDiscord className="sociolink sociolink5"/></a>
                       </div>                      
                   </div>
               </div>       
           </section>

            
           <section className="about" id="about" style={{"overflow":"hidden"}}>
               <div className="container">
                   <div data-aos="fade-right" className="aboutphoto">
                        <img src={aboutlogo} alt=""  className="aboutimg" />
                   </div>
                   <div data-aos="fade-left" className="abouttxt">
                        <div className="abouttxt1">
                         I am a MERN-Stack developer who is mostly inclined towards frontend development using React Js.  Worked on Server side using Node and Express Js.
                        </div>
                        <div className="abouttxt2">
                           Currenly a MERN-Stack Developer and an aspiring Datascientist. Love to build projects. Focusses more on project based learning rather than just learning things. Persistence and self competitive nature makes me different from others.
                        </div>
                   </div>
               </div>
           </section>
            

           <section className="projects" style={{"overflow":"hidden"}}>
                 <div className="projecttitle" id="projects">My Projects</div>
                 <div className="projecttxt" data-aos="fade-up" >
                     <p className="protxt">All</p>
                     <p className="protxt">web development</p>
                     <p className="protxt">computer vision</p>
                     <p className="protxt">organisations</p>
                 </div>
                 <div className="reprojects" data-aos="fade-up">
                    <a href="https://weatherapp-9d7d.hostman.site/" target="_main" data-aos="fade-up"><img src={weather} alt="" className="projectimgsize"/></a>
                    <a href="https://awesome-elion-e0bc12.netlify.app" target="_main" data-aos="fade-up"><img src={haloween} alt=""  className="projectimgsize"/></a>
                    <a href="https://finwallet.netlify.app/Frontlogo" target="_main" data-aos="fade-up"><img src={finance} alt=""  className="projectimgsize"/></a>
                 </div>
           </section>


           <section className="blogs" id="blogs" style={{"overflow":"hidden"}} >
                 <div className="blogstitle">Blogs</div>
                 <div className="blogimg" data-aos="fade-up">
                <div className="blogcontainer" data-aos="fade-up">
                    <a href="https://drive.google.com/file/d/1ZBOlu1HNdVpOsT3reyJyD6WagDuMrkOQ/view?usp=sharing" target="_main"><img src={git} alt="" width="330px"/></a>
                    <a href="https://drive.google.com/file/d/1ZBOlu1HNdVpOsT3reyJyD6WagDuMrkOQ/view?usp=sharing" target="_main"><p className="blogimgtxt blogimgtxt21">Introduction to Git - Github.</p></a>
                    <p className="blogimgtxt2">It contains all the major information that you need to know while using Git-Github.</p>
                </div>

                <div className="blogcontainer" data-aos="fade-up">
                    <a href="https://drive.google.com/file/d/1_r7IR24AUUpNSNyCnybniRYtDHJeKydv/view?usp=sharing" target="_main"><img src={python} alt="" width="340px"/></a>
                    <a href="https://drive.google.com/file/d/1_r7IR24AUUpNSNyCnybniRYtDHJeKydv/view?usp=sharing" target="_main"><p className="blogimgtxt blogimgtxt22">Python basics for Datascience.</p></a>
                    <p className="blogimgtxt2 txtshift">It contains basics of Python programming along with concepts of OOPs and Filehandling.</p>
                </div>

                <div className="blogcontainer" data-aos="fade-up">
                    <a href="https://drive.google.com/file/d/19Hsm15z-aJvw2Ie_LGHK2X7WcAVL6m6P/view?usp=sharing" target="_main"><img src={html} alt="" width="330px"/></a>
                    <a href="https://drive.google.com/file/d/19Hsm15z-aJvw2Ie_LGHK2X7WcAVL6m6P/view?usp=sharing" target="_main"><p className="blogimgtxt blogimgtxt23">Complete Html from scratch.</p></a>
                    <p className="blogimgtxt2">It is a Html cheatsheet which contains all important tags that you need to know. </p>
                 </div>
                 </div>
           </section>

           <section className="contacts" id="contacts" style={{"overflow":"hidden"}}>
               <div className="contactform">
                   <div className="contacttitle">Get in Touch</div>
                   <div className="contactinputboxes">
                       <input type="text" placeholder="your name" className="contactinputs" data-aos="fade-up"/>
                       <input type="email" placeholder="your email" className="contactinputs contactmargin" data-aos="fade-up"/>
                       <input type="number" placeholder="your phone number" className="contactinputs contactmargin" data-aos="fade-up"/>
                   </div>
                   <div className="contactmessage">
                       <textarea placeholder="message" className="textarea11" data-aos="fade-up"></textarea>
                   </div>
                   <button className="Contactbutton" data-aos="fade-up">Send Message</button>
               </div>
           </section>




           <footer>
               <div className="footerlinks" style={{"overflow":"hidden"}}>
                    <a href="https://www.instagram.com/rohitpan7789/"><FaInstagram className="footerlink"/></a>
                    <a href="https://www.linkedin.com/in/rohit-pandey-8a6896174/"><FaLinkedin className="footerlink"/></a>
                    <a href="https://twitter.com/rohit_dev7"><FaTwitter className="footerlink"/></a>
                    <a href="https://github.com/therohit777"><FaGithub className="footerlink"/></a>
                    <a href="https://discord.com/invite/Rohit_pandey#9872"><FaDiscord className="footerlink"/></a>
               </div>
               <div className="footerdes">Rohit. All rights are reserved.</div>
               <div className="footerversion">version 1.0.0</div>

           </footer>
  
        </div>
    )
}
