import express from "express";
// import { Router } from "express";
import signUpController from "../Controllers/signUpController.js";
import loginController from "../Controllers/loginController.js";
const loginRoutes=express.Router();
loginRoutes.post("/signup",signUpController);
loginRoutes.post("/login",loginController);
export default loginRoutes;