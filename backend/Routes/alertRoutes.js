import express from "express";
import alertController from "../Controllers/alertController.js";

const alertRoutes=express.Router();
alertRoutes.post("/send-alert",alertController);
export default alertRoutes;