import express from "express";
import qrGenerator from "../Controllers/qrGenerator.js";
import rateController from "../Controllers/rateController.js";
import findrateController from "../Controllers/findRateController.js";
const allRoutes=express.Router();
allRoutes.post("/qr",qrGenerator);
allRoutes.post("/rate-us",rateController);
allRoutes.post("/find-rate",findrateController);
export default allRoutes;