import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../components/loginImg.png";
import logo from "../components/logo.jpg";
import "../components/Login.css";
function Login(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        if(message)
        {
            console.log(message);
        }
    },[message]);
    const handleLogin=async()=>{
        setLoading(true);
        // console.log("ending "+email);
        const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/auth/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        });
        const data=await res.json();
        console.log("okay");
        setMessage(data.message);
        if(data.message==="Login successfull")
        {
            // console.log(data.message);
            console.log("token is");
            // console.log(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email",email);
            navigate("/home");
        }
        else{
        console.log(data.error)
        }
        setLoading(false);
    }
    const handleForget=()=>{
        navigate("/reset-password");
    };
    return (
        
        <div className="signin2">
                    <div className="nav2">
                        <div className="logodiv2"><img className="logo1"src={logo} alt="logo" onClick={()=>navigate("/")}/></div>
                        <span className="navspan_2 navspan21">Your safety is our priority.</span>
                        <span className="navspan_2 navspan22">Your digital shield.</span>
                        <span className="navspan_2 navspan23">where your safety comes first.</span>
                    </div>
                    <div className="overall2">
                    <div className="left2">
                        <div className="headline2">
                            <div className="welcome2">
                            Welcome to <span className="welcomespan2">RAKSHAK </span>! 
                            </div>
                            <div className="welcomequote2">
                            To keep connected , please sign in with your registered email adderess.
                            </div>
                        </div>
                        <div className="inputsdiv2">
                            <input className="inputs2" type="email"
                            value={email}
                            placeholder="@ email address"
                            onChange={(e)=>{setEmail(e.target.value)}}        
                            />
                            <br/>
                            <br/>
                            <input className="inputs2" type="password"
                            value={password}
                            placeholder="🗝 password"
                            onChange={(e)=>setPassword(e.target.value)}        
                            />
                        </div> 
                        <div className="fp2" onClick={handleForget}>Forgot password?</div>
                        <div className="message2">{message}</div>
                    
                    <br/>
                    <button className="signinbtn2" onClick={handleLogin} disabled={loading}>Sign in</button>
                    <br/>
                    
                    <div className="security2">
                    We guard your data like it's our own — secure, encrypted, and never shared.
                    </div>
                    </div>   
                    
                        <div className="right2">
                            <img  className="loginImg2"src={loginImg} alt="hey"/>
                        </div>
                    </div>
                </div>
    )
};
export default Login;