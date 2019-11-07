import express = require("express");
import bodyParser = require("body-parser");
import mongoose = require("mongoose");
import log = require("loglevel");

import { config } from "./config";
import { ApiRouter } from "./router";

export class Server {
  private readonly server: any;

  constructor() {
    this.server = express();
  }

  public init(): Server {
    this.server.use(bodyParser.json());
    new ApiRouter(this.server).init();
    return this;
  }

  public connectToDb(): Server {
    mongoose.connect(
      config.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    const db = mongoose.connection;
    db.on("error", log.error.bind(log, "MongoDB connection error:"));
    return this;
  }

  public start(): void {
    const { HOSTNAME, PORT } = config;

    this.server.listen(PORT, () => {
        log.info(`Express server listening on http://${HOSTNAME}:${PORT}`);
    });
  }
}
