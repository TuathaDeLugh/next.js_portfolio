import { IStandard } from "@/types";

export default async function getSingleStandard(
  id: string
): Promise<IStandard | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/standards/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.data || null;
  } catch (error) {
    console.error("Error fetching single standard:", error);
    return null;
  }
}
