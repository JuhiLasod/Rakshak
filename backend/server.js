import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import loginRoutes from "./Routes/loginRoutes.js";
import peopleRoutes from "./Routes/peopleRoutes.js";
import alertRoutes from "./Routes/alertRoutes.js";
import allRoutes from "./Routes/allRoutes.js";
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
app.use("/api/people",peopleRoutes);
app.use("/api/alert",alertRoutes);
app.use("/api/all",allRoutes);
app.listen(process.env.PORT,()=>{
    console.log("server running");
})