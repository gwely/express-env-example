import { model, Model, Schema } from "mongoose";
import { DogDbType } from "./type";

const dogSchema = new Schema({
  id: String,
  name: String,
  age: Number,
});

export const DogDao: Model<DogDbType> = model<DogDbType>(
  "dog",
  dogSchema,
);
