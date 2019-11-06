import { DogDbType } from "./dao";
import { Dog } from "../dog";

export class DogDbDto {
  constructor(
    private readonly dogJson: DogDbType,
  ) {}

  public toDog(): Dog {
    return new Dog(
      this.dogJson.id,
      this.dogJson.name,
      this.dogJson.age,
    );
  }
}
