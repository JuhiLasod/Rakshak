import Users from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const loginController=async(req,res)=>{
    const {email,password}=req.body;
    console.log("recieved"+email);
    const exist=await Users.findOne({email});
    if(!exist)
    {
        return res.json("User does not exist!");
    }
    const match=await bcrypt.compare(password,exist.password)
    console.log(match);
    // const newuser=await Users.findOne({email,password});
    if(!match)
    {
        return res.json("Invalid credentials!");
    }
    else{
        try{
            console.log("inside try");
            const token = jwt.sign(
                { id: exist._id, email: exist.email },
                process.env.JWT_SECRET
            );
            console.log(token);
            return res.json({ message: "Login successfull", token });
        }
        catch(err)
        {
            console.log(err);
            console.log(err);
            return res.json({ error: "Login failed" });
        }
        
    }
    
};
export default loginController;