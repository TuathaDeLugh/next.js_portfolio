import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
    heading: String,
    summary: String,
  }
);

const About = mongoose.models.About || mongoose.model("About", AboutSchema);

export default About;