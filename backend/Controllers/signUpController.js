import Users from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const signUpController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        console.log(email);
        console.log(password);
        const exists=await Users.findOne({email});
        if(exists)
        {
            res.json("user exists");
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser= new Users({email,password:hashedPassword});
            await newUser.save();
            console.log("user saved");
            res.json("sign up successfull")
        }
    }
    catch(err)
    {
        console.log(err);
        res.json("failed");
    }
    
    
}
export default signUpController;
