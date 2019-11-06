import { Model } from "mongoose";
import log = require("loglevel");
import { Dog } from "../../dog";
import { DogDbDto, DogDbType } from "../../db";

export interface IRepository {
  getDogById(id: string): Promise<Dog|undefined>;
}

export class Repository implements IRepository {
  constructor(
    private readonly dao: Model<DogDbType>,
  ) {}

  public async getDogById(id: string): Promise<Dog|undefined> {
    log.info(`Fetching dog with id: ${id}`);
    const dogJson = await this.dao.findOne({
      id,
    }).exec();
    log.debug(`Found dog: ${JSON.stringify(dogJson)}`);
    if (!dogJson) {
      return;
    }
    const foundDog = new DogDbDto(dogJson);
    return Promise.resolve(foundDog.toDog());
  }
}
