import React, { useCallback, useEffect, useState } from "react";
import mypimg from './mypimg.png';
import "./MyPeople.css";
function MyPeople()
{
    const email=localStorage.getItem("email");
    const [edit,setEdit]=useState(false);
    const [people,setPeople]=useState([]);
    const [name,setName]=useState('');
    const [pmail,setPmail]=useState('');
    const fetchPeople=useCallback( async()=>{
        const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/people/my-people",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email})
        })
        const data = await res.json();
            
            console.log(data);
        if (Array.isArray(data)) {
            setPeople(data);
        } else {
            setPeople([]);
        }
        

    },[email])
     useEffect(() => {
        if (email) fetchPeople();
    }, [fetchPeople, email]);

    
    
    const handleAdd=async()=>{
        setName('');
        setPmail('');
        setEdit(true);
        
        // setPeople(list);
    }
    const handleAdd2=async()=>{
        const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/people/add-people",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,name,pmail})
        });
        const text=await res.json();
        console.log(text);
        fetchPeople();
        setEdit(false);
    }
    const handleCancel=()=>{
        setEdit(false);
    }
    const handleDelete=async(pmail)=>{
        const res=await fetch("https://rakshak-backend-dqut.onrender.com/api/people/delete-people",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,pmail})
        })
        const text=await res.json();
        console.log(text);
        fetchPeople();
    }
    return (
        <div className="outer11">
            <div className="whole11">
                <div className="left11">
                    <div className="head11">
                        Your safety net isn't woven with threads, but with people who care. Choose them wisely.
                    </div>
                    <div className="btndiv11">
                        <button className="update11" onClick={handleAdd}>Update My People</button>
                    </div>
                    
                    <ul>
                    {people.map((person, index) => (
                        <li key={index}>
                            {person.name} - {person.pmail}
                            {(edit) && (<button className="allbtn11" onClick={()=>handleDelete(person.pmail)}>Delete</button>)}
                        </li>
                    ))}
                     </ul>
                </div>
                <div className="right11">
                    <img className="img11" src={mypimg} alt="people"/>
                </div>
            
            </div>
            
            
            <div className="input11">
                {(edit) && 
                    (<div>
                        <input className="inp11"
                            type="string"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <input className="inp11"
                            type="email"
                            value={pmail}
                            placeholder="Enter email"
                            onChange={(e)=>{setPmail(e.target.value)}}
                        />
                        
                        <button className="allbtn11" onClick={handleAdd2}>Add</button>
                        <button className="allbtn11" onClick={handleCancel}>Cancel</button>
                    </div>)
                }
            </div>
        </div>
    )
}
export default MyPeople;