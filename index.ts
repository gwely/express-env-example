import log = require("loglevel");
import { Server } from "./src/server";
import { config } from "./src/config";

try {
  log.setLevel(config.LOG_LEVEL as any);
  const server = new Server();
  server.init().connectToDb().start();
} catch (err) {
  log.error(err.stack);
}
