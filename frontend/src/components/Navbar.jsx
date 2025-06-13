import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/logo.jpg";
import './Navbar.css';
function Navbar(){
    const navigate=useNavigate();
    const handlesignup=()=>{
        navigate("/signup");
    };
    const handleLogin=()=>{
        navigate("/login");
    };
    return (
        <div className="Navbar">
                <img className="logo" onClick={navigate("/")}src={logo} alt="logo"/>
                <button className="navbtn"><span>Guide Me</span></button>
                <button className="navbtn" onClick={()=>navigate("/about-us")}><span>About Rakshak</span></button>
                <button className="navbtn"><span>Rate us</span></button>
                <button className="navbtn" onClick={()=>navigate("/donate")}><span>Donate</span></button>
                <button className="navbtn"><span>Future Goals</span></button>
                <button className="navbtn"><span>Contact us</span></button>
                <button className="loginbtn" onClick={handlesignup}><span>Sign up</span></button>
                <button className="loginbtn" onClick={handleLogin}><span>Sign in</span></button>
        </div>
    );
}
export default Navbar;