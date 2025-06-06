import React from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate();
    const handlePeopleList=()=>{
        navigate("/my-people");
    }
    return (
        <div>
            <button onClick={handlePeopleList}>My people</button>
        </div>
    )
}
export default Home;