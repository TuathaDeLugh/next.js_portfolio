import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
  {
    orgName: String,
    address: String,
    duration: {
        start: String,
        end: String,
    },
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

export default Experience;