import express from "express";
import myPeopleList from "../Controllers/myPeopleList.js";
import addPeople from "../Controllers/addPeople.js";
import deletePeople from "../Controllers/deletePeople.js";
const peopleRoutes=express.Router();
peopleRoutes.post("/my-people",myPeopleList);
peopleRoutes.post("/add-people",addPeople);
peopleRoutes.post("/delete-people",deletePeople);
export default peopleRoutes;