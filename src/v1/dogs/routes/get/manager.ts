import { IRepository } from "./repository";
import { Dog } from "../../dog";

export interface IManager {
  getDogs(): Promise<Dog[]>;
}

export class Manager implements IManager {
  constructor(
    private readonly repository: IRepository,
  ) {}
  public getDogs(): Promise<Dog[]> {
    return this.repository.getDogs();
  }
}
