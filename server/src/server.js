import "dotenv/config";

import http from "http";
import mongoose from "mongoose";

import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT | 4000;
const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function starServer() {
  mongoose.connect(MONGO_URL);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

starServer();
