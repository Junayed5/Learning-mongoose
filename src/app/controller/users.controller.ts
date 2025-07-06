import express, { Request, Response } from "express";
import { User } from "../modules/user.modules";
export const userRouter = express.Router();

userRouter.get("/", async (req: Request, res: Response) => {
  const users = await User.find();

  res.status(200).send({
    success: true,
    message: "Get all data successfully",
    users,
  });
});

userRouter.post("/create-user", async (req: Request, res: Response) => {
  const data = req.body;
  const user = await User.create(data);

  res.status(200).send({
    success: true,
    message: "Post user successfully",
    user,
  });
});
userRouter.delete("/delete-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);

  res.status(200).send({
    success: true,
    message: "Delete user successfully",
    user,
  });
});
userRouter.patch("/update-user/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = req.body;
  const user = await User.findByIdAndUpdate(id,data, {new: true});

  res.status(201).send({
    success: true,
    message: "Update a user successfully",
    user,
  });
});
