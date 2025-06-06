import MyPeople from "../Models/MyPeople.js";
const deletePeople=async(req,res)=>{
    const {email,pmail}=req.body;
    const updated = await MyPeople.findOneAndUpdate(
        { email },
        { $pull: { people: { pmail } } },
        { new: true }
    );
    if (updated.people.length === 0) {
        await MyPeople.deleteOne({ email });
        return res.json("Person deleted. No people left, so entry removed.");
    }
    else{
        return res.json("deleted");
    }
}
export default deletePeople;