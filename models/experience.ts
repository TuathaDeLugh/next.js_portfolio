import mongoose, { Schema, Model } from "mongoose";
import { IExperience } from "@/types";

const ExperienceSchema = new Schema<IExperience>(
  {
    orgName: { type: String, required: true },
    address: { type: String, required: true },
    position: { type: String, required: true },
    duration: {
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
    summary: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience: Model<IExperience> =
  mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;
