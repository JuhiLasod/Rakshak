import express from "express";
// import { Router } from "express";
import signUpController from "../Controllers/signUpController.js";
const loginRoutes=express.Router();
loginRoutes.post("/signup",signUpController);
export default loginRoutes;