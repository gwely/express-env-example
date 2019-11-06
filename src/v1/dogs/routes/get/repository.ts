import { Dog } from "../../dog";
import { DogDbDto } from "../../db";
import { DogDao } from "../../db";

export interface IRepository {
  getDogs(): Promise<Dog[]>;
}

export class Repository implements IRepository {
  public async getDogs(): Promise<Dog[]> {
    const dogsJson = await DogDao.find().exec();
    const mappedDogs = dogsJson.map(dogJson => {
      dogJson.toString();
      const dog = new DogDbDto(dogJson);
      return dog.toDog();
    });
    return Promise.resolve(mappedDogs);
  }
}
