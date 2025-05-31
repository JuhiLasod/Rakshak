import React, { useEffect, useState } from "react";

function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    useEffect(()=>{
        if(message)
        {
            console.log(message);
        }
    },[message]);
    const handleLogin=async()=>{
        console.log("ending "+email);
        const res=await fetch("http://localhost:8000/api/auth/login",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,password})
        });
        const text=await res.json();
        setMessage(text);
    }
    return (
        <div>
            this is login page
            <div>
                email
            </div>
            <input 
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <div>
                password
            </div>
            <input 
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>login</button>
            <div>
                {message}
            </div>
        </div>
    )
};
export default Login;