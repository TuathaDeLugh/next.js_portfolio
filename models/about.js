import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    summary: String,
    image:String,
    noofprojects: String,
    yearofcodeing: String,
    noofskills: String

  }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;