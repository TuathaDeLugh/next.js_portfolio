import { IExperience } from "@/types";
import connectdb from "@/database/connection";
import Experience from "@/models/experience";

export default async function getSingleExp(
  id: string
): Promise<IExperience | null> {
  try {
    await connectdb();
    const doc = await Experience.findById(id).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error("Error fetching experience:", error);
  }
  return null;
}
