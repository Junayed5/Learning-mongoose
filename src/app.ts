import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

export const app: Application = express();

app.use(express.json());

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

app.patch('/notes/:noteId', async (req: Request, res: Response) =>{
  const noteId = req.params.noteId;
  const updatedData = req.body;

  // const updateNote = await Note.findOneAndUpdate({_id: noteId}, updatedData, {new: true});
  // const updateNote = await Note.updateOne({_id: noteId}, updatedData, {new: true});
  const updateNote = await Note.findByIdAndUpdate(noteId, updatedData, {new: true});

  res.status(201).json({
    success: true,
    message: "Update single data",
    updateNote,
  });
});
app.delete('/notes/:noteId', async (req: Request, res: Response) =>{
  const noteId = req.params.noteId;

  // const updateNote = await Note.findOneAndDelete({_id: noteId}, updatedData, {new: true});
  // const updateNote = await Note.deleteOne({_id: noteId}, updatedData, {new: true});
  const updateNote = await Note.findByIdAndDelete(noteId);

  res.status(201).json({
    success: true,
    message: "Delete single data",
    updateNote,
  });
});