import { IStandard } from "@/types";
import connectdb from "@/database/connection";
import mongoose from "mongoose";

const StandardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const Standard =
  mongoose.models.Standard || mongoose.model("Standard", StandardSchema);

export default async function getSingleStandard(
  id: string
): Promise<IStandard | null> {
  try {
    await connectdb();
    const doc = await Standard.findById(id).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error("Error fetching standard:", error);
  }
  return null;
}
