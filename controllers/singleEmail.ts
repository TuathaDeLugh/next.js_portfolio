import { IEmail } from "@/types";
import connectdb from "@/database/connection";
import Email from "@/models/mail";

export default async function getSingleEmail(
  id: string
): Promise<IEmail | null> {
  try {
    await connectdb();
    const doc = await Email.findById(id).lean();
    if (doc) return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    console.error("Error fetching email:", error);
  }
  return null;
}
