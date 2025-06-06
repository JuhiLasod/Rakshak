import MyPeople from "../Models/MyPeople.js";
const addPeople=async(req,res)=>{
    const {email,name,pmail}=req.body;
    let exist= await MyPeople.findOne({email});
    if(exist)
    {
        exist.people.push({name,pmail});
        await exist.save();
        return res.json("added");
    }
    else{
        const newEntry = new MyPeople({
            email,
            people: [{ name, pmail }]
        });
        await newEntry.save();
        return res.json("added");
    }
    // return res.json("working");
}
export default addPeople;