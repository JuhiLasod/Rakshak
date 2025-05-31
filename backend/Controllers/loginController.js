import Users from "../Models/User.js";
const loginController=async(req,res)=>{
    const {email,password}=req.body;
    console.log("recieved"+email);
    const exist=await Users.findOne({email});
    if(!exist)
    {
        return res.json("user does not exist");
    }
    const newuser=await Users.findOne({email,password});
    if(!newuser)
    {
        return res.json("invalid credentials");
    }
    else{
        return res.json("login successfull");
    }
    
};
export default loginController;