import express from "express";
const patientsRouter = express.Router();

import {
  admittedPatients,
  editDataPatients,
  deletePatients,
  getPatients,
} from "../controllers/patients.controllers.js";

patientsRouter.post("/admit", admittedPatients);
patientsRouter.put("/editDataPatients/:id", editDataPatients);
patientsRouter.delete("/deletePatients/:id", deletePatients);
patientsRouter.get("/getPatients", getPatients);

export default patientsRouter;
