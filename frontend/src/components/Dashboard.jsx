import {React , useEffect} from "react";
import "./Dashboard.css";
import logo from "../components/logo.jpg";
import woman2 from "../components/woman2.png";
import dash2img from "../components/dash2.png";
import {useNavigate} from "react-router-dom";
function Dashboard(){
    //for frontend animation 
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.5 });
      
        reveals.forEach(r => observer.observe(r));
      
        return () => observer.disconnect();
      }, []);
      
    const navigate=useNavigate();
    const handlesignup=()=>{
        navigate("/signup");
    }
    return (
        <div>
            <div className="Navbar">
                <img className="logo" src={logo} alt="logo"/>
                <button className="navbtn"><span>Guide Me</span></button>
                <button className="navbtn"><span>About Rakshak</span></button>
                <button className="navbtn"><span>Rate us</span></button>
                <button className="navbtn"><span>Donate</span></button>
                <button className="navbtn"><span>Future Goals</span></button>
                <button className="navbtn"><span>Contact us</span></button>
                <button className="loginbtn" onClick={handlesignup}><span>Sign up</span></button>
                <button className="loginbtn"><span>Sign in</span></button>
            </div>
            <div className="dash1">
                <div className="left">
                <div className="line"></div>
                    <div className="head1">Your <span className="safety">safety</span> is our priority. </div>
                    
                    
                    <div className="quote1">Our platform is built to protect, designed to respond, and committed to your security at every step.</div>
                </div>
                <div className="right"><img className="dash1img" src={woman2} alt="woman"/></div>
               
            </div>
            <div className="dash2 ">
                <div className=" mix dash2img"><img  src={dash2img} alt="globe"/></div>
                <div className="container">
                <div className="mix head2 reveal">
                    What we offer
                </div>
                <div className="dash2content">
                Rakshak isn’t just a platform — it’s your digital shield, dedicated to your safety, every second, everywhere."
                </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;