import { Request, Response } from "express";
import log = require("loglevel");

import { IManager } from "./manager";

export interface IController {
  getDogs(
    req: Request,
    res: Response,
  ): Promise<void>;
}

export class Controller implements IController {
  constructor(private readonly manager: IManager) {}

  public async getDogs(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const dogs = await this.manager.getDogs();
      res.json(dogs);
    } catch (err) {
      log.error(err.stack);
      res.sendStatus(500);
    }
  }
}
