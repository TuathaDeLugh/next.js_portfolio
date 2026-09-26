import { IEdu } from "./edu";

export default async function getSingleEdu(
  id: string
): Promise<IEdu | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/edu/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const edu = await response.json();
    return edu.data || null;
  } catch (error) {
    console.error("Error fetching single edu:", error);
    return null;
  }
}
