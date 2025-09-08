import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myp1 from "./myp1.png";
import myp2 from "./myp2.png";
import myp3 from "./myp3.png";
// import myp3 from "./myp3.png";
import { motion, AnimatePresence } from "framer-motion";
import "./MyProfile.css";
function MyProfile(){
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [status, setStatus] = useState('');

    // const handleSendLoc = async () => {
    //     if (!navigator.geolocation) {
    //         setStatus("Couldn't access location");
    //         return;
    //     }

    //     navigator.geolocation.getCurrentPosition(
    //         async (position) => {
    //             const location = {
    //                 lat: position.coords.latitude,
    //                 lng: position.coords.longitude
    //             };

    //             try {
    //                 const res = await fetch("https://rakshak-backend-dqut.onrender.com/api/alert/send-alert", {
    //                     // const res = await fetch("http://localhost:8000/api/sendlocation", {
    //                     method: "POST",
    //                     headers: { "Content-Type": "application/json" },
    //                     body: JSON.stringify({ email, location })
    //                 });
    //                 const text = await res.text();
    //                 setStatus("Successfully sent location!");
    //             } catch (err) {
    //                 setStatus("Failed to send location.");
    //             }
    //         },
    //         (error) => {
    //             setStatus("Permission denied or error fetching location.");
    //             console.error("Geolocation error:", error);
    //         }
            
    //     );
    //     alert(status);
    // };
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

    const email=localStorage.getItem("email");
    console.log(email);
    const handleLogout=async()=>{
        setLoading(true);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        console.log("successfully logged out");
        setLoading(false);
        navigate("/");
        // window.location.href = "/";
    }
    // const handleAlert=async()=>{
    //     setLoading(true);
    //     const em='1';
    //     const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/alert/send-alert",{
    //         method:"POST",
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify({email,em})
    //     });
    //     const text=await res.json();
    //     setLoading(false);
    //     window.alert(text);
    // }
    const images = [
        myp3,
        myp2,
        myp1];
        const [index, setIndex] = useState(0);

        useEffect(() => {
          const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
          }, 6000); 
          return () => clearInterval(timer);
        }, [images.length]);
    return (
        <div className="udiv5">
            <div className="head5">
                <div className="userdiv5">Username - &nbsp;&nbsp;<span>{email}</span></div>
                <div className="btndiv5">
                    <button disabled={loading} onClick={()=>{navigate("/my-people")} }>My People</button>
                    <button onClick={handleSendLoc} disabled={loading}>Share my Location</button>
                    <button onClick={handleLogout} disabled={loading}>Logout</button>
                </div>
            </div>

            {/* <div className="hrline5"></div> */}
            <div className="slider-container">
            <AnimatePresence mode="wait">
  <motion.div
    key={images[index]}
    className="slide-wrapper"
    initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: "-100%", opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img src={images[index]} alt="slide" className="slide-img" />

    {/* Text overlay */}
    <div className="slide-text">
      {/* <h2>Your Custom Text {index + 1}</h2> */}
      {(index===0) && (<h2>Your safety is our priority. </h2>)}
      {(index===1) && (<h2>Your digital shield. </h2>)}
      {(index===2) && (<h2>Built with trust, pwoered by protection. </h2>)}
    </div>

    {/* Animated Line */}
    <div className="hrline5"></div>
  </motion.div>
</AnimatePresence>

            </div>
        </div>
    )
};
export default MyProfile;
