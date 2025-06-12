import { useEffect,useCallback, useState } from "react";
import React from "react";
import rate1 from "./rate1.png";
import rate2 from "./rate2.png";
import "./RateUs.css";
function RateUs(){
    // const [star,setStar]=useState('');
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

        const email=localStorage.getItem("email");
        const [curr,setCurr]=useState('');
        const findStar=useCallback(async()=>{
            console.log("from findstar"+email);
            const res=await fetch("http://localhost:8000/api/all/find-rate",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email})
            });
            // console.log("res is");
            // console.log(res);
            const text=await res.json();
            console.log("curr star is ");
            console.log(text);
            setCurr(text);
        },[email,curr]);
        useEffect(()=>{
            
            if (email)findStar();
        },[email,findStar]);
        const [message,setMessage]=useState('');
        const handlestar=async(star)=>{
            // setStar(e);
            // console.log(star);
            const res=await fetch("http://localhost:8000/api/all/rate-us",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({email,star})
            })
            setCurr(star);
            const text=await res.json();
            if(text==="success")
            {
                setMessage("thank you")
            }
            else{
                setMessage("unable to rate");
            }
            console.log(star);
        }
    return (
        <div className="rateus6">
            <div className="rate16">
                <div className="rateleft6"><img className="rate1img6"src={rate1} alt="rating"/></div>
                <div className="rateright6 reveal">We celebrate <br/><span className="raterightspan6">your support.</span>
                    <div className="desc6">Your satisfaction is our success metric.No pressure, but our mascot cries if we get less than 5 stars.</div>
                </div>
            </div>
            <div className="rate26">
                <img className="rate2img6" src={rate2} alt="rating"/>
                <div className="rate2text6 reveal">
                    <div>Your opinion matters—help us make it better!
                    </div>
                    <div className="context26">Every review, good or bad, makes us stronger.</div>
                </div>
            </div>
            <div>
                <button onClick={()=>handlestar('1')}>1</button>
                <button onClick={()=>handlestar('2')}>2</button>
                <button onClick={()=>handlestar('3')}>3</button>
                <button onClick={()=>handlestar('4')}>4</button>
                <button onClick={()=>handlestar('5')}>5</button>
                {/* <button onClick={()=>setStar('')}>reset</button> */}
                <div>current rate is {curr}</div>
                <div>{message}</div>
            </div>
        </div>
    )
};
export default RateUs;