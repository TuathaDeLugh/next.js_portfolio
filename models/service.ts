import mongoose, { Schema, Model } from "mongoose";
import { IService } from "@/types";

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  icon: { type: String, required: true },
  color: { type: String, required: true },
});

const Service: Model<IService> =
  mongoose.models.Service || mongoose.model<IService>("Service", ServiceSchema);

export default Service;
