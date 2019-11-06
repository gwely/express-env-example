import Bottle = require("bottlejs");

import { IController, Controller } from "./controller";
import { Manager } from "./manager";
import { Repository } from "./repository";
import { IDENTIFIERS } from "./identifiers";

export interface IContainer {
  bind(): IContainer;
  getController(): IController;
}

export class Container implements IContainer {
  private readonly bottle: Bottle;
  constructor() {
    this.bottle = new Bottle();
  }

  public bind(): Container {
    this.bottle.service(
      IDENTIFIERS.CONTROLLER,
      Controller,
      IDENTIFIERS.MANAGER,
    );
    this.bottle.service(
      IDENTIFIERS.MANAGER,
      Manager,
      IDENTIFIERS.REPOSITORY,
    );
    this.bottle.service(IDENTIFIERS.REPOSITORY, Repository);
    return this;
  }

  public getController(): IController {
    return this.bottle.container[IDENTIFIERS.CONTROLLER];
  }
}
