import { IExperience } from "@/types";

export default async function getSingleExp(
  id: string
): Promise<IExperience | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/exp/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching single experience:", error);
    return null;
  }
}
