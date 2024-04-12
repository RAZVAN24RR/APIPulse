import express, { Request, Response } from "express";
import * as userservice from "../services/userService";

import { Router } from "express";

const userRouter = Router();

userRouter.get(":/id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await userservice.getById(id);
  return res.status(200).send(result);
});
userRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const isDeleted = await userservice.deleteById(id);
  return isDeleted;
});
userRouter.post("/", async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await userservice.deleteById(id);
  return res.status(200).send(result);
});

export default userRouter;
