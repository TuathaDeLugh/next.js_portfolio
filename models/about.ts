import mongoose, { Schema, Model } from "mongoose";
import { IAbout } from "@/types";

const AboutSchema = new Schema<IAbout>({
  summary: String,
  image: String,
  noofprojects: String,
  yearofcodeing: String,
  noofskills: String,
  aboutme: String,
  yearofexperience: String,
  noofclients: String,
  skills: String,
  heading: String,
});

const About: Model<IAbout> =
  mongoose.models.About || mongoose.model<IAbout>("About", AboutSchema);

export default About;
