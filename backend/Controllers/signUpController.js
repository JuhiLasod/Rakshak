import Users from "../Models/User.js"
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
        const newUser= new Users({email,password});
        await newUser.save();
        res.json("sign up successfull")
        }
    }
    catch(err)
    {
        res.send("failed");
    }
    
    
}
export default signUpController;
