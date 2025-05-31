import nodemailer from "nodemailer";
import Users from "../Models/User.js";
import Otp from "../Models/Otp.js";
import dotenv from "dotenv";
dotenv.config();
const sendOtpController=async(req,res)=>{
    const {email}=req.body;
    const exist=await Users.findOne({email});
    try{
    if(!exist)
    {
        return res.json("user not exist");
    }
    else{
        const otp=Math.floor(100000+ Math.random()*900000);
        const transporter=nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_ID,
                pass: process.env.PASSWORD
            }
        });
        const options={
            from: process.env.MAIL_ID,
            to: email,
            subject: "Reset password for RAKSHAK",
            text: `Greetings from team RAKSHAK - your safety is our priority.\n We received a request to reset password for your account. ${otp} is the otp for resetting your password. The otp will expire in 5 minutes.If you did not request a password reset, please ignore this message. No changes will be made to your account. `
        }
        transporter.sendMail(options);
        const newEntry=await Otp.findOne({email});
        if(newEntry)
        {
            newEntry.otp=otp;
            await newEntry.save();
        }
        else
        {
            const Entry=new Otp({email,otp});
            await Entry.save();
        }
        return res.send("success");
    }
    }
    catch(err)
    {
        return res.json("could not send otp");
    }
};
export default sendOtpController;