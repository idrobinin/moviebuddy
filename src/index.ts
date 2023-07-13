import express from "express";
import cors from "cors";
import logger from "morgan";
import mongoose from "mongoose";

//routes
import streamRouter from "./modules/stream/stream.controller";
import contentRouter from "./modules/content/content.controller";
import moviesRouter from "./modules/movies/movies.controller";

// Variables
import "dotenv/config";

// mongoDB
try {
  console.log(process.env.MONGO_URL);
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Database connected");
  });
} catch (e) {
  console.error("Connection to Mongo failed", e.message);
  throw new Error(`${e.message}`);
}

// middleware
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

// endpoints
app.use("/stream", streamRouter);
app.use("/content", contentRouter);
app.use("/movies", moviesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Start streaming");
  console.log(`http://localhost:${PORT}`);
});
