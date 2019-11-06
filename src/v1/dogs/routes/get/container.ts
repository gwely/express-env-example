import Bottle = require("bottlejs");

import { Controller } from "./controller";
import { Manager } from "./manager";
import { Repository } from "./repository";

const bottle = new Bottle();
bottle.service("CONTROLLER", Controller, "MANAGER");
bottle.service("MANAGER", Manager, "REPOSITORY");
bottle.service("REPOSITORY", Repository);

module.exports = bottle.container;
