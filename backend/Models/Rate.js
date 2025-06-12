import mongoose from "mongoose";

const rateSchema=new mongoose.Schema({
    email:{type:String},
    star:{type:String}
});
export default mongoose.model("Rates",rateSchema,"Rates");