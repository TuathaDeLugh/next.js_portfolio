import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema(
  {
    degree: String,
    place: String,
    marks: String,
  },
  { timestamps: true }
);

const Education = mongoose.models.Education || mongoose.model("Education", EducationSchema);

export default Education;