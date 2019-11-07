import { Document } from "mongoose";

export type DogDbType = Document & {
  id: string;
  name: string;
  age: number;
};
