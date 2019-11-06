import { Request, Response } from "express";
const log = require("loglevel");

import { BadRequestError, NotFoundError } from "../../../../errors";
import { IManager } from "./manager";

export interface IController {
  getDogById(
    req: Request,
    res: Response,
  ): Promise<void>;
}

export class Controller implements IController {
  constructor(
    private readonly manager: IManager,
  ) {}

  public async getDogById(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const id = req.param("id");
      if (!id) {
        throw new BadRequestError("Need to specify id");
      }
      const dog = await this.manager.getDogById(id);
      res.json(dog);
    } catch (err) {
      log.error(err.stack);
      if (err.constructor === BadRequestError) {
        res.status(400).json({
          message: err.message,
        });
      }
      else if (err.constructor === NotFoundError) {
        res.status(404).json({
          message: err.message,
        });
      }
      res.sendStatus(500);
    }
  }
}
