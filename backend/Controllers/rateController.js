import Rates from "../Models/Rate.js";

const rateController=async(req,res)=>{
    const {email,star}=req.body;
    try{
    const exist=await Rates.findOne({email});
    // console.log(req.body);
    if(exist)
    {
        // console.log("found");
        await Rates.findOneAndUpdate({ email: email },
            { $set: { star: star } });
    }
    else
    {
        // console.log("not found");
        const newRating= new Rates({email,star});
        await newRating.save();
    }
    return res.json("success");
    }
    catch(err)
    {
        return res.json("fail");
    }
    // console.log(star);
}
export default rateController;