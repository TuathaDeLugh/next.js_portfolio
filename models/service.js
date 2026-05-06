import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  color: String,
});

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default Service;
