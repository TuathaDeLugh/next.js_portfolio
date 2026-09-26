import mongoose, { Schema, Model } from "mongoose";
import { IProject } from "@/types";

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    info: { type: String, required: true },
    technology: { type: String, required: true },
    github: { type: String, required: true },
    summary: { type: String, required: true },
    image: {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
    livedemo: { type: String, required: true },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> =
  mongoose.models.project || mongoose.model<IProject>("project", projectSchema);

export default Project;
