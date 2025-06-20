import MyPeople from "../Models/MyPeople.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const alertController=async(req,res)=>{
    const {email,location}=req.body;
    // const pmails=[];
    const user=await MyPeople.findOne({email});
    // console.log(user);
    if (!user || user.people.length === 0) {
        return res.json("No people found for this email");
    }
    try
    {const pmails = user.people.map(p => p.pmail);
    const transporter=nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.MAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    
        await transporter.sendMail({
            from: process.env.MAIL_ID,
            to: pmails,
            subject: "Emergency Alert from RAKSHAK – Immediate Assistance Required",
            text: `You are receiving this urgent alert from RAKSHAK regarding a distress signal initiated by ${email}.

This individual is currently facing a critical and potentially dangerous situation and is in immediate need of your assistance. Your prompt response could make a significant difference.

Please proceed without delay to the following location to offer support:

  ${location.lat}\nLongitude: ${location.lng}\nGoogle Maps: https://maps.google.com/?q=${location.lat},${location.lng}

Your safety and vigilance are paramount.
Thank you for standing by those in need.

Warm regards,
Team RAKSHAK
Empowering Safety. Enabling Response.`
        });
    
    return res.json("mails sent");
    }
    catch(err)
    {
        console.log(err);
        return res.json("couldnt send mails");
    }
};
export default alertController;