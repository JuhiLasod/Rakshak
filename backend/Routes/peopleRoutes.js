import express from "express";
import myPeopleList from "../Controllers/myPeopleList.js";
const peopleRoutes=express.Router();
peopleRoutes.post("/my-people",myPeopleList);
export default peopleRoutes;