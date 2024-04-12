import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./api/routes/userRouter";

const app = express();
const port = 5000;
const baseApp = `/api/v1`;

app.use(cors);
app.use(`${baseApp}`, userRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
