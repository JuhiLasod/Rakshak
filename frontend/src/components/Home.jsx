import React from "react";
import { useNavigate } from "react-router-dom";
import Dash1 from "./Dash1";
import AboutUs from "./AboutUs";
function Home(){
    const email=localStorage.getItem("email");
    const navigate=useNavigate();
    const handlePeopleList=()=>{
        navigate("/my-people");
    };

    const handleAlert=async()=>{
        const em='0';
        const res=await fetch("http://localhost:8000/api/alert/send-alert",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,em})
        });
        const text=await res.json();
        window.alert(text);
    }
    return (
        <div>
            <button onClick={handlePeopleList}>My people</button>
            <button onClick={handleAlert}>i need help</button>
            
            <Dash1/>
            <AboutUs/>
            
        </div>
    )
}
export default Home;