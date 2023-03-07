import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router/router";

class App {
  public express: express.Application

  public constructor() {
    this.express = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect("mongodb://127.0.0.1:27017/tsnode");
  }

  private routes(): void {
    this.express.use(router);
  }
}

export default new App().express
