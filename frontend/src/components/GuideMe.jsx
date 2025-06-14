import React from "react";
// import guidemeimg1 from "./guidemeimg1.png";
import securityvd from "./securityvd.mp4";
import gmlogin from "./gmlogin.png";
import "./GuideMe.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function GuideMe(){
    const navigate=useNavigate();
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
    
    return (
        <div>
            {/* this is guiding page */}
            <div className="div18">
                <video autoPlay loop muted className="div1img8">
                    <source   src={securityvd}  type="video/mp4"/>   
                    vd not supported
                </video>
                <div className="div118">
                    <div className="div11text8">
                        <span>Join now </span><br/><br/><br/><br/>or log in to explore everything our platform offers.Click below to login now.<br/><br/><br/>
                    </div>
                    {/* <div className="div12text8">
                    Sign up or log in to unlock the full experience — from advanced features to personalized content and secure access.
                    </div> */}
                </div>
                <div onClick={()=>navigate("/login")}className="imgdivbg118"><img className="gmlogin8"src={gmlogin} alt="login"/></div>
            </div>
            <div className="div28" >
                <div className="outer8 reveal">Add or remove your People
                <div className=" inner8">Your can edit your favourite people whom you may want to help you when in trouble.</div>
                </div>
                <div className="outer8 reveal">Sometimes money can save lives
                <div className=" inner8">Your can donate funds on given account that we use for helping those in need.</div>
                </div>
                <div className="outer8 reveal">Share your location in emergency
                <div className=" inner8">Your can share your location to your people whenever stuck or feel like you may need help later.</div>
                </div>
            </div>
        </div>
    )
};
export default GuideMe;