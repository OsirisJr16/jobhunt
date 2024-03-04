import express from "express";
import { myDataSource } from "./configs/app-data-source";
import authRouter from "./routes/userRoutes";
import jobRouter from "./routes/jobsRoutes";
import cors from "cors";
const app = express();
require("dotenv").config();

myDataSource
  .initialize()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => {
    console.error("Connection Error", err);
  });

app.use(express.json());
app.use(
  cors({
    origin: process.env.LOCAL,
  })
);

app.use("/auth", authRouter);
app.use("/jobs", jobRouter);

const port = 4000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
