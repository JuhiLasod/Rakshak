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
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(message)
        {
            console.log(message);
        }
    },[message]);
    const handleSignup=async()=>{
        setLoading(true);
        const mailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passPattern=/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&._]{8,}$/;
        
        if(!mailPattern.test(email))
        {
            setMessage("Enter valid email id!");
        }
        
        else if(!passPattern.test(password))
        {
            setMessage("Password must contain atleast 8 characters including atleast one digit,one uppercase letter and a special character!");
        }
        else{
            
        const res=await fetch("http://localhost:8000/api/auth/signup" ,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        });
        const text=await res.json()
        setMessage(text);
        if(text==="sign up successfull")
        {
        Swal.fire({
            title: 'Kudos!',
            text: 'We have now become your RAKSHAK!',
            icon: 'success',
            confirmButtonText: 'Continue with RAKSHAK',
            customClass: {
                confirmButton: 'my-confirm-btn1',
                title: 'alerttitle1'
              }
          });
          navigate("/");
        }
        }
        setLoading(false);
        // console.log(message);
    }
    return (
        <div className="signup1">
            <div className="nav1">
                <div className="logodiv1"><img className="logo1"src={logo} alt="logo" onClick={()=>navigate("/")}/></div>
                <span className="navspan navspan1">Your safety is our priority.</span>
                <span className="navspan navspan2">Your digital shield.</span>
                <span className="navspan navspan3">where your safety comes first.</span>
            </div>
            <div className="overall1">
            <div className="left1">
                <div className="headline1">
                    <div className="welcome1">
                    Welcome to <span className="welcomespan1">RAKSHAK </span>! 
                    </div>
                    <div className="welcomequote1">
                    To keep connected , please sign up with your email adderess.
                    </div>
                </div>
                <div className="inputsdiv1">
                    <input className="inputs1" type="email"
                    value={email}
                    placeholder="@ email address"
                    onChange={(e)=>{setEmail(e.target.value)}}        
                    />
                    <br/>
                    <br/>
                    <input className="inputs1" type="password"
                    value={password}
                    placeholder="🗝 password"
                    onChange={(e)=>setPassword(e.target.value)}        
                    />
                </div> 
                <div className="message1">{message}</div>
            
            <br/>
            <button className="signupbtn1" onClick={handleSignup} disabled={loading}>Sign up</button>
            
            <div className="security1">
            We guard your data like it's our own — secure, encrypted, and never shared.
            </div>
            </div>   
            
                <div className="right1">
                    <img  className="loginImg1"src={loginImg} alt="hey"/>
                </div>
            </div>
        </div>
    )
}
export default SignUp;