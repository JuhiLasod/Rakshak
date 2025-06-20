import React from "react";
import woodenbg from "./woodenbg.png";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
// import logo from "../components/logo.jpg";
function Footer(){
    const navigate=useNavigate();
    
    return (
        <div className="footermain3">
            <div className="footerud">
                <div className="divforbg"></div>
                <img className="woodenbg" src={woodenbg} alt="woodenbg"/>
                <div className="rakshak_btn" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })
                                                            navigate("/")}}>RAKSHAK</div>
                <div className="login3" onClick={()=>navigate("/login")}> Sign in</div>
                <div className="signup3" onClick={()=>navigate("/signup")}> Sign up</div>
                
                <div className="menu3">
                    <div className="inner3" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })
                                                            navigate("/guide-me")}}>Guide me</div> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <div className="inner3" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })
                                                            navigate("/about-us")}}>About us</div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })
                                                            navigate("/rate-us")}}>Rate us</div> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth' })
                                                            navigate("/contact-us")}}>Contact us</div> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3" onClick={()=>{window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            navigate("/donate")}}>Donate</div>
                     {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  */}
                     {/* <div className="inner3">Future goals</div> */}
                 </div>

                 <div className="menunext3">
                    <div className="innernext3">Terms of use</div> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <div className="innernext3" >Privacy policy</div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="innernext3">SiteMap</div> 
                     
                 </div>
                <a href="https://www.linkedin.com/in/juhi-lasod-bb7295257">
                    <div className="developer" >This website id developed by Juhi Lasod</div>
                </a>
                <div className="copyright">copyright © 2025 Rakshak . All rights reserved.</div>
            </div>
            
        </div>
    )
}
export default Footer;