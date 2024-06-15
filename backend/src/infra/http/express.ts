import express, { Application } from "express";
import cors from "cors";
import { errorMiddleware } from "../middlewares/erro.middleware";

class Express {
  app: Application;
  constructor() {
    this.app = express();
    this.initMiddleware();
    this.errorMiddleware();
  }

  private initMiddleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private errorMiddleware() {
    this.app.use(errorMiddleware);
  }

  listen() {
    this.app.listen(3333, () => console.log("Server is running on port 3333"));
  }
}

export default Express;
