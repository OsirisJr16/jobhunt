import express from "express";
import { deleteJob, newJob } from "../controllers/jobsController";

const jobRouter = express.Router();

jobRouter.post("/", newJob);
jobRouter.delete("/:id",deleteJob)
export default jobRouter;
