import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

export const app:Application = express();

const noteSchema = new Schema({
    title: String,
    description: String
});

const Note = model('Note', noteSchema);

app.get('/', (req:Request, res: Response) => {
    res.send("Welcome to reality")
});

app.post("/create-note", async(req:Request, res: Response) => {
    const newNote = new Note({
        title: "Crating a new note",
        description: "What is this Khaile khais na khaile more jais"
    })

    await newNote.save();

    res.status(201).send({
        success: true,
        message: "Successfully completed note",
        note: newNote
    })
})