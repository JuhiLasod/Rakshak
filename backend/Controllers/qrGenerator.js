import qrcode from "qrcode";
import dotenv from "dotenv";
dotenv.config();
const qrGenerator=async(req,res)=>{
    const {am}=req.body;
    try{
        const upiId=process.env.UPI_ID;
        const upiName=encodeURIComponent(process.env.UPI_NAME);
        const upilink=`upi://pay?pa=${upiId}&pn=${upiName}&am=${am}&cu=INR`;
        const qrDataURL = await qrcode.toDataURL(upilink);
        res.json({qr:qrDataURL});
    }
    catch(err)
    {
        res.json("error");
    }
}
export default qrGenerator;