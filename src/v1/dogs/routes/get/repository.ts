import { Model } from "mongoose";
import log = require("loglevel");
import { Dog } from "../../dog";
import { DogDbDto, DogDbType } from "../../db";

export interface IRepository {
  getDogs(): Promise<Dog[]>;
}

export class Repository implements IRepository {
  constructor(
    private readonly dao: Model<DogDbType>,
  ) {}

  public async getDogs(): Promise<Dog[]> {
    log.info("Fetching all dogs");
    const dogsJson = await this.dao.find().exec();
    log.debug(`Found dogs: ${JSON.stringify(dogsJson)}`);
    const mappedDogs = dogsJson.map(dogJson => {
      dogJson.toString();
      const dog = new DogDbDto(dogJson);
      return dog.toDog();
    });
    return Promise.resolve(mappedDogs);
  }
}
