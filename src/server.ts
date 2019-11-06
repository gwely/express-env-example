import express = require("express");
import bodyParser = require("body-parser");
import mongoose = require("mongoose");
import log = require("loglevel");
log.setLevel("debug");

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

  public configure(config: any): Server {
    this.server.set("env", config.env);
    this.server.set("port", config.port);
    this.server.set("hostname", config.hostname);
    this.server.set("db_url", config.db_url);
    return this;
  }

  public connectToDb(): Server {
    mongoose.connect(this.server.get("db_url"), { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on("error", log.error.bind(log, "MongoDB connection error:"));
    return this;
  }

  public start(): void {
    const hostname = this.server.get("hostname");
    const port = this.server.get("port");

    this.server.listen(port, () => {
        console.log(`Express server listening on http://${hostname}:${port}`);
    });
  }
}
