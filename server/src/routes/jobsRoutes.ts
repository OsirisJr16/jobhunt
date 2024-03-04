import express from "express";
import { newJob } from "../controllers/jobsController";

const jobRouter = express.Router();

jobRouter.post("/", newJob);

export default jobRouter;
