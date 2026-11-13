import { IService } from "@/types";
import connectdb from "@/database/connection";
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  color: String,
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export default async function getSingleService(
  id: string
): Promise<IService | null> {
  try {
    await connectdb();
    const doc = await Service.findById(id).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error("Error fetching service:", error);
  }
  return null;
}
