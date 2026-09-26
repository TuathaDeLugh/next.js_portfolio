import { IEmail } from "@/types";

export default async function getSingleEmail(
  id: string
): Promise<IEmail | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/email/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const email = await response.json();
    return email.data || null;
  } catch (error) {
    console.error("Error fetching single email:", error);
    return null;
  }
}
