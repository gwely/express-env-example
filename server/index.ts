const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

export class Server {
  private readonly server: any;

  constructor() {
    this.server = express();
  }

  public init(): Server {
    this.server.use(bodyParser.json());
    routes.init(this.server);
    return this;
  }

  public configure(config: any): Server {
    this.server.set('env', config.env);
    this.server.set('port', config.port);
    this.server.set('hostname', config.hostname);
    return this;
  }

  public start(): void {
    let hostname = this.server.get('hostname'),
        port = this.server.get('port');

    this.server.listen(port, function () {
        console.log('Express server listening on - http://' + hostname + ':' + port);
    });
  }
}
