import mongoose from "mongoose";

const StandardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const Standard = mongoose.models.Standard || mongoose.model("Standard", StandardSchema);

export default Standard;
