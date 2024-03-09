import express from "express";
import { deleteJob, newJob ,getJobsByCompany} from "../controllers/jobsController";

const jobRouter = express.Router();

jobRouter.post("/", newJob);
jobRouter.delete("/:id",deleteJob)
jobRouter.get('/:id',getJobsByCompany)
export default jobRouter;
