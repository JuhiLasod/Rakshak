import Users from "../Models/User.js";
const loginController=async(req,res)=>{
    const {email,password}=req.body;
    console.log("recieved"+email);
    const exist=await Users.findOne({email});
    if(!exist)
    {
        return res.json("User does not exist!");
    }
    const newuser=await Users.findOne({email,password});
    if(!newuser)
    {
        return res.json("Invalid credentials!");
    }
    else{
        return res.json("login successfull");
    }
    
};
export default loginController;