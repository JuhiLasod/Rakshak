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
                <div className="card7">☎️<br/><br/>We are eager to hear from you. <br/><br/>Call us at 89087655433</div>
                <div className="card7">📩<br/><br/>We can connect through mail as well. <br/><br/>Send us mail at vhjkMail</div>
            </div>
        </div>
    )
};
export default ContactUs;