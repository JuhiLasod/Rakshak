import {React } from "react";
import "./Dash1.css";
import woman2 from "../components/woman2.png";
function Dash1(){
    
      
    
    return (
        <div className="dash1Main">
            
            <div className="dash1">
                <div className="left">
                <div className="line"></div>
                    <div className="head1">Your <span className="safety">safety</span> is our priority. </div>
                    
                    
                    <div className="quote1">
                        Our platform is built to protect, designed to respond, and committed to your security at every step.
                        
                    </div>
                </div>
                <div className="right"><img className="dash1img" src={woman2} alt="woman"/></div>
               
            </div>
            
            
        </div>
    );
};
export default Dash1;