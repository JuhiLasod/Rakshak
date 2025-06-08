import {React , useEffect} from "react";
import "./Dashboard.css";
import woman2 from "../components/woman2.png";
// import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
function Dashboard(){
    //for frontend reveal krne pr visible hone wala animation
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible'); 
            }
          });
        }, { threshold: 0.2 });
      
        reveals.forEach(r => observer.observe(r));
      
        return () => observer.disconnect();
      }, []);
      
      
    
    return (
        <div className="dash1Main">
            {/* <Navbar/> */}
            <div className="dash1">
                <div className="left">
                <div className="line"></div>
                    <div className="head1">Your <span className="safety">safety</span> is our priority. </div>
                    
                    
                    <div className="quote1">
                        Our platform is built to protect, designed to respond, and committed to your security at every step.
                        
                    </div>
                </div>
                <div className="right"><img className="dash1img" src={woman2} alt="woman"/></div>
               
            </div>
            <AboutUs/>
            <Footer/>
        </div>
    );
};
export default Dashboard;