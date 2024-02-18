// server.ts
import express from "express";
import { myDataSource } from "./configs/app-data-source";
import authRouter from "./routes/userRoutes";

const app = express();

myDataSource
    .initialize()
    .then(() => {
        console.log("Connection Successful!");
    })
    .catch((err) => {
        console.error("Connection Error", err);
    });

app.use(express.json());

app.use('/auth', authRouter);


const port = 4000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
