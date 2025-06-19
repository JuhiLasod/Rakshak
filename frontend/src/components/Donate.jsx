import React, { useState } from "react";
import { useEffect ,useLayoutEffect } from "react";
import donate from "../components/donate.png";
import "./Donate.css";
function Donate(){
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
    const [am,setAm]=useState('');
    const [message,setMessage]=useState('');
    const [qr,setQr]=useState('');
    const [loading,setLoading]=useState(false);
    const handlePay=async()=>{
        if(isNaN(am) || am==="")
        {
            setMessage("Enter valid amount!");
        }
        else{
            setLoading(true);
        const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/all/qr",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({am})
        });
        setLoading(false);
        const data=await res.json();
        if(data==="error")
        {
            setMessage("Error generating qr code. You may try again later.");
        }
        else{
            setQr(data.qr);
            setMessage("");
        }
        }
    }
    return (
        <div className="upperdiv4">
            <div className="imgdiv4"><img className="donateimg"src={donate} alt="handshake"/></div>
            <div className="text4 reveal"><span>Rakshak </span>empowers you to become a savior.</div>
            <div className="enter4"><span>The amount you enter will be directed to support individuals in urgent need.</span>
            
            <br/><br/>Please specify the amount you'd like to contribute, then scan the generated QR code using any UPI-enabled payment app to complete your donation. Every contribution counts and brings hope to someone in distress.</div>
            <div className="input4"><input type="text" 
                        value={am}
                        onChange={(e)=>setAm(e.target.value)}
                />
            </div>
            <button className="pay4"onClick={handlePay} disabled={loading}>pay now</button>
            <div className="message4">{message}</div>
            <div >
                {(qr) && (<div ><img className="qr4" src={qr} alt="upi qr"/>
                <br />
    <a href={qr} download="rakshak_qr.png">
      <button className="qrd4">Download QR</button></a>
      <div className="thanku4">Thank you for standing with Rakshak.We’re grateful for your generosity .</div>
      </div>)}
    
            </div>
        </div>
    );
}
export default Donate;