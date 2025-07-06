import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { noteRouter } from "./app/controller/notes.controller";
import { userRouter } from "./app/controller/users.controller";

export const app: Application = express();

app.use(express.json());
app.use("/notes", noteRouter);
app.use("/users", userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to reality");
});

