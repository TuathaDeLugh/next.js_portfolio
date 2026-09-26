import { IService } from "@/types";

export default async function getSingleService(
  id: string
): Promise<IService | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/services/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching single service:", error);
    return null;
  }
}
