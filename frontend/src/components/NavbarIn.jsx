import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/logo.jpg";
import './NavbarIn.css';
function NavbarIn(){
    const navigate=useNavigate();
    
    return (
        <div className="Navbar">
                <img className="logo" src={logo} alt="logo"/>
                <button className="navbtn"><span>Guide Me</span></button>
                <button className="navbtn" onClick={()=>navigate("/about-us")}><span>About Rakshak</span></button>
                <button className="navbtn"><span>Rate us</span></button>
                <button className="navbtn"><span>Donate</span></button>
                <button className="navbtn"><span>Future Goals</span></button>
                <button className="navbtn"><span>Contact us</span></button>
                <button className="navbtn"><span>My Profile</span></button>
                {/* <button className="navbtn"><span>send alert</span></button> */}
        </div>
    );
}
export default NavbarIn;