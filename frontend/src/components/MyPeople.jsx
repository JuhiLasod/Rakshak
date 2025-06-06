import React, { useState } from "react";
function MyPeople()
{
    const email=localStorage.getItem("email");
    const [edit,setEdit]=useState(false);
    const [people,setPeople]=useState(false);
    const handleUpdate=async()=>{
        setEdit(true);
        const res=await fetch("http://localhost:8000/api/people/my-people",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email})
        })
        const list=await res.json();
        console.log(list);
        // setPeople(list);
    }
    return (
        <div>
            my people page
            <button onClick={handleUpdate}>update my people</button>
            <div>
                {(edit) && 
                    (<div>
                        {people}
                    </div>)
                }
            </div>
        </div>
    )
}
export default MyPeople;