import React from "react";
import woodenbg from "./woodenbg.png";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
// import logo from "../components/logo.jpg";
function Footer(){
    const navigate=useNavigate();
    return (
        <div>
            <div className="footerud">
                <div className="divforbg"></div>
                <img className="woodenbg" src={woodenbg} alt="woodenbg"/>
                <div className="rakshak_btn" onClick={()=>window.scrollTo({top: 0, behavior: 'smooth' })}>RAKSHAK</div>
                <div className="login3"> Sign in</div>
                <div className="signup3"> Sign up</div>
                
                <div className="menu3">
                    <div className="inner3">Guide me</div> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <div className="inner3" onClick={()=>navigate("/about-us")}>About us</div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3">Rate us</div> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3">Contact us</div> 
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3">Donate</div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="inner3">Future goals</div>
                 </div>

                 <div className="menunext3">
                    <div className="innernext3">Terms of use</div> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                    <div className="innernext3" >Privacy policy</div>
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                     <div className="innernext3">SiteMap</div> 
                     
                 </div>
                <div className="developer">This website id developed by Juhi Lasod</div>
                <div className="copyright">copyright © 2025 Rakshak . All rights reserved.</div>
            </div>
            
        </div>
    )
}
export default Footer;