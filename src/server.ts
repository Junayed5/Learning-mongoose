import { Server } from "http";
import { app } from "./app";
import mongoose from "mongoose";

let server: Server;
let PORT = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb+srv://mongo-juna:mongodb@cluster0.8ujknfb.mongodb.net/user-created?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected")
    server = app.listen(PORT, () => {
      console.log(`App is listening port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
