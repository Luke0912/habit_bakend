import express from "express";
import { createHabit,getAllHabits } from "../controllers/habit.controller.js"; 

const habitRoute = express.Router();

habitRoute.post("/",createHabit)
habitRoute.get("/",getAllHabits)

export default habitRoute;