import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

export const app: Application = express();

app.use(express.json());

const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  category: {
    type: String,
    enum: ["personal", "work", "study", "other"],
    default: "personal",
  },
  pinned: { type: Boolean, default: false },
  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "gray" },
  },
});

const Note = model("Note", noteSchema);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to reality");
});

app.post("/note/create-note", async (req: Request, res: Response) => {
  // --To send data system 1
  // const newNote = new Note({
  //     title: "Crating a new note",
  //   });

  //   await newNote.save();

  // ----System 2
  //  console.log(req.body)
  const note = await Note.create(req.body);

  res.status(201).send({
    success: true,
    message: "Successfully completed note",
    note,
  });
});

app.get("/notes", async (req: Request, res: Response) => {
  const notes = await Note.find();

  res.status(200).send({
    success: true,
    message: "All notes get",
    notes,
  });
});

app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const note = await Note.findById(req.params.noteId);

  res.status(200).send({
    success: true,
    message: "Get single data",
    note,
  });
});

