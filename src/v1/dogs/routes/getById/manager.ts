import { NotFoundError } from "../../../../errors";
import { Dog } from "../../dog";
import { IRepository } from "./repository";

export interface IManager {
  getDogById(id: string): Promise<Dog>;
}

export class Manager implements IManager {
  constructor(
    private readonly repository: IRepository,
  ) {}

  public async getDogById(id: string): Promise<Dog> {
    const dog = await this.repository.getDogById(id);
    if (!dog) {
      throw new NotFoundError(`Dog not found with id: ${id}`);
    }
    return dog;
  }
}
