const log = require("loglevel");

import { Dog } from "../../dog";
import { DogDbDto, DogDbType } from "../../db";

const db: DogDbType[] = require("../../db/dogs.db.json");

export interface IRepository {
  getDogs(): Promise<Dog[]>;
}

export class Repository implements IRepository {
  public getDogs(): Promise<Dog[]> {
    const foundDogs = db.map(dogJson => {
      const dog = new DogDbDto(dogJson);
      return dog.toDog();
    });
    return Promise.resolve(foundDogs);
  }
}
