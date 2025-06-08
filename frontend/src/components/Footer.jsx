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
                <div className="rakshak_btn" onClick={()=>navigate("/login")}>RAKSHAK</div>
                <div className="login3"> Sign in</div>
                <div className="signup3"> Sign up</div>
                <div className="developer">This website id developed by juhi lasod</div>
                <div className="copyright">copyright</div>
            </div>
            
        </div>
    )
}
export default Footer;