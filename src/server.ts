const express = require("express");
const bodyParser = require("body-parser");
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
    this.server.set('env', config.env);
    this.server.set('port', config.port);
    this.server.set('hostname', config.hostname);
    return this;
  }

  public start(): void {
    const hostname = this.server.get('hostname');
    const port = this.server.get('port');

    this.server.listen(port, () => {
        console.log('Express server listening on - http://' + hostname + ':' + port);
    });
  }
}
