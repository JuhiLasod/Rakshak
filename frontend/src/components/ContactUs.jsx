import React from "react";
import contact from "./contact.png";
import "./ContactUs.css"
function ContactUs(){
    return (
        <div className="outerdiv7">
            <div className="cdiv17">
                <div className="git7">Get in touch 
                    <div className="content7">Want to get in touch? we would love to hear from you.Here is how you can reach us. 
                    </div>
                </div>
                <img className="img7" src={contact} alt="contactimg" />
            </div>
            <div className="cardout7">
                <div className="card7">☎️<br/><br/>We are eager to hear from you. <br/><br/><span className="card7span">Call us at <a href="tel:+919876543210" className="card7span2">
      +91 98765 43210
    </a></span></div>
                <div className="card7">📩<br/><br/>We can connect through mail as well. <br/><br/><span className="card7span">Send us mail at <a href="mailto:rakshak_official@gmail.com" className="card7span2">
      rakshak_official@gmail.com
    </a></span></div>
            </div>
        </div>
    )
};
export default ContactUs;