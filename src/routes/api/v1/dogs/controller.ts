import { Request, Response } from "express";
import { DogService } from "./service";

export class DogController {
  constructor(private readonly service: DogService) {}

  public getDogs(
    req: Request,
    res: Response,
  ): void {
    const dogs = this.service.getDogs();
    res.json(dogs);
  }

  public getDogById(
    req: Request,
    res: Response,
  ): void {
    const id = req.params.id;
    if (!id) {
      res.status(400).send({ message: "Need to specify id" });
    }
    const parsedId = Number(id);
    const dog = this.service.getDogById(parsedId);
    if (!dog) {
      res.status(404).send({ message: "Dog not found" });
    }
    res.json(dog);
  }
}
