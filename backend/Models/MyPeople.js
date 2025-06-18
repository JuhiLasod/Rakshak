import mongoose from "mongoose";
const peopleListSchema=new mongoose.Schema({
    name:{type:String},
    pmail:{type: String}
});
const myPeopleSchema=new mongoose.Schema({
    "email": {type:String},
    "people":{type:[peopleListSchema],default:[]}
});
export default mongoose.model("MyPeople",myPeopleSchema);