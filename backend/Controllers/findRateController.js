import Rates from "../Models/Rate.js";
const findrateController=async(req,res)=>{
    const {email}=req.body;
    // console.log("rec mail at backend is "+email);
    const exist=await Rates.findOne({email});
    // console.log("exist="+exist);
    if(exist)
    {
        const star=exist.star;
        // console.log(star);
        // return res.send(exist.star);
        return res.send(star);
    }
}
export default findrateController;