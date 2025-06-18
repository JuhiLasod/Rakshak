import React, { useCallback, useEffect, useState } from "react";
function MyPeople()
{
    const email=localStorage.getItem("email");
    const [edit,setEdit]=useState(false);
    const [people,setPeople]=useState([]);
    const [name,setName]=useState('');
    const [pmail,setPmail]=useState('');
    const fetchPeople=useCallback( async()=>{
        const res=await fetch("http://localhost:8000/api/people/my-people",{
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
        const res=await fetch("http://localhost:8000/api/people/add-people",{
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
        const res=await fetch("http://localhost:8000/api/people/delete-people",{
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email,pmail})
        })
        const text=await res.json();
        console.log(text);
        fetchPeople();
    }
    return (
        <div>
            my people page
            <div>
            <h2>People List</h2>
            <ul>
                {people.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.pmail}
                        {(edit) && (<button onClick={()=>handleDelete(person.pmail)}>delete</button>)}
                    </li>
                ))}
            </ul>
            </div>
            
            <button onClick={handleAdd}>update my people</button>
            <div>
                {(edit) && 
                    (<div>
                        <input
                            type="email"
                            value={pmail}
                            onChange={(e)=>{setPmail(e.target.value)}}
                        />
                        <input
                            type="string"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                        <button onClick={handleAdd2}>add</button>
                        <button onClick={handleCancel}>cancel</button>
                    </div>)
                }
            </div>
        </div>
    )
}
export default MyPeople;