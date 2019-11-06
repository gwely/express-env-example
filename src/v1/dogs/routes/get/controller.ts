import { Request, Response } from "express";
const log = require("loglevel");

import { IManager } from "./manager";

export class Controller {
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
