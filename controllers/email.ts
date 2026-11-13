import { IEmail } from "@/types";
import connectdb from "@/database/connection";
import Email from "@/models/mail";

export default async function getEmails(): Promise<IEmail[]> {
  try {
    await connectdb();
    const docs = await Email.find().sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (error) {
    console.warn("Direct DB emails fetch fallback triggered:", error);
  }

  return [];
}
