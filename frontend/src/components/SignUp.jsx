import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import loginImg from "../components/loginImg.png";
import logo from "../components/logo.jpg";
import "../components/SignUp.css";

function SignUp(){
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [message,setMessage]=useState('');
    useEffect(()=>{
        if(message)
        {
            console.log(message);
        }
    },[message]);
    const handleSignup=async()=>{
        const mailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&._]{6,}$/;
        
        if(!mailPattern.test(email))
        {
            setMessage("enter valid mail id");
        }
        
        else if(!passPattern.test(password))
        {
            setMessage("password must contain ...");
        }
        else{
        const res=await fetch("http://localhost:8000/api/auth/signup" ,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        });
        
        setMessage(await res.json());
        Swal.fire({
            title: 'Success!',
            text: 'You have signed up successfully!',
            icon: 'success',
            // confirmButtonText: 'OK'
          });
          navigate("/");
        }
        // console.log(message);
    }
    return (
        <div className="signup1">
            <div className="nav1">
                <img className="logo1"src={logo} alt="logo" onClick={()=>navigate("/")}/>
                <span className="navspan">your safety is our priority</span>
            </div>
            <div className="overall1">
            <div className="left1">
                <div>enter mail id</div>
            <input type="email"
                    value={email}
                    placeholder="enter your email id"
                    onChange={(e)=>{setEmail(e.target.value)}}        
            />
            <div>enter password</div>
            <input type="password"
                    value={password}
                    placeholder="password"
                    onChange={(e)=>setPassword(e.target.value)}        
            />
            <button onClick={handleSignup}>sign up</button>
            <div>{message}</div>
            </div>   
            
                <div className="right1">
                    <img  className="loginImg1"src={loginImg} alt="hey"/>
                </div>
            </div>
        </div>
    )
}
export default SignUp;