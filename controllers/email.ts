import { IEmail } from "@/types";

export default async function getEmails(): Promise<IEmail[]> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/email`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const email = await response.json();
    return email.data || [];
  } catch (error) {
    console.error("Error fetching emails:", error);
    return [];
  }
}
