import http from "http";

import app from "./app.js";
import { loadPlanetsData } from "./models/planets.model.js";

const PORT = process.env.PORT | 4000;
const server = http.createServer(app);

async function starServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

starServer();
