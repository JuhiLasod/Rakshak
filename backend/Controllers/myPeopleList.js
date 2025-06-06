import MyPeople from "../Models/MyPeople.js";
const myPeopleList=async(req,res)=>{
    const {email}=req.body;
    const exist= await MyPeople.findOne({email})
    if(exist)
    {
        console.log(exist.people);
        return res.json(exist.people);
        
    }
    else{
        return res.json("no people added yet!");
    }
}
export default myPeopleList;