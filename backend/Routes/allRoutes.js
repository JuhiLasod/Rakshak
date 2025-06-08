import express from "express";
import qrGenerator from "../Controllers/qrGenerator.js";
const allRoutes=express.Router();
allRoutes.post("/qr",qrGenerator);
export default allRoutes;