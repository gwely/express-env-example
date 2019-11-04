import { Server } from "./src/server";
const config = require("./configs");

const server = new Server();
server.init().configure(config).start();
