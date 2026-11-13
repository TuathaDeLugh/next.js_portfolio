import { IEdu } from "./edu";
import connectdb from "@/database/connection";
import mongoose from "mongoose";

const EduSchema = new mongoose.Schema({
  degree: String,
  place: String,
  marks: String,
});

const Education =
  mongoose.models.Education ||
  mongoose.models.education ||
  mongoose.model("Education", EduSchema);

export default async function getSingleEdu(
  id: string
): Promise<IEdu | null> {
  try {
    await connectdb();
    const doc = await Education.findById(id).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error("Error fetching edu:", error);
  }
  return null;
}
