import Users from "../Models/User.js";
export const resetPassController=async(req,res)=>{
    const {email,newpass}=req.body;
    const user=await Users.findOne({email: email});
    if(user)
    {
        console.log("user found");
    }
    else
    {
        console.log("user not found");
    }
    try{
    user.password=newpass;
    user.save();
    res.send("Password successfully reset");
    }
    catch(err){
        res.send("reset password unsuccessfull");
    }
    // res.send("okay");
};
export default resetPassController;