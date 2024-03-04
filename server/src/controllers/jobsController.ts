import { Request, Response } from "express";
import { User } from "../entity/user.entity";
import { Job } from "../entity/job.entity";
import { myDataSource } from "../configs/app-data-source";

require("dotenv").config();

export const newJob = async (req: Request, res: Response) => {
  try {
    const jobRepository = myDataSource.getRepository(Job);
    const userRepository = myDataSource.getRepository(User);

    // CHANGE MIDDLE to const companuId = req.user.id (MIDDLEWARES)
    const { title, description, requirements, salary, date_post, companyId } =
      req.body;
    const company = await userRepository.findOne(companyId);
    if (!company || company.role !== "company") {
      return res.status(401).json({ error: "UNAUTHORIZED" });
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
