import * as express from "express";
import {
  httpAddNewLaunch,
  httpGetAllLaunches,
  httpAbortLaunch,
} from "./launches.controller.js";

const planetsRouter = express.Router();
planetsRouter.get("/", httpGetAllLaunches);
planetsRouter.post("/", httpAddNewLaunch);
planetsRouter.delete("/:id", httpAbortLaunch);

export default planetsRouter;
