import React from "react";
import { useEffect } from "react";
// import Navbar from "./Navbar";
import "./AboutUs.css";
import dash2img from "../components/dash2.png";
import lockimg from "../components/lockimg.png";

function AboutUs(){
    useEffect(() => {
            const reveals = document.querySelectorAll('.reveal');
          
            const observer = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                } else {
                  entry.target.classList.remove('visible'); // Remove when out of view
                }
              });
            }, { threshold: 0.2 });
          
            reveals.forEach(r => observer.observe(r));
          
            return () => observer.disconnect();
          }, []);
          useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
          
    return (
        <div  className="aboutUsSection">
            {/* <Navbar/> */}
            <div className="dash2">
                            <div className="mix dash2img">
                                <img src={dash2img} alt="globe" />
                            </div>
            
                            <div className="container">
                                <div className="mix head2 reveal">
                                    What we offer
                                    <img className="lockimg" src={lockimg} alt="our services"/>
                                </div>
                                <div className="dash2content">
                                    <div className="reason1 reveal">
                                        ◇ Rakshak isn’t just a platform — it’s your digital shield, dedicated to your safety, every second, everywhere.
                                    </div >
                                    {/* <br/> */}
                                    <div className="reason2 reveal">
                                        ◇ Instantly share your live location with trusted contacts during emergencies for faster assistance.
                                    </div>
                                
                                    {/* <br/> */}
                                    <div className="reason3 reveal">
                                        ◇ Send a distress alert with just one click, enabling immediate support when every second counts.
                                    </div>
                                    
                                    {/* <br/> */}
                                    <div className="reason4 reveal">
                                        ◇ Access emergency funds through a transparent, donation-based system that connects those in need with those willing to help.
                                    </div>
                                    
                                    <div className="reason reveal">
                                        Because your safety deserves more than chance — it deserves Rakshak.
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}
export default AboutUs;