import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dash1 from "./Dash1";
import AboutUs from "./AboutUs";
// import homemyp from "./homemyp.png";
import "./Home.css";
function Home(){
    const email=localStorage.getItem("email");
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();
    const handlePeopleList=()=>{
        navigate("/my-people");
    };

    // const handleAlert=async()=>{
    //     setLoading(true);
    //     const em='0';
    //     const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/alert/send-alert",{
    //         method:"POST",
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify({email,em})
    //     });
    //     const text=await res.json();
    //     window.alert(text);
    //     setLoading(false);
    // }
    const handleSendLoc = async () => {
        if (!navigator.geolocation) {
            setStatus("Couldn't access location");
            alert("Could'nt send location");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                try {
                    const res = await fetch("https://rakshak-backend-dqut.onrender.com/api/alert/send-alert", {
                        // const res = await fetch("http://localhost:8000/api/sendlocation", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, location })
                    });
                    const text = await res.text();
                    setStatus("Successfully sent location!");
                    alert("Successfully sent location!");
                } catch (err) {
                    setStatus("Failed to send location.");
                    alert("Failed to send location.");
                }
            },
            (error) => {
                setStatus("Permission denied or error fetching location.");
                alert("Permission denied or error fetching location.");
                console.error("Geolocation error:", error);
            }
            
        );
        // alert(status);
    };
    return (
        <div>
            <div className="outer9">
                {/* // style={{backgroundImage: `url(${homemyp})` }}> */}
                {/* <img className="img9" src={homemyp} alt="people"/> */}
                {/* <div className="left9"> */}
                    <button  className="right9" onClick={handleAlert} disabled={loading}>I NEED HELP</button>
                    {/* <div  className="left9"onClick={handlePeopleList}>My people</div> */}
                {/* </div> */}
                {/* <div className="right9"> */}
                    
                {/* </div> */}
                
            </div>
            
            
            <Dash1/>
            <AboutUs/>
            
        </div>
    )
}
export default Home;
