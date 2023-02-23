import "dotenv/config";

import http from "http";
import { mongoConnect } from "./services/mongo.js";

import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

async function starServer() {
  await mongoConnect();
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

starServer();
