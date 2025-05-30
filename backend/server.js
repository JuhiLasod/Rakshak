import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import loginRoutes from "./Routes/loginRoutes.js";

const app=express();
dotenv.config();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("db connected"))
.catch(()=>console.log("error connecting db"));

// app.get((req,res)=>{()=>
//     res.send("API running");
// })
app.use("/api/auth",loginRoutes);

app.listen(process.env.PORT,()=>{
    console.log("server running");
})