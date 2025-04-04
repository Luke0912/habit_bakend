import express from "express";
import habitRoute from "./habitRoutes.js";

const v1Routes = express.Router();

v1Routes.use("/habit",habitRoute)

export default v1Routes;