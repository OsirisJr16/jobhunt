import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { Job } from "../entity/job.entity";
import { myDataSource } from "../configs/app-data-source";

require("dotenv").config();

export const getJobsByCompany = async(req:Request , res:Response) => {

    try {
      const {companyId} = req.params
      const jobRepository = myDataSource.getRepository(Job) ;
      const jobs = await jobRepository.find({where : {entreprise:companyId as unknown as User}}) ;
      console.log('Success')
      res.json({jobs}) ;
    }catch(err){
      console.log(err)
      res.status(500).json({success:false,message:'Internal server error'})
    }
}
export const newJob = async (req: Request, res: Response) => {
  try {
    const jobRepository = myDataSource.getRepository(Job);
    const userRepository = myDataSource.getRepository(User);

    // CHANGE  to const companyId = req.user.id (MIDDLEWARES)
    const { title, description, requirements, salary, date_post, companyId } =
      req.body;
    const company = await userRepository.findOne({ where: { id: companyId } });
    if (!company || company.role !== "company") {
      return res.status(401).json({ error: "UNAUTHORIZED - User Not Found" });
    }
    const newJob = new Job();

    newJob.title = title;
    newJob.description = description;
    newJob.requirements = requirements;
    newJob.salary = salary;
    newJob.date_post = date_post;
    newJob.entreprise = company;

    await jobRepository.save(newJob);

    res.status(201).json({ message: "New Jobs", job: newJob });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error newJobs" });
  }
};
export const deleteJob = async (req: Request, res: Response) => {
  try {
    const jobId = parseInt(req.params.id);
    const jobRepository = myDataSource.getRepository(Job);

    const job = await jobRepository.findOne({ where: { id: jobId } });
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    await jobRepository.delete(jobId);

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error deleting job:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
