import log = require("loglevel");
import { Dog } from "../../dog";
import { DogDbDto } from "../../db";
import { DogDao } from "../../db";

export interface IRepository {
  getDogById(id: string): Promise<Dog|undefined>;
}

export class Repository implements IRepository {
  public async getDogById(id: string): Promise<Dog|undefined> {
    log.info(`Fetching dog with id: ${id}`);
    const dogJson = await DogDao.findOne({
      id,
    }).exec();
    if (!dogJson) {
      return;
    }
    log.debug(`Found dog: ${JSON.stringify(dogJson)}`);
    const foundDog = new DogDbDto(dogJson);
    return Promise.resolve(foundDog.toDog());
  }
}
