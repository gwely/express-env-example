import { Document, model, Model, Schema } from "mongoose";

export type DogDbType = Document & {
  id: string;
  name: string;
  age: number;
};

const dogSchema = new Schema({
  id: String,
  name: String,
  age: Number,
});

export const DogDao: Model<DogDbType> = model<DogDbType>(
  "dog",
  dogSchema,
);
