import mongoose, { Schema, Model } from "mongoose";
import { IStandard } from "@/types";

const StandardSchema = new Schema<IStandard>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
});

const Standard: Model<IStandard> =
  mongoose.models.Standard ||
  mongoose.model<IStandard>("Standard", StandardSchema);

export default Standard;
